import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Owner from "./pages/Owner";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F5F5F5] font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/owner" element={<Owner />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
