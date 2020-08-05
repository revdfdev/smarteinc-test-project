import { all } from "redux-saga/effects";
import { getCompanyInformationSaga, getAllCompaniesSaga, getCompanyEmployeesSaga } from "../ducks/details.duck";


export function* sagas() {
    yield all([
        getCompanyInformationSaga(),
        getAllCompaniesSaga(),
        getCompanyEmployeesSaga()
    ])
}