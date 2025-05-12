import Header from './components/Header';
import Pesquisa from './components/Pesquisa';
import AulasPrincipal from './components/AulasPrincipal';
import styled from 'styled-components';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg,rgb(82, 0, 51) 35%, #326589 165%);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <AulasPrincipal />
    </AppContainer>
  );
}

export default App;
