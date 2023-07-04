import { styled } from "styled-components"

export const Header = () => {
  return (
    <HeaderContainer>
      Header
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  position: fixed;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  min-height: var(--Header-Height);
  max-height: var(--Header-Height);
`