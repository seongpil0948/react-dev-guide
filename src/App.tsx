import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./pages/404";
import About from "./pages/about";
import D3Charts from "./pages/d3";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<D3Charts />}></Route>
          <Route path="/about/*" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
