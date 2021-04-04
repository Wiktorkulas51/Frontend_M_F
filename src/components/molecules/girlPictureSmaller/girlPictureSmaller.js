import styled from "styled-components";
import GirlImageSmaller from "../../../assets/girlImageSmaller.png";

const GirlPictureSmaller = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  height: 300px;
  background-image: url(${() => GirlImageSmaller});
  background-position: center;
`;

export default GirlPictureSmaller;
