import logoIcon from "../../../assets/musicLogo.svg";
import styled from "styled-components";

const LogoIcon = styled.button`
  width: 50px;
  height: 50px;
  background-image: url(${() => logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100% 100%;
  border: none;
  background-color: transparent;
  display: inline-block;
`;

export default LogoIcon;
