import { put, takeEvery, call } from "redux-saga/effects";
import { getAllCompaniesApi, getCompanyDetailsApi, getCompanyEmployeeList } from "../../sevices/detailsapi";

//actions
const GET_ALL_COMPANIES = "igsmarte-test/details.duck/GET_ALL_COMPANIES";
const GET_ALL_COMPANIES_SUCCESS = "igsmarte-test/details.duck/GET_ALL_COMPANIES_SUCCESS";
const GET_ALL_COMPANIES_FAILURE = "igsmarte-test/details.duck/GET_ALL_COMPANIES_FAILURE";

const GET_COMPANY_INFORMATION = "igsmarte-test/details.duck/GET_COMPANY_INFORMATION";
const GET_COMPANY_INFORMATION_SUCCESS = "igsmarte-test/details.duck/GET_COMPANY_INFORMATION_SUCCESS";
const GET_COMPANY_INFORMATION_FAILURE = "igsmarte-test/details.duck/GET_COMPANY_INFORMATION_FAILURE";

const GET_COMPANY_EMPLOYEES = "igsmarte-test/details.duck/GET_COMPANY_EMPLOYEES";
const GET_COMPANY_EMPLOYEES_SUCCESS = "igsmarte-test/details.duck/GET_COMPANY_EMPLOYEES_SUCCESS";
const GET_COMPANY_EMPLOYEES_FAILURE = "igsmarte-test/details.duck/GET_COMPANY_EMPLOYEES_FAILURE";


//state
const initialState = {
    companyInfo: {},
    companies: [],
    employees: [],
    error: null,
}

//reducer function
export default function details(state={...initialState}, action) {
    switch (action.type) {
        case GET_COMPANY_INFORMATION_SUCCESS:
            return {
                ...state,
                companyInfo: action.companyInfo
            }
        case GET_ALL_COMPANIES_SUCCESS:
            return {
                ...state,
                companies: action.companies
            }
        case GET_COMPANY_EMPLOYEES_SUCCESS:
            return {
                ...state,
                employees: action.employees
            }
        case GET_COMPANY_EMPLOYEES_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case GET_COMPANY_INFORMATION_FAILURE:
            return {
                ...state,
                error: action.error
            }
        case GET_ALL_COMPANIES_FAILURE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

//action creator
export function getCompanyInformation(company) {
    return {
        type: GET_COMPANY_INFORMATION,
        company
    }
}

export function getAllCompanies() {
    return {
        type: GET_ALL_COMPANIES
    }
}

export function getCompanyEmployees(company) {
    return {
        type: GET_COMPANY_EMPLOYEES,
        company
    }
}

// handlers
function* handleGetAllComapnies() {
    try {
        const data = yield call(getAllCompaniesApi);
        
        yield put({
            type: GET_ALL_COMPANIES_SUCCESS,
            companies: data
        });
    } catch (exception) {
        yield put({
            type: GET_ALL_COMPANIES_FAILURE,
            error: exception.message
        });
    }
}

function* handleGetCompanyInformation({ company }) {
    try {
        const data = yield call(getCompanyDetailsApi, company);
        yield put({
            type: GET_COMPANY_INFORMATION_SUCCESS,
            companyInfo: data
        })
    } catch (exception) {
        yield put({
            type: GET_COMPANY_INFORMATION_FAILURE,
            error: exception.message
        });
    }
}

function* handleGetCompanyEmployees({ company }) {
    try {
        const data = yield call(getCompanyEmployeeList, company);
        yield put({
            type: GET_COMPANY_EMPLOYEES_SUCCESS,
            employees: data
        });
    } catch (exception) {
        yield put({
            type: GET_COMPANY_EMPLOYEES_FAILURE,
            error: exception.message
        })
    }
}

//sagas
export function* getCompanyInformationSaga() {
    yield takeEvery(GET_COMPANY_INFORMATION, handleGetCompanyInformation);
}

export function* getAllCompaniesSaga() {
    yield takeEvery(GET_ALL_COMPANIES, handleGetAllComapnies);
}

export function* getCompanyEmployeesSaga() {
    yield takeEvery(GET_COMPANY_EMPLOYEES, handleGetCompanyEmployees);
}