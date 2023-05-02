const MovieCard = (props) => {
  const { movie, childToParent } = props;
  const { episode_id, title, release_date } = movie;

  return (
    <tr
      className="bg-white border-b border"
      onClick={() => childToParent(movie)}
      data-testid="movie-row"
    >
      <td scope="row" className="px-6 py-4" data-testid="episode-id">
        EPISODE {episode_id}
      </td>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">{release_date}</td>
    </tr>
  );
};

export default MovieCard;
