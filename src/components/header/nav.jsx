import StyledNav from '../../styles/header/styled.nav'
import StyledNavInner from '../../styles/header/styled.nav-inner'
import StyledNavLinks from './nav-links'

export default function Nav({ open }) {
    return (
        <StyledNav open={open}>
            <StyledNavInner>
                <StyledNavLinks />
            </StyledNavInner>
        </StyledNav>
    )
}
