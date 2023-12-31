import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 118.4rem;
  height: calc(100svh - 16rem);
  margin: 5rem auto;
  padding: 4rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
