import styled from "styled-components";
import { theme } from "theme/mainTheme";

const Paragraph = styled.p`
  font-family: ${() => theme.family}, sans-serif;
  margin: 0;
  color: ${({ grayBlue, normal, black }) => {
    if (normal) {
      return "white";
    }
    if (black) {
      return "black";
    }
    if (grayBlue) {
      return theme.grayBlue;
    } else {
      return "#bcb1a2";
    }
  }};
  font-weight: ${() => theme.bold};
  font-size: ${() => theme.fontSize.s};
`;

export default Paragraph;
