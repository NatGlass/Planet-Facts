import styled from 'styled-components'

export default styled.div`
    // mobile //
    @media screen and (max-width: 650px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        width: 90vw;
        height: 487px;
        margin: 45px auto 0 auto;
        overflow: hidden;
    }

    // tablet // 
    @media screen and (min-width: 651px) and (max-width:999px){
        display: flex;
        justify-content: space-between;
        width: 665px;
    }

    // desktop //
    @media screen and (min-width:1000px){
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-top: 40px;
    }

`