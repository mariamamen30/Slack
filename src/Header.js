import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const Header = () => {
  return (
    <React.Fragment>
      <HeaderContainer>
        {/* Header left */}
        <HeaderLeft>
          <HeaderAvatar />
          <AccessTimeIcon />
        </HeaderLeft>
        {/* Header search */}
        <HeaderSearch>
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </HeaderSearch>
        {/* Header right */}
        <HeaderRight>
          <HelpOutlineIcon />
        </HeaderRight>
      </HeaderContainer>
    </React.Fragment>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const HeaderSearch = styled.div`
  display: flex;
  align-items: center;
  flex: 0.4;
  border-radius: 6px;
  text-align: center;
  background-color: #421f44;
  padding: 0 50px;
  color: grey;
  border: 1px solid grey;
  > input {
    outline: none;
    border: none;
    text-align: center;
    flex: 1;
    background-color: transparent;
    color: white;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 0.3;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
