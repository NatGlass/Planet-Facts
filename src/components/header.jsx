import { useState } from 'react'
import StyledHeader from '../styles/header/styled.header'
import StyledInnerHeader from '../styles/header/styled.inner-header'
import Logo from './header/logo'
import Burger from './header/burger'
import Nav from './header/nav'

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <StyledHeader>
            <StyledInnerHeader>
                <Logo />
                <Burger open={open} setOpen={setOpen} />
                <Nav open={open} setOpen={setOpen} />
            </StyledInnerHeader>
        </StyledHeader>
    )
}
