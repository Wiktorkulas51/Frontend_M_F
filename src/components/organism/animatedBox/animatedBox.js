import styled, { css } from "styled-components";

const AnimatedBox = styled.div`
  width: 357px;
  height: 152px;
  background-color: ${({ second }) => (second ? "#101010" : "#474747")};
  opacity: 80%;
  border: 2px solid #ecba98;
  ${({ second }) =>
    !second &&
    css`
      border: none;
    `}
`;

export default AnimatedBox;
