import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header/Header";
import WelcomePage from "./pages/WelcomePage";
import DashboardPage from "./pages/DashboardPage";
import ContactPage from "./pages/ContactPage";
import SettingsPage from "./pages/SettingsPage";
import AuthenticationPage from "./pages/AuthenticationPage";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/calendar" element={<DashboardPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/authentication" element={<AuthenticationPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
