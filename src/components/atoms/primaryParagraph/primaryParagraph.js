import styled, { css } from "styled-components";
import { theme } from "../../../theme/mainTheme";

const PrimaryParagraph = styled.p`
  font-family: ${() => theme.family}, sans-serif;
  margin: 0;
  color: ${() => theme.grayOrange};
  font-weight: ${() => theme.bigBold};
  font-size: ${() => theme.fontSize.l};

  ${({ secondary }) =>
    !secondary &&
    css`
      &::before {
        content: "Listen the music with friends right now!";
        font-family: ${() => theme.family}, sans-serif;
        position: absolute;
        top: 25px;
        left: 30px;
        margin: 0;
        color: #fff;
        font-weight: ${() => theme.bigBold};
        font-size: ${() => theme.fontSize.l};
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 2px;
        opacity: 50%;
        z-index: -1;
      }
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      color: ${() => theme.grayBlue};
      text-transform: uppercase;
    `}
`;

export default PrimaryParagraph;
