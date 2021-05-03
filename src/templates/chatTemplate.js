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

const StyledPicker = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
`;

const ChatTemplate = () => {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [Click, setClick] = useState(false);
  const [Input, setInput] = useState("");

  const onEmojiClick = (e, emojiObject) => {
    console.log(e, "a");
    console.log(emojiObject);
    setChosenEmoji(emojiObject.emoji);
    setClick(false);
  };

  const handleClick = () => {
    setClick(true);
  };

  const handleDivCLick = () => {
    if (Click) setClick(false);
  };

  const handleInput = (e) => {
    let value = e.target.value;
    setInput(value);
    if (chosenEmoji) {
      console.log(Input);
      setInput(value + chosenEmoji);
    }
    // if (chosenEmoji !== null) {
    //   console.log("object");
    //   console.log(chosenEmoji);
    //   setInput(value);
    //   return;
    // }
  };

  return (
    <Wrapper onClick={handleDivCLick}>
      {Click ? (
        <StyledPicker>
          <Picker
            onEmojiClick={onEmojiClick}
            skinTone={SKIN_TONE_MEDIUM_DARK}
          />
        </StyledPicker>
      ) : (
        <></>
      )}
      <BottomWrapper>
        <>{/* <button>Invite Your friends</button> */}</>
        <StyledInpute
          type="text"
          placeholder="give your friends a sign "
          onChange={(e) => handleInput(e)}
          value={Input}
        />
        <FlexWrapper>
          <ButtonIcon
            icon={smile}
            onClick={() => handleClick()}
            style={{ zIndex: "10" }}
          ></ButtonIcon>
          <ChatButtonIcon>Send</ChatButtonIcon>
        </FlexWrapper>
      </BottomWrapper>
    </Wrapper>
  );
};

export default ChatTemplate;
