import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";

const Paragraph = styled.p`
  font-family: ${() => theme.family}, sans-serif;
  margin: 0;
  color: #fff;
  font-weight: ${() => theme.light};
  font-size: ${() => theme.fontSize.xs};
`;

export default Paragraph;