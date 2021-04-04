import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";

const Chat = styled.div`
  width: 457px;
  height: 800px;
  background-color: #fef7f7;
  opacity: 80%;
  border: 1px solid ${() => theme.grayOrange};
`;

export default Chat;
