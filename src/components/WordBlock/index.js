import styled from 'styled-components';
import BlockWrapper from './BlockWrapper';
import Definition from './Definition';
import Synonym from './Synonym';
import Example from './Example';
import PracticeBlock from './PracticeBlock';

import getOtherResources  from '../../controls/getOtherResources';
import { createSound } from '../../controls/SoundControl';

const definitions = [
    {
        type: "adjective",
        defs: ["Adj definition 1", "Adj definition 2", "Adj definition 3"]
    },

    {
        type: "noun",
        defs: ["Noun definition 1", "Noun definition 2", "Noun definition 3"]
    },

    {
        type: "verb",
        defs: ["Verb definition 1", "Verb definition 2", "Verb definition 3"]
    }
]

const synonyms = [
    'synonyms', 'keep', 'hello'
]

const examples = [
    "The cat stretched.",
    "Jacob stood on his tiptoes.",
    "The car turned the corner.",
    "Kelly twirled in circles.",
    "She opened the door.",
    "Aaron made a picture.",
    "I'm sorry.",
    "I danced."
]

const sayItButtonHandle = (soundLink) => {
    const sound = createSound(soundLink, false, false, .7);

    sound.play();
}

function WordBlock({data}) {
    return (
        <Wrapper>
            <Title><h2>HOLD</h2></Title>
            <Body>
                <BlockWrapper title="DEFINITIONS">
                    {
                        definitions.map(defData => <Definition key={defData.defs[0]} data={defData} />)
                    }
                    <SayItButton onClick={() => sayItButtonHandle(`https://media.merriam-webster.com/audio/prons/en/us/mp3/t/teache01.mp3`) }><h5>SAY IT!</h5></SayItButton>
                </BlockWrapper>

                <BlockWrapper title="SYNONYMS">
                    {
                        synonyms.map(syn => <Synonym key={syn} syn={syn} />)
                    }                
                </BlockWrapper>
                
                <BlockWrapper title="EXAMPLES">
                    {
                        examples.map((ex, index) => <Example key={ex} text={ex} index={index}/>)
                    }
                </BlockWrapper>
                
                <BlockWrapper title="OTHER RESOURCES">
                    <UL>
                        {
                            getOtherResources("hold").map(wD => <LI key={wD.title}><a href={wD.link}>{wD.title}</a></LI>)
                        }
                    </UL>
                </BlockWrapper>

                <BlockWrapper title="YOUR TURN">
                    <PracticeBlock word="hold"/>
                </BlockWrapper>
            </Body>
        
        </Wrapper>
    )
}

export default WordBlock;

const Wrapper = styled.div``;



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
`

const SayItButton = styled.button`
    display: block;
    width: 50%;
    
    margin: auto;
    margin-bottom: 1rem;
    
    padding: 1rem;
    

    background-color: #855303;
    color: #e6e6e6;
    
    border-radius: 20px;
    border: 3px solid #855303;

    &:hover {
        color: #362101;
        border: 3px solid #362101;
    }

    &:active {
        color: #e3e3e3;
        border: 3px solid #e3e3e3;
    }

`

const UL = styled.ul`
    list-style-type: none;
`;

const LI = styled.li`

`