import Header from "./Header";
import Body from "./Body";
import { useState } from "react";

const MovieApp = () => {
  const [movieName, setMovieName] = useState("");
  const [sortParam, setSortParam] = useState("");
  return (
    <div>
      <Header setMovieName={setMovieName} setSortParam={setSortParam} />
      <Body movieName={movieName} sortBy={sortParam} />
    </div>
  );
};

export default MovieApp;
