import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import MainPage from "./pages/main-page";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
