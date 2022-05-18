import styled from 'styled-components';

const Header = () => (
    <Wrapper>
            <div className="title"><h1>STUDY ENGLISH VOCABULARY</h1></div>
            <div className='sub-title'>
                <p><h4>A simple app to study English vocabulary based on the author&apos;
            s routine everyday.</h4></p> 
                <p><h4>Type a word you want to study to the input bar below and press <span className='emphasize'>ENTER</span>.</h4></p>
            </div>
    </Wrapper>
)

export default Header;

const Wrapper = styled.header`
    background-color: #465973;
    width: 100%;
    padding: 2rem;

    text-align: center;

    .title {
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