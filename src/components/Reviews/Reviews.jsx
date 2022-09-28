import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from 'services/api.services';
import { Container } from 'components/Container/Container';
import { ReviewsList } from './ReviewsList';

const Reviews = () => {
    const [reviews, setReviews] = useState(null);
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const { moviesId } = useParams();

    useEffect(() => {
        API.getMovieById(moviesId, '/reviews').then((res) => {
            if (!res.results.length) {
                setStatus('not found');
                return;
            };

            setReviews(res.results);
            setStatus('resolved');
        }).catch((err) => {
            setErrorMessage("Oops, something went wrong. Try again later");
            setStatus('rejected');
            console.error(err.message);
        })
    }, [moviesId]);

    return (
        <Container>
            {status === 'not found' && <p>There're no reviews for this movie</p>}
            {status === 'resolved' && <ReviewsList reviews={reviews} />}
            {status === 'rejected' && <p>`Sorry! ${errorMessage}</p>}
        </Container>
    );
};

export default Reviews;
