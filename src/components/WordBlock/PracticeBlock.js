import styled from "styled-components";
import { useState } from 'react';
import { countInstances } from "../../utils";


function useText (word)  {
    const [text, setText] = useState("");
    const [occurences, setOccurences] = useState(0);

    const onChangeHandle = (e) => {
        const value = e.target.value;
        setText(value);

        const count = countInstances(value.toUpperCase(), word.toUpperCase());
        setOccurences(count);

        
    }

    return {
        text,
        setText,
        occurences,
        onChangeHandle
    }
}


const onKeyUpHandle = (key, text, setText) => {
    if(key == 'Enter') {
        
    }
}


function PracticeBlock({word}) {
    
    const {text, setText, occurences, onChangeHandle} = useText(word);
    

    return ( 
        <Wrapper>
            <Description>Now that you learned enough about the word <Emphasize>{word}</Emphasize>, it&apos;s your turn to practice using it. Make one or two sentences or even a paragraph that has this word.</Description>
            <TextArea 
                rows="10"
                value = {text}
                onChange = {onChangeHandle}
                onKeyUp = {(e) => onKeyUpHandle(e.target.key, text, setText)}
                />
            <Status>You used the word <Emphasize>{word}</Emphasize> {occurences} times so far.</Status>
            <Result show={text.length != 0}>
                <div>
                    {text}
                </div>
            </Result>
        </Wrapper>
    )
      
}

export default PracticeBlock;


const Wrapper = styled.div`
    margin: 1rem;
`

const Description = styled.div`
    margin-bottom: 1rem;
    color: #424242;
    font-weight: 700;
`

const TextArea = styled.textarea`
    min-width: 100%;
    max-width: 100%;
    
    font-size: 1.5rem;
    font-family: cursive;
    margin-bottom: 1rem;
`

const Status = styled.div`
    font-family: monospace;
`

const Emphasize = styled.span`
    color: #69040e;
    font-size: 120%;
`

const Result = styled.div`
    display: ${props => props.show? 'block' : 'none'};
    background-color: #e3cacd;

    padding: 0 0 1rem 1rem;
    border-radius: 20px;

    margin-top: 2rem;
    &:before {
        content: "PREVIEW";
        display: inline-block;
        margin: 0;

        transform: translateY(-1.2rem);

        background-color: #381417;
        color: white;

        padding: .6rem;

        border-radius: 20px;
    }
`