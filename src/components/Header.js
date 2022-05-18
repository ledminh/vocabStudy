import styled from 'styled-components';

const Header = () => (
    <Wrapper>
            <h1>STUDY ENGLISH VOCABULARY</h1>
            <div className='sub-title'>
                <p>A simple app to study English vocabulary based on the author&apos;
            s routine everyday.</p> 
                <p>Type a word you want to study to the input bar below and press <span className='emphasize'>ENTER</span>.</p>
            </div>
    </Wrapper>
)

export default Header;

const Wrapper = styled.header`
    background-color: #465973;
    width: 100%;
    padding: 2rem;

    text-align: center;

    h1 {
        border-bottom: 4px solid white;
        width: 80%;
        margin: auto;

        color: white;

        padding-bottom: 1rem;

        margin-bottom: 1.5rem;

    }

    .sub-title {
        color: rgb(179, 179, 179);



        .emphasize {
            color: #d9734e;
            font-weight: bold;
        }

    }
`