import styled from "styled-components";
import { addAddWordButton } from "../AddWordButton";




const Definition = ({data}) => {
    const {type, defs} = data;

    return (
        <>
            <Type><h5>{type.toUpperCase()}:</h5></Type>
            <Ul>
                {
                    defs.map((def, i) => <Li key={def + type + i}>{addAddWordButton(def, MarkWord)}</Li>)
                }
            </Ul>
        </>
    )
}
        

export default Definition;

const Type = styled.div`

`

const Ul = styled.ul`
    list-style-type: none;
    font-size: 1.5rem;
    margin-top: .5rem;
    margin-bottom: 2rem;
    margin-left: 1rem;
`
const Li = styled.li`
    margin-bottom: .5rem;
    
    &:before {
        content: "- ";
    }
`

const MarkWord = styled.span`
    font-size: 1.2rem;
    
    &:hover {
        display: inline-block;
        

        
        background-color: #5c5c5c;
        color: #ededed;

        

    
    }
`