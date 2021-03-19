import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";

const Button = styled.button`
  background-color: ${() => theme.black};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 0;
  width: 120px;
  height: 30px;
  border: none;
  /* border-left: 10px solid ${() => theme.grayOrange}; */
  font-size: ${() => theme.fontSize.xxs};
  overflow: hidden;  
  transition: 1s all ease; 
  //issue with content
  
  &::after {
  content: "";
  position: absolute;
  left: ${({ second }) => (second ? "115px" : "0px")};
  top: 0px;
  width: 5px;
  height: 30px;
  background-color: ${() => theme.grayOrange};
  }
  
  //issue with second
  &:hover::after {
    transition: all 0.4s ease;
   width: ${({ second }) => (second ? "10%" : "100%")};
  

  }
  
`;

export default Button;
