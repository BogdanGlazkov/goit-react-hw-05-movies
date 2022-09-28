import PropTypes from 'prop-types';
import { ListItem, List, StyledLink, Image } from './Movie-list.styled';

export const MovieList = ({ movies, from }) => {
    const elements = movies.map(({ name, title, id, poster_path }) =>
        <ListItem key={id} >
            <StyledLink to={`/movies/${id}`} state={{ from }} >
                <Image src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={name || title} />
                <p>{name || title}</p>
            </StyledLink>
        </ListItem>);
    
    return (
        <List>
            {elements}
        </List>
    )
};

MovieList.propTypes = {
    from: PropTypes.string,
    movies: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        title: PropTypes.string,
        id: PropTypes.number,
        poster_path: PropTypes.string,
    })
)};
