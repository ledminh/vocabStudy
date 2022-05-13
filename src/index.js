import './style.css';

import { render } from 'react-dom';

import useDataContext from './controls/DataContext';

import Header from './components/Header';
import InputBar from './components/InputBar';
import Main from './components/Main';





function App() {
    const DataProvider = useDataContext();
    
    return (
    <>
        <Header />
        <DataProvider> 
            <InputBar />
            <Main />
        </DataProvider>
    </>
    )
}


render(<App />, document.querySelector("#container"));