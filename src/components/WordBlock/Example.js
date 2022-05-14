import styled from "styled-components";


const Example = ({text, index}) => (
    <Wrapper index={index}>{text}</Wrapper>
) 

export default Example;

const Wrapper = styled.p`
    font-size: 1.5rem;
    margin-bottom: .7rem;

    color: ${props => (props.index%2 == 0? '#4444c2': '#494985')};

    
`