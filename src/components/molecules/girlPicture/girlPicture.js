import styled from "styled-components";
import girlImage from "assets/girlPicture.png";

const GirlPicture = styled.div`
  position: absolute;
  right: -50px;
  bottom: 0;
  width: 500px;
  height: 600px;
  background-image: url(${() => girlImage});
  background-position: center;
  background-size: cover;

  transform: scaleX(-1);
`;

export default GirlPicture;
