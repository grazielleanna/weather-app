import React from 'react';

import { SearchContextProvider } from './Search';

const GlobalContext: React.FC = ({ children }) => {
    return <SearchContextProvider>{children}</SearchContextProvider>
}

export default GlobalContext;