import { styled } from "styled-components";
import { PageContainer } from "../../components/styles/Containers";

import logo from "../../assets/logo.svg";

export const LoginPage = () => {  
  return (    
    <PageContainer ai='center' jc='center'>
      <Img src={logo} alt="logotipo"/>
      
      <Input className="login"/>
      
      <Input className="signup"/>
    </PageContainer>
  )
}

/*************************************/
const Img = styled.img`
  min-height: 8rem;
  max-height: 8rem;
  margin-bottom: 4rem;
`
const Input = styled.input`
  width: 100%;
  max-width: 15rem;
  height: 2.75rem;
  margin-bottom: 0.75rem;  
  font-weight: 700;  
  border-radius: var(--Radius);
  border: solid 3px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px 0px;  
  transition: all 0.25s ease-in-out;
`