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
        occurences,
        onChangeHandle
    }
}




function PracticeBlock({word}) {
    
    const {text, occurences, onChangeHandle} = useText(word);
    

    return ( 
        <Wrapper>
            <Description>Now that you learned enough about the word <Emphasize>{word}</Emphasize>, it&apos;s your turn to practice using it. Make one or two sentences or even a paragraph that has this word. Press ENTER when you are done.</Description>
            <TextArea 
                rows="10"
                value = {text}
                onChange = {onChangeHandle}
                />
            <Status>You used the word <Emphasize>{word}</Emphasize> {occurences} times so far.</Status>
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