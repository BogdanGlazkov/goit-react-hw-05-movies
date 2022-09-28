import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { API } from 'services/api.services';
import { MovieItem } from "components/Movie-item/Movie-item";

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [status, setStatus] = useState('idle');
    const { moviesId } = useParams();

    useEffect(() => {
        API.getMovieById(moviesId).then((res) => {
            setMovie(res);
            setStatus('resolved');
        }).catch((err) => {
            setErrorMessage("Oops, something went wrong. Try again later");
            setStatus('rejected');
            console.error(err.message);
        });
    }, [moviesId]);

    return (
        <>
            {status === 'resolved' && <MovieItem movie={movie} />}
            {status === 'rejected' && <p>{errorMessage}</p>}
        </>
    );
};

MovieDetails.propTypes = {
    status: PropTypes.string,
    movie: PropTypes.object,
    errorMessage: PropTypes.string,
};

export default MovieDetails;
