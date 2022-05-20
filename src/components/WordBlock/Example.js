import styled from "styled-components";

import { addAddWordButton } from "../AddWordButton";

const Example = ({text, index}) => (
    <Wrapper index={index}>{addAddWordButton(text, MarkWord)}</Wrapper>
) 

export default Example;

const Wrapper = styled.p`
    margin-bottom: .7rem;

    color: ${props => (props.index%2 == 0? '#4444c2': '#494985')};

    
`

const MarkWord = styled.span`
    font-size: 1.2rem;
    
    &:hover {
        display: inline-block;
        

        
        background-color: #5c5c5c;
        color: #ededed;

        

    
    }
`