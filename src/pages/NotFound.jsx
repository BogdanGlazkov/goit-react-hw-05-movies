import PropTypes from 'prop-types';
import { Container } from "components/Container/Container";
import { StyledText, StyledLink } from "./pages.styled/NotFound";

const NotFound = () => {
    return (
        <Container>
            <StyledText>Unfortunately, this page doesn't exist.</StyledText>
            <StyledLink to="/">Go back to Home page</StyledLink>
        </Container>
    );
};

NotFound.propTypes = {
    to: PropTypes.string,
};

export default NotFound;
