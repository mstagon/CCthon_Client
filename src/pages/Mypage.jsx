import React, { useState } from 'react';


const MYpage = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const handleChange1 = (event) => {
    setText1(event.target.value);
  };

  const handleChange2 = (event) => {
    setText2(event.target.value);
  };

   const handleSetButton = () => {
    setText1(text1); // 버튼 클릭 시 text1 상태 업데이트
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="자소서를 작성해주세요."
          value={text1}
          onChange={handleChange1}
          style={{
            width: '300px',
            height: '500px',
            fontSize: '16px',
            marginRight: '10px', // 간격 조정
          }}
        />
        <input
          type="text"
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
        <button onClick={handleSetButton}>작성 완료</button> {/* 버튼 추가 */}
    </div>
  );
};

export default MYpage;
