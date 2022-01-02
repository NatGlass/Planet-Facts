import StyledBurger from '../../styles/header/styled.burger'
import BurgerIcon from '../../assets/hamburger.svg'

export default function Burger({ open, setOpen }) {
    return (
        <StyledBurger src={BurgerIcon} open={open} onClick={()=> setOpen(!open)} />
    )
}
