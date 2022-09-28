import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { API } from "services/api.services";
import { Container } from "components/Container/Container";
import { CastList } from "components/Cast/CastList";

const Cast = () => {
    const [cast, setCast] = useState(null);
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const { moviesId } = useParams();
    
    useEffect(() => {
        API.getMovieById(moviesId, '/credits').then((res) => {
            setCast(res.cast);
            setStatus('resolved');
            
        }).catch((err) => {
            setErrorMessage("Oops, something went wrong. Try again later");
            setStatus('rejected');
            console.error(err.message);
        });
    }, [moviesId]);
    
    return (
        <Container>
            {status === 'resolved' && <CastList cast={cast} />}
            {status === 'rejected' && <p>{errorMessage}</p>}
        </Container>
    )
};

export default Cast;

Cast.propTypes = {
  status: PropTypes.string.isRequired,
  cast: PropTypes.array,
  errorMessage: PropTypes.string,
};
