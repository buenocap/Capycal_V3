import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header/Header";
import WelcomePage from "./pages/WelcomePage";
import DashboardPage from "./pages/DashboardPage";
import ContactPage from "./pages/ContactPage";
import SettingsPage from "./pages/SettingsPage";
import Footer from "./components/Footer/Footer";
import SignUp_Page from "./pages/SignUp_Page";
import LogIn_Page from "./pages/LogIn_Page";

function App() {
  //TODO: If token is in localstorage, retrieve user data from database
  //TODO: Create context to manage user data and data retrieval in app
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/calendar" element={<DashboardPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/login" element={<LogIn_Page />} />
          <Route path="/signup" element={<SignUp_Page />} />
          <Route path="*" element={<WelcomePage />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
