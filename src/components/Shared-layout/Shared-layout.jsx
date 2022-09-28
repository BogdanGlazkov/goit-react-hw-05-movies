import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavBar, StyledLink } from './Shared-layout.styled';

export const SharedLayout = () => {
    return (
        <header>
            <NavBar>
                <StyledLink to="/" end>Home</StyledLink>
                <StyledLink to="/movies">Movies</StyledLink>
            </NavBar>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </header>
    );
};
