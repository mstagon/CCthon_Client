import React, { useState } from 'react';

const Mypage = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const handleChange1 = (event) => {
    setText1(event.target.value);
  };

  const handleChange2 = (event) => {
    setText2(event.target.value);
  };

  const handleSetButton = () => {
    // "작성 완료" 버튼 클릭 시 text1 상태를 text2 상태로 복사
    setText2(text1);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', margin: 20, marginLeft: 150 }}>
        <textarea
          placeholder="자소서를 작성해주세요."
          value={text1}
          onChange={handleChange1}
          style={{
            width: '300px',
            height: '500px',
            fontSize: '16px',
            marginRight: '10px',
          }}
        />
        <textarea
          placeholder="수정된 자소서입니다."
          value={text2}
          onChange={handleChange2}
          style={{
            width: '300px',
            height: '500px',
            fontSize: '16px',
          }}
        />
      </div>
      <div style={{ margin: 20, marginLeft: 150 }}>
        <button onClick={handleSetButton}>작성 완료</button>
      </div>
    </div>
  );
};

export default Mypage;