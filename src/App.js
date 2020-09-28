import React, { useState, useEffect } from "react";
import "./App.scss";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import camera from "./components/Camera/Camera";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    // camera.startCamera();
    // camera.takeSnapshot();
  }, []);
  console.log(loading);
  return (
    <div className="app">
      {loading && <Loader />}
      <Header />
    </div>
  );
};
export default App;
