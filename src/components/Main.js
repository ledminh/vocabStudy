import { useContext } from 'react';
import { DataContext } from '../controls/DataContext';




function Main() {
    const {data} = useContext(DataContext);    

    return (
        <div>
            {data.map(d => <p key={d}>{d}</p>)}
        </div>
    )
}

export default Main;