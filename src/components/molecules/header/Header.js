import styled from "styled-components";
import headerImage from "../../../assets/navImage.jpg";

const HeaderImage = styled.header`
  max-width: 100%;
  height: 200px;
  background-repeat: no-repeat;
  background-image: url(${() => headerImage});
  background-position: center 45%;
  background-size: cover;
`;

export default HeaderImage;
