import styled from "styled-components";


const Definition = ({data}) => {
    const {type, defs} = data;

    return (
        <>
            <Type>{type.toUpperCase()}:</Type>
            <Ul>
                {
                    defs.map((def) => <Li key={def}>{def}</Li>)
                }
            </Ul>
        </>
    )
}
        

export default Definition;

const Type = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
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