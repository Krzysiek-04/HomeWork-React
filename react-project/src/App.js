import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Box from "./components/Box";
import About from "./components/About";
import AboutMe from "./pages/AboutMe";
import CharactersList from "./pages/CharactersList";
import Stopwatch from "./pages/Stopwatch";
import Log from "./pages/Log";
import Register from "./pages/Register";
import Watch from "./pages/Watch";
import CharactersPage from "./pages/CharctersPage";
import SuccessfulLogin from "./pages/SuccessfulLogin";

function App() {
  const [mainCharacters, setMainCharacters] = useState(null);

  return (
    <Router>
      <Navigation />
      <Route path="/" exact>
        <About />
      </Route>
      <Route path="/about">
        <AboutMe />
      </Route>
      <Route path="/characters-list">
        <CharactersList setMainCharacters={setMainCharacters} />
      </Route>
      <Route path="/stopwatch">
        <Stopwatch />
      </Route>
      <Route path="/log">
        <Log />
      </Route>
      <Route path="/successful-login">
        <SuccessfulLogin />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/watch">
        <Watch />
      </Route>
      {mainCharacters?.map((item) => {
        return (
          <Route path={`/${item.name}/${item.id}`}>
            <CharactersPage item={item} />
          </Route>
        );
      })}
    </Router>
  );
}

export default App;
