import { useContext, useState } from "react";
import  styled  from 'styled-components';
import {DataContext} from "../controls/DataContext";

function InputBar() {
    const [value, setValue] = useState("");
    const {addData} = useContext(DataContext);
    
    const handleKeyUp = (e) => {
        if(e.key == 'Enter') {
            addData(value);
            setValue("");
      
        }
    }

    return (
        <Wrapper>
            <Input type="text" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                    onKeyUp={handleKeyUp}
                    placeholder="Type the word you want to study here ..."
                    alt="word-input"
                    // eslint-disable-next-line jsx-a11y/no-autofocus
                    autoFocus
                    />
        </Wrapper>
    )
}



export default InputBar;

const Wrapper = styled.div`
    width: 80%;
    max-width: 1400px;
    min-width: 300px;

    margin: auto;
    margin-top: 3rem;
`;

const Input = styled.input`
    width: 100%;
    border-radius: 30px;
    border: 3px solid #6D8BA6;

    padding: 1rem;
    font-size: 1.5rem;

    text-align: center;

    :focus {
        box-shadow: 0 0 30px black, 0 0 10px inset white;
        background-color: #d6d6d6;
    }
`