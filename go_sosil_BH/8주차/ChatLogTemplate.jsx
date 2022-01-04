import React from "react";
import styled from "styled-components";

import ChatLogItem from "./ChatLogItem";


function ChatLogTemplate({chats}) {

  // chats 배열을 받아 저장해 둔 채팅 로그를 보여줌
  // ChatLogItem 컴포넌트 사용
  return (
    <ChatContainer>
      <h1 style={{color: '#415e3e'}}>Chat Log</h1>
      {/* 8주차 실습 구현 */}
      <ChatLogContainer>
      {chats.map((chats_log) => {
        return <ChatLogItem chat={chats_log}/>
      })}
      </ChatLogContainer>
    </ChatContainer>
  );

}

const ChatContainer = styled.div`  
display: flex;
flex-direction: column;
border: 3px solid #fff9a3;
border-radius: 20px;
background-color: #fff9a3;
box-shadow : 0px 0px 20px gray;
  // 해당 영역 모서리를 둥글게
  // 해당 영역 모서리에 그림자
  // 해당 영역의 배경색 변경
  // 8주차 실습 구현
`;

const ChatLogContainer = styled.div`  
display: flex;
flex-direction: column;
padding: 10px;
margin: 20px 10px;
height: 350px;
overflow-y: scroll;
`;
export default ChatLogTemplate;