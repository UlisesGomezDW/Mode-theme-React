import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useTheme } from './themeContext';
import { Autocomplete } from './autocomplete';
import './styles.scss';
const Wrapper = styled('div')`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen';
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: ${props => props.theme.body};
    margin-top: 0;
  }
`;

export default function App() {
  const themeState = useTheme();
  const [online, setOnline] = useState(true);
  useEffect(() => {
    setOnline(navigator.onLine);
  }, []);
  return (
    <Wrapper>
      <button onClick={() => themeState.toggle()}>
        {themeState.dark ? 'Light Mode' : 'Dark Mode'}
      </button>
      <h1>Hello CodeSandbox</h1>
      <Autocomplete />
      {online === false ? <p>No hay internet</p> : null}
    </Wrapper>
  );
}
