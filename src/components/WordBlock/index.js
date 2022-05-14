import styled from 'styled-components';

function WordBlock({data}) {
    return (
        <Wrapper>
            <div className='title'><h2>HOLD</h2></div>
        </Wrapper>
    )
}

export default WordBlock;

const Wrapper = styled.div`
    .title {
        text-align: center;
    }
`