import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";
import GalleryPage from "../GalleryPage/GalleryPage";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import BrowseArtPage from "../BrowseArtPage/BrowseArtPage";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <>
      <main className="App">
        {user ? (
          <>
            <div style={{ position: "relative", zIndex: "1" }}>
              <NavBar user={user} setUser={setUser} />
            </div>
            <Routes>
              <Route path="/home" element={<BrowseArtPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
          </>
        ) : (
          <>
            <AuthPage setUser={setUser} />
            <Routes>
              <Route
                path="/signup"
                element={<SignUpForm setUser={setUser} />}
              />
              <Route path="/login" element={<LoginForm setUser={setUser} />} />
            </Routes>
          </>
        )}
      </main>
    </>
  );
}

export default App;
