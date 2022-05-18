import styled from "styled-components";


const Synonym = ({syn}) => (
    <Wrapper>{syn}</Wrapper>
) 

export default Synonym;

const Wrapper = styled.span`
    display: inline-block;
    margin: .3rem;
    
    padding: .5rem;

    background-color: #303030;
    color: #cfcccc;
    border-radius: 20%;
`