import styled from "styled-components";
import girlImage from "../../../assets/girlImage.png";

const GirlPicture = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 700px;
  height: 800px;
  background-image: url(${() => girlImage});
  background-position: center;
`;

export default GirlPicture;
