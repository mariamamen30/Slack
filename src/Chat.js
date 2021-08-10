import React from "react";
import styled from "styled-components";

const Chat = () => {
  return <ChatContainer></ChatContainer>;
};

export default Chat;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;
