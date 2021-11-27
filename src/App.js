import React from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllMeetupsPage from "./pages/Allmeetups";
import NewMeetupPage from "./pages/NewMeetups";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
//import MainNavigation from "./components/layout/MainNavigation";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<AllMeetupsPage />} />

            <Route path="/new-meetup" element={<NewMeetupPage />} />

            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
