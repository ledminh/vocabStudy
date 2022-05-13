import { createContext, useState } from "react";

const DataContext = createContext();

function useDataContext() {
    const [data, setData] = useState([]);

    const addData = (d) => setData([d, ...data]);

    const Data = {data, addData};

    const DataProvider = ({children}) => <DataContext.Provider value={Data}>{children}</DataContext.Provider>
    
    return DataProvider;
    
} 

export default useDataContext;

export {
    DataContext
}