import styled, { css, keyframes } from "styled-components";

const fading = keyframes`
 
    100% {
      opacity: 80%;
    }
    50% {
      opacity: 60%;
    }

    25% {
      opacity: 40%;
    }
  
`;

const AnimatedBox = styled.div`
  width: 357px;
  height: 152px;
  background-color: ${({ second }) => (second ? "#101010" : "#474747")};
  opacity: 80%;
  border: 2px solid #ecba98;
  animation: 1.2s ${fading} ease-in-out infinite;

  ${({ second }) =>
    !second &&
    css`
      border: none;
    `}
`;

export default AnimatedBox;
