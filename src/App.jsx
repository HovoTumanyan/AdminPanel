import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import { LessonsProvider } from "./contexts/LessonsContext";
import "./App.css";

function App() {
  return (
    <LessonsProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </LessonsProvider>
  );
}

export default App;
