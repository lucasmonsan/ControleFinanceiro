import styled from 'styled-components';

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.ai};
  justify-content: ${props => props.jc};
  
  width: 100%;
  max-width: var(--Max-Width);
  min-height: 100dvh;
  
  color: ${props => props.theme.color05};
  background-color: ${props => props.theme.color02};
`