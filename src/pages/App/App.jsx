import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";
import GalleryPage from "../GalleryPage/GalleryPage";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import MyCollectionsPage from "../MyCollectionsPage/MyCollectionsPage";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <>
      <main className="App">
        {user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" element={<h2>Home Page</h2>} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/collections" element={<MyCollectionsPage />} />
            </Routes>
          </>
        ) : (
          <>
            <AuthPage />
            <Routes>
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/login" element={<LoginForm />} />
            </Routes>
          </>
        )}
      </main>
    </>
  );
}

export default App;
