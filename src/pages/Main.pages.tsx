import { MainContainer } from "../containers/Main.container"
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family:'AppleSDGothicNeoM';
    src: url(${require('../assets/fonts/AppleSDGothicNeoM.ttf')});
  }
  body {
    font-family: 'AppleSDGothicNeoM', sans-serif;
  }
`;

export const MainPage = (): JSX.Element => {

  return (
    <>
      <GlobalStyles />
      <MainContainer />
    </>
  )
}