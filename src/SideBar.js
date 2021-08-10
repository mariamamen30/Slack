import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AddIcon from "@material-ui/icons/Add";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "./firebase";

const SideBar = () => {
  const [rooms, loading, error] = useCollection(db.collection("rooms"));
  console.log(rooms?.docs.map((doc) => doc.data().name));

  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>Company Channel</h2>
          <h3>
            <FiberManualRecordIcon />
            Mariam Amen
          </h3>
        </SideBarInfo>
        <CreateIcon />
      </SideBarHeader>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />

      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />

      <SidebarOption Icon={AddIcon} addChannelOption title="Add channel" />

      {rooms?.docs.map((room) => (
        <SidebarOption
          Icon={ChevronRightIcon}
          key={room.id}
          title={room.data().name}
        />
      ))}
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  margin-top: 60px;
  border-top: 1px solid #49274b;
  overflow-y: scroll;

  scrollbar-color: #6f5b80 #321034;
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #321034;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #6f5b80;
    border-radius: 50px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #6f5b70;
  }
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  justify-content: space-between;

  > .MuiSvgIcon-root {
    padding: 8px;
    font-size: 18px;
    border-radius: 100px;
    background-color: white;
    color: #49274b;
  }
`;
const SideBarInfo = styled.div`
  > h3 > .MuiSvgIcon-root {
    color: green;
    font-size: 14px;
    margin-right: 2px;
    margin-top: 1px;
  }
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    align-items: center;
    font-size: 13px;
    font-weight: 400;
  }
`;
