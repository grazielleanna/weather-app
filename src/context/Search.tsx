import React, { createContext, useState } from 'react';

interface PropsSearchContext {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const default_value = {
    search: 'São Paulo',
    setSearch: () => ''
}

const SearchContext = createContext<PropsSearchContext>(default_value);

const SearchContextProvider: React.FC = ({ children }) => {
    const [search, setSearch] = useState(default_value.search);
    return(
        <SearchContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchContext.Provider>
    )
}

export { SearchContextProvider };

export default SearchContext;