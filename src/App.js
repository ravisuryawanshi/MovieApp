import React from "react";
import ReactDOM from "react-dom/client";
import MovieApp from "./Components/MovieApp";

const AppLayout = () => {
  return (
    <div>
      <MovieApp />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
