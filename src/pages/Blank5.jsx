import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Blank5 = () => {
  const [naverTitle, setNaverTitle] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(''); // 서버 호출
        setNaverTitle(response.data.pageTitle);
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>This is Blank page5</h1>
      <p>Naver Page Title: {naverTitle}</p>
    </div>
  );
};

export default Blank5;
