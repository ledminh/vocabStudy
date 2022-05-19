import styled from 'styled-components';
import BlockWrapper from './BlockWrapper';
import Definition from './Definition';
import Synonym from './Synonym';
import Example from './Example';
import PracticeBlock from './PracticeBlock';

import getOtherResources  from '../../controls/getOtherResources';
import { createSound } from '../../controls/SoundControl';
import { useState } from 'react';

// const definitions = [
//     {
//         type: "adjective",
//         defs: ["Adj definition 1", "Adj definition 2", "Adj definition 3"]
//     },

//     {
//         type: "noun",
//         defs: ["Noun definition 1", "Noun definition 2", "Noun definition 3"]
//     },

//     {
//         type: "verb",
//         defs: ["Verb definition 1", "Verb definition 2", "Verb definition 3"]
//     }
// ]

// const synonyms = [
//     'synonyms', 'keep', 'hello'
// ]

// const examples = [
//     "The cat stretched.",
//     "Jacob stood on his tiptoes.",
//     "The car turned the corner.",
//     "Kelly twirled in circles.",
//     "She opened the door.",
//     "Aaron made a picture.",
//     "I'm sorry.",
//     "I danced."
// ]

const sayItButtonHandle = (soundLink, setSayItActive, sayItActive) => {
    if(sayItActive) return;


    const sound = createSound(soundLink, false, false, .7);
    sound.play();

    setSayItActive(true);

    setTimeout(() => setSayItActive(false), 1200);

}

function WordBlock({data}) {
    const {name, definitions, synonyms, examples, audioLink} = data;

    const [sayItActive, setSayItActive] = useState(false);


    return (
        <Wrapper>
            <Title><h2>{name.toUpperCase()}</h2></Title>
            <Body>
                <BlockWrapper title="DEFINITIONS" key="def">
                    {
                        definitions.map(defData => <Definition key={defData.defs[0]} data={defData} />)
                    }
                    
                    <SayItButton 
                        active={sayItActive}

                        onClick={() => sayItButtonHandle(audioLink, setSayItActive, sayItActive) 
                        }>
                            <h5>SAY IT!</h5>
                    </SayItButton>
                </BlockWrapper>

                <BlockWrapper title="SYNONYMS" key="syns">
                    {
                        synonyms.length != 0?
                            synonyms.map(syn => <Synonym key={syn} syn={syn} />):
                            <NoData>There is no synonym available</NoData>
                    }                
                </BlockWrapper>
                
                <BlockWrapper title="EXAMPLES" key="exs">
                    {
                        examples.length != 0? 
                            examples.map((ex, index) => <Example key={ex} text={ex} index={index}/>):
                            <NoData>There is no example available</NoData>
                    }
                </BlockWrapper>
                
                <BlockWrapper title="OTHER RESOURCES" key="otherresource">
                    <UL>
                        {
                            getOtherResources(name).map(wD => <LI key={wD.title}><a href={wD.link}>{wD.title}</a></LI>)
                        }
                    </UL>
                </BlockWrapper>
                
                <BlockWrapper title="YOUR TURN" key="yourturn">
                    <PracticeBlock word={name}/>
                </BlockWrapper>
            </Body>
        
        </Wrapper>
    )
}

export default WordBlock;

const Wrapper = styled.div`

`;



const Title = styled.div`
    text-align: center;
    
    color: #465873;
    width: 50%;
    margin: auto;
    margin-bottom: 1rem;
    border-bottom: 1px solid #465873;
`

const Body = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

`

const SayItButton = styled.button`
    display: block;
    width: 50%;
    
    margin: auto;
    margin-bottom: 1rem;
    
    padding: 1rem;
    
    border-radius: 20px;


    

    ${props => props.active? `
        cursor: not-allowed;
        background-color: gray;
        border: none;


        &:hover {            
            border: none;
        }
    
        &:active {
            border: none;
        }
    `: `
    background-color: #855303;
    color: #e6e6e6;
    
    border: 3px solid #855303;

    &:hover {
        color: #362101;
        border: 3px solid #362101;
    }

    &:active {
        color: #e3e3e3;
        border: 3px solid #e3e3e3;
    }
    
    `}

`

const UL = styled.ul`
    list-style-type: none;
`;

const LI = styled.li`

`
const NoData = styled.div`
    color: gray;
    text-align: center;

    font-weight: bold;
`