import styled from "styled-components";
import ReactLazyCard from "./lazy-load-card";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledReactLazyCard = styled(ReactLazyCard)``;

function App() {
  return (
    <Container>
      <StyledReactLazyCard />
    </Container>
  );
}

export default App;
