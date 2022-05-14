import styled from 'styled-components';


function BlockWrapper({title, children}) {
    

    return (
        <Wrapper>
            <Title>{title}</Title>
            <Body>{children}</Body>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    flex-basis: 100%;
    margin-top: 1rem;
    
    border: 3px solid #2E5975;
    border-radius: 20px;

    overflow: hidden;    

    box-shadow: 0 0 3px black;

`
export default BlockWrapper;


const Title = styled.div`
    background-color: #2E5975;
    color: white;

    text-align: center;

    font-size: 1.5rem;
    font-weight: bold;

    padding: .5rem;
`


const Body = styled.div`
    border: 1px solid #2E5975;
    
    margin: 1rem;
    padding: 1rem;
    padding-bottom: 0;



    border-radius: 20px;

`