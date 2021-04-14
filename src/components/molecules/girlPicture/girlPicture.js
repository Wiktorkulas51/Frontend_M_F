import styled from "styled-components";
import girlImage from "assets/girlImage.png";

const GirlPicture = styled.div`
  position: absolute;
  right: -30px;
  bottom: 0;
  width: 500px;
  height: 600px;
  background-image: url(${() => girlImage});
  background-position: center;
  transform: scaleX(-1);
`;

export default GirlPicture;
