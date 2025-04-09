import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [likes, setLikes] = useState([0, 0, 0]);
  const [title, setTitle] = useState(['김밥', '스시', '우동']);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null); // 클릭된 항목 기억

  const increaseLike = (index) => {
    const newLikes = [...likes];
    newLikes[index] += 1;
    setLikes(newLikes);
  };

  const openModal = (index) => {
    setSelectedIndex(index);
    setModalVisible(true);
  };

  return (
    <div className="App">
      <h2 id="title">FOODIE SPOT</h2>

      {title.map((item, index) => (
        <div className="list" key={index}>
          <h4 onClick={() => openModal(index)} style={{ cursor: 'pointer' }}>
            {item}
          </h4>
          <p>
            04월 09일
            <span className="like" onClick={() => increaseLike(index)}> 👍 </span>
            {likes[index]}
          </p>
        </div>
      ))}

      <br />

      <button onClick={() => {
        const copy = [...title];
        copy[0] = '김밥천국';
        setTitle(copy);
      }}>
        글 수정
      </button>

      <hr />

      {/* 모달 */}
      {modalVisible && selectedIndex !== null && (
        <div className="custom-modal">
          <h4>{title[selectedIndex]}</h4>
          <p>04월 09일</p>
          <p>상세내용: 여기에 내용을 자유롭게 넣으세요!</p>

          <button className="btn btn-secondary" onClick={() => setModalVisible(false)}>
            닫기
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
