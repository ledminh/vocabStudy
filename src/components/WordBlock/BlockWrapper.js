import styled from 'styled-components';


function BlockWrapper({title, children}) {
    

    return (
        <Wrapper>
            <Title><h4>{title}</h4></Title>
            <Body>{children}</Body>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 3rem auto;
    flex-basis: 100%;
    margin-top: 1rem;
    
    border: 3px solid #2E5975;
    border-radius: 20px;

    overflow: hidden;    

    box-shadow: 0 0 3px black;

    
    
    @media (min-width: 1170px) {
        flex-basis: 48%;

        &:last-child {
            flex-basis: 100%;
        }
    }

`
export default BlockWrapper;


const Title = styled.div`
    background-color: #2E5975;
    color: white;

    text-align: center;



    padding: .5rem;
`


const Body = styled.div`
    
    border: 1px solid #2E5975;
    
    margin: 1rem;
    padding: 1rem;
    padding-bottom: 0;


    border-radius: 20px;

`