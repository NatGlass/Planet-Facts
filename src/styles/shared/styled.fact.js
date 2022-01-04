import styled from 'styled-components'

export default styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-family: ${({ theme }) => theme.fonts.antonio};
    border: 1px solid rgba(255,255,255,0.2);


    // mobile //
    @media screen and (max-width: 650px){
        width: 100%;
        height: 48px;
        padding: 0 24px;
        font-size: 20px;
        letter-spacing: -0.75px;

        &::before{
            content: '';
            font-family: ${({ theme }) => theme.fonts.spartan};
            font-size: 9px;
            opacity: 0.5;
            font-weight: bold;
            letter-spacing: 0.73px;
        }
    }

    // tablet //
    @media screen and (min-width: 651px) and (max-width:999px){
        position: relative;
        width: 164px;
        height: 88px;
        padding: 20px 0 0 15px;
        font-size: 24px;
        letter-spacing: -0.75px;

        &::before{
            content: '';
            position: absolute;
            top: 16px;
            font-family: ${({ theme }) => theme.fonts.spartan};
            font-size: 9px;
            opacity: 0.5;
            font-weight: bold;
            letter-spacing: 0.73px;
        }
    }

    // desktop //
    @media screen and (min-width: 1000px){
        position: relative;
        width: 255px;
        height: 128px;
        padding: 10px 0 0 20px;
        font-size: 40px;
        letter-spacing: -0.75px;

        &::before{
            content: '';
            position: absolute;
            top: 20px;
            font-family: ${({ theme }) => theme.fonts.spartan};
            font-size: 11px;
            opacity: 0.5;
            font-weight: bold;
            letter-spacing: 0.73px;
        }
    }

    &:nth-child(1)::before{
        content: 'ROTATION TIME';
    }

    &:nth-child(2)::before{
        content: 'REVOLUTION TIME';
    }
    
    &:nth-child(3)::before{
        content: 'RADIUS';
    }

    &:nth-child(4)::before{
        content: 'AVERAGE TEMP.';
    }
`