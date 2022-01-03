import styled from 'styled-components'

export default styled.span`
    position: relative;
    font-family: ${({ theme }) => theme.fonts.spartan};
    color: #fff;
    opacity: 0.5;
    cursor: pointer;

    // tablet //
    @media screen and (min-width:651px) and (max-width:999px){
        width: 100%;
        height: 40px;
        border: 1px solid rgba(255, 255, 255,.2);
        padding: 14px 0 0 60px;
        opacity: 1;
        font-size: 10px;
        letter-spacing: 1.93px;
    }

    // desktop //
    @media screen and (min-width:1000px){
        width: 100%;
        height: 48px;
        border: 1px solid rgba(255, 255, 255,.2);
        padding: 19px 0 0 60px;
        opacity: 1;
        font-size: 12px;
        letter-spacing: 2.57px;

        &:hover{
            background: rgba(216, 216, 216, 0.2);
        }
    }

    // numbers //
    @media screen and (min-width:651px){
        &::after{
            content: '';
            position: absolute;
            left: 25px;
            opacity: 0.5;
        }

        &:nth-child(1)::after{
            content: '01';
        }

        &:nth-child(2)::after{
            content: '02';
        }

        &:nth-child(3)::after{
            content: '03';
        }
    }

    // active tab //
    @media screen and (max-width:650px){
        &.active-tab-link{
            opacity: 1;
        }

        &.active-tab-link::after{
            content: '';
            position: absolute;
            bottom: -17px;
            left: 0;
            width: 100%;
            height: 4px;
            background: ${({ theme }) => theme.colors.orange};
        }
    }
    @media screen and (min-width:651px){
        &.active-tab-link{
            background: ${({ theme}) => theme.colors.orange}
        }
}
`