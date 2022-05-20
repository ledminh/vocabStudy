import logoImg from './imgs/MVM-logo.png';

import styled from "styled-components";

const MerriamLogo = () => (
    <Wrapper>
        Powered by
        <img src={logoImg} alt="Merriam-Webster"/>
    </Wrapper>
)

export default MerriamLogo;

const Wrapper = styled.div`
    margin-top: 2rem;
    text-align: center;
    color: gray;
    
    img {
        display: block;
        width: 100px;
        margin: auto;
        margin-top: 1rem;
    }
`