import { createContext, useState } from "react";

import getWordData from './getWordData';

const DataContext = createContext();

function useDataContext() {
    const [data, setData] = useState([]);
    


    const addData = (w) => {
        getWordData(w)
            .then((d) => setData([d, ...data]));
    }

    const Data = {data, addData};

    const DataProvider = ({children}) => <DataContext.Provider value={Data}>{children}</DataContext.Provider>
    
    return DataProvider;
    
} 

export default useDataContext;

export {
    DataContext
}