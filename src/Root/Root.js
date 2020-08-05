import React from 'react'
import configStore from "../store";
import { Provider } from "react-redux";
import Routes from '../Routes';

const store = configStore();

export function Root() {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}
