import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router";

const MainPage = lazy(async () => import("./pages/Main.Page"));

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={MainPage} />
      </Routes>
    </Router>
  );
};

export default App;
