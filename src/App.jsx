import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
