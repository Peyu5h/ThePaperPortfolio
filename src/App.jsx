import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="relative bg-[#C4BCB3] h-full w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
