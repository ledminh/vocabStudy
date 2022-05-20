import './style.css';

import { render } from 'react-dom';

import useDataContext from './controls/DataContext';

import Header from './components/Header';
import InputBar from './components/InputBar';
import Main from './components/Main';
import ErrorBoundary from './components/ErrorBoundary';

import MerriamLogo from './MerriamLogo';



function App() {
    const DataProvider = useDataContext();
    
    return (
    <>
        <Header />
        <DataProvider>
            <ErrorBoundary>
                <InputBar />
                <Main />
            </ErrorBoundary>
        </DataProvider>
        <MerriamLogo />
    </>
    )
}


render(<App />, document.querySelector("#container"));