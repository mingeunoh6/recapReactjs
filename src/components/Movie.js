import PropTypes from "prop-types"
import {Link} from "react-router-dom"


function Movie({ id, medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
        </h2>

      <ul>
        {genres.map((genre, index) => (
          <li key={index}>{genre}</li>
        ))}
      </ul>
      <div>
        <img src={medium_cover_image} alt={title} />
      </div>
      <p>{summary}</p>
    </div>
  );
}


Movie.propTypes = {
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired,


};


export default Movie;
