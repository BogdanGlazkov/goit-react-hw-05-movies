import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { SearchForm } from "components/Search-form/Search-form";
import { Container } from "components/Container/Container";
import { API } from "services/api.services";
import { MovieList } from "components/Movie-list/Movie-list";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const location = useLocation();
    const from = `${location.pathname}${location.search}`;

    useEffect(() => {
        if (query) {
            API.getSearchMovies(query).then((res) => {
                if (!res.results.length) {
                    toast.error("Sorry, there's nothing found. Please try again.");
                    return;
                };
                setMovies(res.results);
            }).catch((err) => {
                setErrorMessage("Oops, something went wrong. Try again later");
                console.error(err.message);
            });
        };
    }, [query]);

    const handleFormSubmit = (newQuery) => {
        setSearchParams({ query: newQuery })
    };

    return (
        <main>
            <Container>
                <SearchForm onSubmit={handleFormSubmit} />
                {errorMessage ? <p>{errorMessage}</p>
                    : <MovieList movies={movies} from={from} />}
                <ToastContainer hideProgressBar={true} theme="dark" />
            </Container>
        </main>
    );
};

export default Movies;
