import styled from 'styled-components';
import BlockWrapper from './BlockWrapper';
import Definition from './Definition';
import Synonym from './Synonym';
import Example from './Example';
import PracticeBlock from './PracticeBlock';

import ErrorDisplay from './ErrorDisplay';

import getOtherResources  from '../../controls/getOtherResources';
import { createSound } from '../../controls/SoundControl';
import { useState } from 'react';


const sayItButtonHandle = (audioLink, setSayItActive, sayItActive) => {
    if(sayItActive || audioLink == "") return;


    const sound = createSound(audioLink, false, false, .7);
    sound.play();

    setSayItActive(true);

    setTimeout(() => setSayItActive(false), 1200);

}

function WordBlock({data}) {
    const {name, definitions, synonyms, examples, audioLink, practiceText} = data;

    const [sayItActive, setSayItActive] = useState(false);

    return (
        <Wrapper>
           {
            data.hasError?
            <ErrorDisplay error={data} /> :
           <>
                <Title><h2>{name.toUpperCase()}</h2></Title>
                <Body>
                    <BlockWrapper title="DEFINITIONS" key="def">
                        {
                            definitions.map(defData => <Definition key={defData.id} data={defData} />)
                        }
                        
                        <SayItButton 
                            active={sayItActive}
                            audioAvailable={audioLink != ""}
                            onClick={() => sayItButtonHandle(audioLink, setSayItActive, sayItActive) 
                            }>
                                <h5>{audioLink == ""? "NO AUDIO" : "SAY IT!"}</h5>
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
                        <PracticeBlock 
                            word={name} 
                            practiceText={practiceText}
                            />
                    </BlockWrapper>
                </Body>
           </>
                
            }
        
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


    

    ${props => props.active || !props.audioAvailable? `
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
    margin-bottom: 1rem;
    color: gray;
    text-align: center;

    font-weight: bold;
`