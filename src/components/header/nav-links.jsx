import StyledLink from '../../styles/header/styled.nav-link'

export default function NavLinks() {
    return (
        <>
            <StyledLink to="/" className={({isActive}) => (isActive ? "active" : '')}>MERCURY</StyledLink>
            <StyledLink to="venus" className={({isActive}) => (isActive ? "active" : '')}>VENUS</StyledLink>
            <StyledLink to="/earth" className={({isActive}) => (isActive ? "active" : '')}>EARTH</StyledLink>
            <StyledLink to="/mars" className={({isActive}) => (isActive ? "active" : '')}>MARS</StyledLink>
            <StyledLink to="/jupiter" className={({isActive}) => (isActive ? "active" : '')}>JUPITER</StyledLink>
            <StyledLink to="/saturn" className={({isActive}) => (isActive ? "active" : '')}>SATURN</StyledLink>
            <StyledLink to="/uranus" className={({isActive}) => (isActive ? "active" : '')}>URANUS</StyledLink>
            <StyledLink to="/neptune" className={({isActive}) => (isActive ? "active" : '')}>NEPTUNE</StyledLink>
        </>
    )
}
