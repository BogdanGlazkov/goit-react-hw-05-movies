import PropTypes from 'prop-types';
import { CastItem, CastImage, List } from "./CastList.styled";

export const CastList = ({ cast }) => {
    const elements = cast.map(({ character, profile_path, name, id }) => (
        <CastItem key={id}>
            {profile_path && <CastImage src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />}
            <p>{name}</p>
            <p>Character: {character}</p>
        </CastItem>));
    
    return (
        <List>
            {elements}
        </List>
    )
};

CastList.propTypes = {
    cast: PropTypes.arrayOf(PropTypes.shape({
        character: PropTypes.string.isRequired,
        profile_path: PropTypes.string,
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    })
)};
