import StyleProvider from "./styles";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    </StyleProvider>
  );
}

export default App;
