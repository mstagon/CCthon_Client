import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import '../style/MyCalender.css'
import * as events from "events";

// const MyCalender = () => {
//     return <div>This is Blank page4</div>;
// };
//
// export default MyCalender;

class MyCalendar extends Component {

//     constructor(props){
//         super(props);
//     }
//
//     dateClick=(info)=>{
//     const clickedDate = info.dateStr;
//     const clickedEvent = this.props.events.find(event => event.date === clickedDate);
//
// }
    constructor(props) {
        super(props);
        this.state = {
            events: [], // 이벤트 데이터를 저장할 상태 변수
            clickedEvent: null
        };
    }

    componentDidMount() {
        // 이벤트 데이터를 외부에서 가져오는 코드 예시
        // 실제로는 서버에서 데이터를 가져오거나 다른 방법으로 데이터를 채워야 합니다.
        const eventData = [
            { title: 'LG 공고', date: '2023-10-23', color: '#111111', url: 'https://www.lge.co.kr' },
            { title: '삼성전자 공고', start: '2023-09-05', end: '2023-09-14', color: '#b1aee5',  },
        ];

        this.setState({ events: eventData });
    }

    dateClick = (info) => {
        const clickedDate = info.dateStr;
        const clickedEvent = this.state.events.find(event => event.date === clickedDate);
        this.setState({ clickedEvent });
    }

    closeEventPopup = () => {
        this.setState({ clickedEvent: null });
    }

    render() {
        return (
          <div className="MyCalender">
              <div style={{
                  margin: 20,
                  // marginLeft:50,
                  marginRight:50,
                  color:"#BB7CD2",
                  fontSize:15,
                  backgroundColor: "#FFF2AE",
                  whiteSpace:"pre-wrap"
                    }}>
            <FullCalendar
                 plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                    initialView={'dayGridMonth'}
                    headerToolbar={
                        {
                            start: 'prev,today',
                            center: 'title',
                            end: 'next'
                        }
                    }
                 firstDay={1}
                 height={"80vh"}
                 dateClick = {this.dateClick}
                 events={this.state.events} // 상태에 저장된 이벤트 데이터 사용
                 editable={true}
            />
              </div>
              {this.state.clickedEvent && (
                    <div className="event-popup">
                        <h3>{this.state.clickedEvent.title}</h3>
                        <p>Date: {this.state.clickedEvent.date}</p>
                         <p>
                            Link: <a href={this.state.clickedEvent.url} target="_blank" rel="noopener noreferrer">{this.state.clickedEvent.url}</a>
                        </p>
                        <p><br/></p>
                        <button className="button" onClick={this.closeEventPopup}>Close</button>
                    </div>
                )}
          </div>
        );
    }
}

export default MyCalendar;

