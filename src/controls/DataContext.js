import { createContext, useState } from "react";

import getWordData from './getWordData';

const DataContext = createContext();

function useDataContext() {
    const [data, setData] = useState([]);
    


    const addData = (w) => {
    
        getWordData(w)
            .then((d) => {
                const newDObj = {
                    ...d,
                    practiceText: {
                        text: ""
                    }
                }

                if(data[0] && data[0].hasError) {
                    // eslint-disable-next-line no-unused-vars
                    const [errorObj, ...rest] = data;

                    setData([newDObj, ...rest]);
                    return;
                }


                setData([newDObj, ...data]);
            });
    }

    const Data = {data, addData};

    const DataProvider = ({children}) => <DataContext.Provider value={Data}>{children}</DataContext.Provider>
    
    return DataProvider;
    
} 

export default useDataContext;

export {
    DataContext
}