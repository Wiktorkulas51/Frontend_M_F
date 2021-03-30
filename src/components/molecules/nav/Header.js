import styled from "styled-components";
import headerImage from "../../../assets/headerImage.jpg";

const HeaderImage = styled.nav`
  width: 100%;
  height: 400px;
  background-image: url(${() => headerImage});
  background-repeat: no-repeat;
  background-size: 100% 70%;
`;

export default HeaderImage;
