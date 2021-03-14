import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";

const Button = styled.button`
  background-color: ${() => theme.grayOrange};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0;
  width: 120px;
  height: 30px;
  border: none;
  font-size: ${() => theme.fontSize.xxs};
`;

export default Button;
