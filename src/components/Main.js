import { useContext } from 'react';
import { DataContext } from '../controls/DataContext';




function Main() {
    const {data} = useContext(DataContext);    

    return (
        <div>
            {console.log(data)}
        </div>
    )
}

export default Main;