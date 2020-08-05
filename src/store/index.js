import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { reducers } from "./reducers";
import { sagas } from "./sagas";

const sagaMiddleWare = createSagaMiddleware();
let middleware = [sagaMiddleWare];


if (process.env.NODE_ENV !== "production") {
    middleware = [...middleware, logger]
}

export default function configureStore(preloadedState) {
    const store = createStore(
        reducers(),
        preloadedState,
        compose(applyMiddleware(...middleware))
    );

    sagaMiddleWare.run(sagas);

    return store;
}