import styled from 'styled-components';

const Header = () => (
    <Wrapper>
            <Title><h1>STUDY ENGLISH VOCABULARY</h1></Title>
            <SubTitle>
                <h4>A simple app to study English vocabulary based on the author&apos;
                s routine everyday.</h4> 
                <h4>Type a word you want to study to the input bar below and press <span className='emphasize'>ENTER</span>.</h4>
            </SubTitle>
            
            
    </Wrapper>
)

export default Header;

const Wrapper = styled.header`
    background-color: #465973;
    width: 100%;
    padding: 2rem;

    text-align: center;

  
    .sub-title {
        

    }
`

const Title = styled.div`
    border-bottom: 4px solid white;
    width: 80%;
    margin: auto;

    color: white;

    padding-bottom: 1rem;

    margin-bottom: 1.5rem;

    @media (max-width: 700px) {
        h1 {
            font-size: 2.5rem;
        }
    }
`

const SubTitle = styled.div`
    color: rgb(179, 179, 179);

    @media (max-width: 700px) {
        h4 {
            font-size: 1.7rem;
        }
    }

    .emphasize {
        color: #d9734e;
        font-weight: bold;
    }

`