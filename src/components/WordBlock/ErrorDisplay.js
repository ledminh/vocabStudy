import styled from 'styled-components';

import AddWordButton from '../AddWordButton';

function ErrorDisplay({error}) {

    return (
        <Wrapper>
            {
                error.body.length == 0?
                <span>Sorry, we couldn&apos;t find definition of the word <Emphasize>{error.word}</Emphasize> in the database. Please enter another one.</span>
                :
                <>
                    <p>Sorry, we couldn&apos;t find definition of the word <Emphasize>{error.word}</Emphasize> in the database.</p>
                    <p>Are you looking for these words:{" "} 
                        {
                            error.body.map((suggestWord, i) => (
                                                <span key={suggestWord}>
                                                    <Word key={suggestWord}>
                                                        <AddWordButton key={suggestWord} word={suggestWord} />
                                                    </Word>
                                                    {
                                                        i != error.body.length - 1?
                                                        <span key={suggestWord + ","}>{", "}</span>:
                                                        <span key={suggestWord + "?"}>{"?"}</span>
                                                    }
                                                </span>
                                                ))
                        }
                    </p>
                </>
            }
        </Wrapper>
            
    )
}

export default ErrorDisplay;

const Wrapper = styled.div`
    text-align: center;
    font-size: 2rem;
    color: gray;

    p {
        margin-bottom: 1rem;
    }

`
const Emphasize = styled.span`
    font-weight: bold;
    color: #a3242f;
`

const Word = styled.span`
    display: inline-block;
    font-size: 1.5rem;

    transition: background-color .3s, color .3s;

    

    &:hover {
        background-color: #240402;
        color: #d1d1d1;
    }
`

