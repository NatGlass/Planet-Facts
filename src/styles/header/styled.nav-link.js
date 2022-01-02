import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import ChevronImage from '../../assets/icon-chevron.svg'

export default styled(NavLink)`
    position: relative;
    color: #fff;
    font-family: ${({ theme }) => theme.fonts.spartan};
    font-weight: 700;

    // mobile //
    @media screen and (max-width: 650px){
        width: 100%;
        height: 45px;
        font-size: 15px;
        letter-spacing: 1.36px;
        padding-left: 45px;
        border-bottom: 1px solid rgba(255,255,255,.1);
        padding-top: 5px;
        overflow: hidden;

        &:last-child{
            border-bottom: none;
        }

        // colors //
        &:before{
            content: '';
            position: absolute;
            top: 1px;
            left: 0;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: white;
        }

        // children colors //
        &:nth-child(1):before{
            background-color: #DEF4FC;
        }
        
        &:nth-child(3):before{
            background-color: #545BFE;
        }

        &:nth-child(4):before{
            background-color: #FF6A45;
        }

        &:nth-child(5):before{
            background-color: #ECAD7A;
        }

        &:nth-child(6):before{
            background-color: #FCCB6B;
        }

        &:nth-child(7):before{
            background-color: #65F0D5;
        }

        &:nth-child(8):before{
            background-color: #497EFA;
        }

        // arrows // 
        &:after{
            content: '';
            position: absolute;
            top: 7px;
            right: 3px;
            width: 6px;
            height: 10px;
            background: url(${ChevronImage});
            background-repeat: no-repeat;
            background-size: cover;
        }
    }

    // tablet and desktop font size //
    @media screen and (min-width:651px){
        font-size: 11px;
    }

    // desktop //
    @media screen and (min-width:1000px){
        position: relative;
        opacity: 0.75;

        &.active{
            opacity: 1;
        }

        &:hover{
            opacity: 1;
        }

        // active links //
        &.active::after{
            content: '';
            position: absolute;
            top: -40px;
            left:50%;
            transform: translateX(-50%);
            width: 100%;
            height: 4px;
            background: #fff;
        }

        // active link highlight colors //
        // mercury //
        &.active:nth-child(1)::after{
            background: ${({theme}) => theme.colors.blueLight};
        }

        // venus //
        &.active:nth-child(2)::after{
            background: ${({theme}) => theme.colors.yellow};
        }

        // earth //
        &.active:nth-child(3)::after{
            background: ${({theme}) => theme.colors.purple};
        }

        // mars //
        &.active:nth-child(4)::after{
            background: ${({theme}) => theme.colors.orangeLight};
        }

        // jupiter //
        &.active:nth-child(5)::after{
            background: ${({theme}) => theme.colors.red};
        }
        
        // saturn //
        &.active:nth-child(6)::after{
            background: ${({theme}) => theme.colors.orange};
        }

        // uranus //
        &.active:nth-child(7)::after{
            background: ${({theme}) => theme.colors.green};
        }

        // neptune //
        &.active:nth-child(8)::after{
            background: ${({theme}) => theme.colors.blue};
        }

        // hover highlight //
            &:hover::after{
            content: '';
            position: absolute;
            top: -40px;
            left:50%;
            transform: translateX(-50%);
            width: 100%;
            height: 4px;
            background: #fff;
        }

        // hover highlight color //
        // mercury //
        &:nth-child(1):hover::after{
            background: ${({theme}) => theme.colors.blueLight};
        }

        // venus //
        &:nth-child(2):hover::after{
            background: ${({theme}) => theme.colors.yellow};
        }

        // earth //
        &:nth-child(3):hover::after{
            background: ${({theme}) => theme.colors.purple};
        }

        // mars //
        &:nth-child(4):hover::after{
            background: ${({theme}) => theme.colors.orangeLight};
        }

        // jupiter //
        &:nth-child(5):hover::after{
            background: ${({theme}) => theme.colors.red};
        }
        
        // saturn //
        &:nth-child(6):hover::after{
            background: ${({theme}) => theme.colors.orange};
        }

        // uranus //
        &:nth-child(7):hover::after{
            background: ${({theme}) => theme.colors.green};
        }

        // neptune //
        &:nth-child(8):hover::after{
            background: ${({theme}) => theme.colors.blue};
        }
    }
`