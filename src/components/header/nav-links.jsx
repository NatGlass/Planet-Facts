import StyledLink from '../../styles/header/styled.nav-link'

export default function NavLinks() {
    return (
        <>
            <StyledLink to="/" exact activeClassName="active">MERCURY</StyledLink>
            <StyledLink to="venus" exact activeClassName="active">VENUS</StyledLink>
            <StyledLink to="/earth" exact activeClassName="active">EARTH</StyledLink>
            <StyledLink to="/mars" exact activeClassName="active">MARS</StyledLink>
            <StyledLink to="/jupiter" exact activeClassName="active">JUPITER</StyledLink>
            <StyledLink to="/saturn" exact activeClassName="active">SATURN</StyledLink>
            <StyledLink to="/uranus" exact activeClassName="active">URANUS</StyledLink>
            <StyledLink to="/neptune" exact activeClassName="active">NEPTUNE</StyledLink>
        </>
    )
}
