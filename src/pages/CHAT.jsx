import React, {useState} from 'react';
import '../style/Chat.scss';
import axios from 'axios';
import {Link} from "react-router-dom";

function CHAT() {
    const [chatHistory, setChatHistory] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [prompt, setPrompt] = useState('');
    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSendMessage = async () => {
        if (userInput.trim() === '') return;

        const newUserMessage = {
            role: 'user',
            content: userInput,
            icon: '👤',
        };
        setChatHistory([...chatHistory, newUserMessage]);
        setUserInput('');
        try {
            const response = await axios.post('', {
                prompt: userInput, history: []
            });
            const content = response.data.content;
            const events = response.data.events;
            for (const event of events) {
                const title = event.title;
                const color = event.color;
                const start = event.start;
                const end = event.end;

                const aiResponse = {
                    role: 'assistant',
                    content: content,
                    events: [title, color, start, end],
                    icon: '🤖',
                };
                setPrompt('');
                setChatHistory((prevHistory) => [...prevHistory, aiResponse]);
            }
        } catch (error) {
            console.error('메시지 전송 중 오류 발생:', error);
        }


    };

    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-history" id="chat-history">
                <div className="prompt">{prompt}</div>
                {chatHistory.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${message.role === 'user' ? 'user-message' : 'ai-message'}`}
                    >
                        <span className="icon">{message.icon}</span>
                        <div>{message.content}
                        </div>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    id="user-input"
                    placeholder="메시지 입력..."
                    value={userInput}
                    onChange={handleInputChange}
                    onKeyPress={handleInputKeyPress}
                />
                <button id="send-button" onClick={handleSendMessage}>
                    전송
                </button>
            </div>
        </div>
    );
}


export default CHAT;