import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";
import GalleryPage from "../GalleryPage/GalleryPage";
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
              <Route path="/" element={<p>Logged In</p>} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/collections" element={<MyCollectionsPage />} />
            </Routes>
          </>
        ) : (
          <AuthPage setUser={setUser} />
        )}
      </main>
    </>
  );
}

export default App;
