import React from "react";
import Footer from "../components/Footer";
import { DivApp, H1 } from "../styled/App";
import TemporizerContainer from "../components/TemporizerContainer";
function App() {
  return (
    <DivApp className="App">
      <H1>WE'RE LAUCHING SOON</H1>
      <TemporizerContainer/>
      <Footer/>
    </DivApp>
  );
}

export default App;
