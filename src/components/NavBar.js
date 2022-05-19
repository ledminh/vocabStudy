import styled from "styled-components";

function NavBar({numWords, currentIndex, setIndex}) {

    return (
        numWords > 1 ?
        (<Wrapper>
            {
                Array.from({length: numWords}, (_, i) => i + 1)
                        .map((num, index) => <Button 
                                        key={num}
                                        current={index == currentIndex}
                                        onClick={() => setIndex(index)}
                                        >
                                            {num}
                                        </Button>)
            }
        </Wrapper>) :
        null
    )
}

export default NavBar;

const Wrapper = styled.div`    
    text-align: center;
    margin-bottom: 1rem;
`

const Button = styled.button`
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;

    margin-left: .5rem;
    margin-top: .5rem;

    border: 6px solid #0b0c24;

    border-radius: 20px;

    background-color: #0b0c24;
    color: white;

    transition: background-color .4s, color .4s, border .4s;

    &:hover {
        border: 6px solid #f54c18;

    }

    &:active {
        border: 6px solid #f54c18;
        background-color: #dec6bf;
        color: black;
    }

    ${props => props.current? `
        border: 6px solid #dec6bf;
        background-color: #dec6bf;
        color: black;
    `: ``}
`