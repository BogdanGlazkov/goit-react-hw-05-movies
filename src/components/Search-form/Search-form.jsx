import { useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { Container } from "components/Container/Container";
import { StyledForm, StyledInput, StyledButton } from "./Search-form.styled";

export const SearchForm = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = e => {
        setQuery(e.target.value);
    };

    const handleFormSubmit = e => {
        e.preventDefault();
        if (!query.trim()) {
            toast.warning('Enter your query please!');
            return;
        };
        onSubmit(query);
        setQuery('')
    };

    return (
        <Container>
            <StyledForm onSubmit={handleFormSubmit}>
                <StyledInput name="film" value={query} placeholder="Enter your query..." onChange={handleInputChange} />
                <StyledButton type="submit">Search</StyledButton>
            </StyledForm>
        </Container>
    );
};

SearchForm.propTypes = {
    handleFormSubmit: PropTypes.func,
    handleInputChange: PropTypes.func,
    query: PropTypes.string,
};
