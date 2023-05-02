const MovieInfo = (props) => {
  const { director, title, opening_crawl } = props.movieDetails;
  return (
    <div className="flex flex-col space-y-4 ps-10 py-10">
      <p className="font-extrabold" data-testid="title">
        {title}
      </p>
      <p>{opening_crawl}</p>
      <p>Directed by: {director}</p>
    </div>
  );
};

export const EmptyMovie = () => {
  return <div className="text-center pt-44">No Movie selected</div>;
};

export default MovieInfo;
