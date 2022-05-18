import styled from "styled-components";

function PracticeBlock({word}) {

    return (
        <Wrapper>
            <Description>Now that you learned enough about the word {word}, it&apos;s your turn to practice using it. Make one or two sentences or even a paragraph that has this word. Press ENTER when you are done.</Description>
            <TextArea rows="10"/>
            <Status>You used the word {word} 10 times so far.</Status>
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

    max-height: 10line;

    margin-bottom: 1rem;
`

const Status = styled.div`
    font-family: monospace;
`