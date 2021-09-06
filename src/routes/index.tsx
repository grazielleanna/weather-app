import { BrowserRouter, Route } from 'react-router-dom';
import Context from '../services/Context';
import Dashboard from '../pages/dashboard';
import { useState } from 'react';

function Routes() {
    return (
        <Context.Provider value='teste'>
            <BrowserRouter>
                <Route path="/" exact component={Dashboard} />
            </BrowserRouter>
        </Context.Provider>
    )
}

export default Routes;