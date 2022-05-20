import styled from 'styled-components';
import { useContext } from 'react';
import { DataContext } from '../controls/DataContext';

const AddWordButton = ({word}) => {

    const {addData} = useContext(DataContext);

    const onClickHandle = () => addData(word);

    return (
        <Wrapper onClick={onClickHandle}>
            {word}
        </Wrapper>
    )
    
}

const addAddWordButton = (text, WordWrapper) => text.split(/\b/g).map((w, i) => {
    const regexTest = /\b(\w+)\b/;
    
    if(regexTest.test(w)){
        return <WordWrapper key={w + i}><AddWordButton word={w} /></WordWrapper>
    }
    else {
        return <span key={w + i}>{w}</span>
    }

})

export default AddWordButton;
export {addAddWordButton};

const Wrapper = styled.button`
    border: inherit;
    background-color: inherit;
    color: inherit;
    font-size: inherit;
`

