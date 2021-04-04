import styled from "styled-components";
import headerImage from "../../../assets/navImage.jpg";

const HeaderImage = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 200px;
  background-repeat: no-repeat;
  background-image: url(${() => headerImage});
  background-position: center 45%;
  background-size: cover;
  z-index: -1;
`;

export default HeaderImage;
