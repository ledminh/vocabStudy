import styled from "styled-components";
import { useEffect, useRef, useState } from 'react';
import { countInstances } from "../../utils";



const countWordOccurences = (text, word) => countInstances(text.toUpperCase(), word.toUpperCase());

function useText (word)  {
    
    const [occurences, setOccurences] = useState(0);
    const [text, setText] = useState("");

    const onChangeHandle = (e) => {
        const value = e.target.value;
        setText(value);

        const count = countWordOccurences(value, word);
        setOccurences(count);

        
    }

    return {
        text,
        setText,
        occurences,
        setOccurences,
        onChangeHandle
    }
}


function processTextForPreview(text) {
    text = text.split('\n');

    return text;
}

function highLightWord(text, word) {
    const arr = [];
    
    let startI = 0,
        i = text.toUpperCase().indexOf(word.toUpperCase(), startI);

    while(i != - 1){
        arr.push(text.substring(startI, i));
        arr.push(text.substring(i, i + word.length));

        startI = i + word.length;
        i = text.toUpperCase().indexOf(word.toUpperCase(), startI);
    }

    arr.push(text.substring(startI));


    return arr;
}


function PracticeBlock({word, practiceText}) {
    
    const {text, setText, occurences, setOccurences, onChangeHandle} = useText(word);
    
    const wordRef = useRef({practiceText});

    useEffect(() => {
        wordRef.current.practiceText.text = text;

    }, [text]);


    useEffect(() => {
        wordRef.current = {practiceText};

        setText(wordRef.current.practiceText.text);
        const count = countWordOccurences(wordRef.current.practiceText.text, word);
        setOccurences(count);
        
    }, [word]);

    return ( 
        <Wrapper>
            <Description>Now that you learned enough about the word <Emphasize>{word}</Emphasize>, it&apos;s your turn to practice using it. Make one or two sentences or even a paragraph that has this word.</Description>
            <TextArea 
                rows="10"
                value = {text}
                onChange = {onChangeHandle}
                
                />
            <Status>You used the word <Emphasize>{word}</Emphasize> {occurences} times so far.</Status>
            <Result show={text.length != 0}>
                <div>
                    {processTextForPreview(text).map(t => {
                        
                        return (
                            <p key={t}>
                                {highLightWord(t, word).map((fText, i) => {
                                    
                                    if(fText.toUpperCase() != word.toUpperCase()) return <span key={fText + i}>{fText}</span>
                                    else return <Emphasize key={fText + i}>{fText}</Emphasize>
                                })}
                            </p>
                            );
                    })}
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

    p {
        margin-bottom: .5rem;
    }
`