import { styled } from "styled-components"
import { RiExchangeLine } from "react-icons/ri"
import { useContext } from "react"
import { SwitchThemeContext } from "../../contexts/ThemeContext"



export const Header = () => {
  const { currentTheme, setCurrentTheme } = useContext(SwitchThemeContext);

  return (
    <HeaderContainer>
      Header
      <RiExchangeLine size={32} onClick={e => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')}/>
    </HeaderContainer>
  )
}

/**********************************/
const HeaderContainer = styled.div`
  position: fixed;
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  min-height: var(--Header-Height);
  max-height: var(--Header-Height);
`