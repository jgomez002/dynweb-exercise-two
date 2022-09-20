import React from "react";
import {
  createBrowserRouter,RouterProvider, Route,} from "react-router-dom";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/article",
    element: <Article />,
  }
]);

import List from "./pages/list";

import Article from "./pages/article";

function App() {
  return (
    <div className="App">
      <List/>
    </div>
  );
}

export default App;
