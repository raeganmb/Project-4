import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";
import GalleryPage from "../GalleryPage/GalleryPage";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import MyCollectionsPage from "../BrowseArtPage/BrowseArtPage";
import HomePage from "../HomePage/HomePage";
import DetailsPage from "../DetailsPage/DetailsPage";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <>
      <main className="App">
        {user ? (
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/" />
              <Route path="/home" element={<HomePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/collections" element={<MyCollectionsPage />} />
              <Route path="/details" element={<DetailsPage />} />
            </Routes>
          </>
        ) : (
          <>
            <AuthPage setUser={setUser} />
            {/* <Routes>
              <Route
                path="/signup"
                element={<SignUpForm setUser={setUser} />}
              />
              <Route path="/login" element={<LoginForm setUser={setUser} />} />
            </Routes> */}
          </>
        )}
      </main>
    </>
  );
}

export default App;
