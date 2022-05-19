import styled from "styled-components";
import AddWordButton from './../AddWordButton';


const Synonym = ({syn}) => (
    <Wrapper><AddWordButton word={syn}/></Wrapper>
) 

export default Synonym;

const Wrapper = styled.span`
    display: inline-block;
    margin: .3rem;
    
    padding: .5rem;

    background-color: #5c5c5c;
    color: #ededed;
    border-radius: 20%;

    font-size: 1.2rem;

    &:hover {
        background-color: black;
        color: white;
    }
`


