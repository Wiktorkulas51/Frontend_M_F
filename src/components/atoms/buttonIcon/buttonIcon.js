import styled from "styled-components";

const ButtonIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 25px;
  height: 25px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100% 100%;
  border: none;
  background-color: transparent;
  fill: white;
`;

export default ButtonIcon;
