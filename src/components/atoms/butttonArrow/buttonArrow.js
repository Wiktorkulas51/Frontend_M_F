import styled from "styled-components";
import { theme } from "theme/mainTheme";

const ButtonIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 25px;
  height: 25px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  border: none;
  border-radius: 50px;
  background-color: ${() => theme.grayBlue};
`;

export default ButtonIcon;
