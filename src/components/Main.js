import { useContext } from 'react';
import { DataContext } from '../controls/DataContext';
import  styled  from 'styled-components';

import NavBar from './NavBar';
import WordBlock from './WordBlock';
import { useState } from 'react';


function Main() {
    const {data} = useContext(DataContext);
    const [index, setIndex]  = useState(0);  



    return (
        data.length != 0 ?
            (<Wrapper>
                <NavBar wordsArr={data.map(d => ({name: d.name, hasError: d.hasError}))} 
                        currentIndex={index} 
                        setIndex={setIndex}
                        />
                {
                    <WordBlock data={data[index]}/> 
                }
            </Wrapper>):
            null
    )
}

export default Main;

const Wrapper = styled.main`
    border: 4px solid black;

    width: 95%;
    max-width: 1600px;
    min-width: 300px;
    margin: auto;
    margin-top: 2rem;

    padding: 1rem;

    background-color: white;
    border-radius: 40px;


`