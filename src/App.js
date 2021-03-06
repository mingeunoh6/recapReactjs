import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
  
        <Route path="/movie" element={<Detail />} />
        <Route path="/"  element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
