import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { API } from "services/api.services";
import { Container } from "components/Container/Container";
import { MovieList } from "components/Movie-list/Movie-list";

const Home = () => {
    const [trendingFilms, setTrendingFilms] = useState([]);
    const location = useLocation();

    useEffect(() => {
        API.getTrending().then((res) => {
            setTrendingFilms(res.results)
        }).catch(err => console.error(err.message))
    }, []);

    return (
        <main>
            <Container>
                <h1>Trending Today</h1>
                <MovieList movies={trendingFilms} from={location.pathname} />
            </Container>
        </main>
    )
};

Home.propTypes = {
    trendingFilms: PropTypes.array,
    location: PropTypes.object,
};

export default Home;
