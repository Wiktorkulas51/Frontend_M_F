import React, { useState } from "react";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
import ChatButtonIcon from "components/atoms/chatButton/chatButton";
import ButtonIcon from "components/atoms/buttonIcon/buttonIcon";
import styled from "styled-components";
import Input from "components/atoms/inpute/inpute";
import smile from "assets/smileIcon.svg";

const Wrapper = styled.div`
  background-color: #bdbaba;
  border: 3px solid #9f825e;
  grid-column: 2/2;
  grid-row: 1 / 3;
  justify-items: stretch;
`;

const BottomWrapper = styled.div`
  position: absolute;
  display: grid;
  bottom: 0px;
  width: 30%;
  grid-template-columns: 70% 0.7fr;
  grid-template-rows: 2fr 2fr;
`;

const FlexWrapper = styled.div`
  position: relative;
  right: 1px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  grid-column: 2/2;
  grid-row: 2/2;
  background-color: #bababa;
`;

const StyledInpute = styled(Input)`
  background-color: #bababa;
  border: none;
  width: 100%;
  height: 100%;
  grid-column: 1/2;
  grid-row: 2/2;
  border-radius: 0px;
  color: #000;
`;

const ChatTemplate = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [Click, setClick] = useState(false);

  const onEmojiClick = (e, emojiObject) => {
    setChosenEmoji(emojiObject);
    setClick(false);
  };

  console.log(chosenEmoji, "emo");

  const handleClick = (e) => {
    setClick(true);
  };

  const handleDivCLick = () => {
    if (Click) setClick(false);
  };
  console.log(Click, "click");

  return (
    <Wrapper onClick={handleDivCLick}>
      {Click ? (
        <Picker
          onEmojiClick={onEmojiClick}
          skinTone={SKIN_TONE_MEDIUM_DARK}
          style={{ position: "absolute", top: " -300px", right: "100px" }}
        />
      ) : (
        <></>
      )}
      <BottomWrapper>
        <>{/* <button>Invite Your friends</button> */}</>
        <StyledInpute type="text" placeholder="give your friends a sign " />
        <FlexWrapper>
          <ButtonIcon
            icon={smile}
            onClick={(e) => handleClick(e)}
            style={{ zIndex: "10" }}
          ></ButtonIcon>
          <ChatButtonIcon>Send</ChatButtonIcon>
        </FlexWrapper>
      </BottomWrapper>
    </Wrapper>
  );
};

export default ChatTemplate;
