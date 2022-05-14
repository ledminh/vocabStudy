import { useContext } from 'react';
import { DataContext } from '../controls/DataContext';
import  styled  from 'styled-components';

import WordBlock from './WordBlock';


function Main() {
    const {data} = useContext(DataContext);    

    return (
        <Wrapper>
            {
                data.map(wData  => <WordBlock key={wData.name} data={wData}/>) 
            }
        </Wrapper>
    )
}

export default Main;

const Wrapper = styled.main`
    border: 4px solid black;

    width: 95%;
    max-width: 1400px;
    min-width: 300px;
    margin: auto;
    margin-top: 2rem;

    padding: 1rem;

    background-color: white;
    border-radius: 40px;


`