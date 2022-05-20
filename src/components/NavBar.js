import styled from "styled-components";

function NavBar({wordsArr, currentIndex, setIndex}) {

    return (
        wordsArr.length > 1 ?
        (<Wrapper>
            {
                wordsArr.map((word, index) => {
                    if(word.hasError) return ""; 

                    return (
                        <Button 
                            key={word.name}
                            current={index == currentIndex}
                            onClick={() => setIndex(index)}
                            >
                                {word.name.toUpperCase()}
                        </Button>)
                    
                })
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
    padding: .6rem;

    font-size: 1rem;

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
        box-shadow: 0 0 12px black,  0 0 5px white inset;
        
    `: ``}
`