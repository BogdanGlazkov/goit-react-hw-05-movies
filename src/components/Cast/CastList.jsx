import PropTypes from 'prop-types';
import { CastItem, CastImage, List } from "./CastList.styled";

export const CastList = ({ cast }) => {
    const elements = cast.map(({ character, profile_path, name, id }) => (
        <CastItem key={id}>
            <CastImage src={profile_path ? (`https://image.tmdb.org/t/p/w500${profile_path}`)
            : ("https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png")} alt={name} />
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
        character: PropTypes.string,
        profile_path: PropTypes.string,
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    })
)};
