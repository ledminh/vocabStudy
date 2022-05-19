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


export default AddWordButton;


const Wrapper = styled.button`
    border: inherit;
    background-color: inherit;
    color: inherit;
    font-size: inherit;
`