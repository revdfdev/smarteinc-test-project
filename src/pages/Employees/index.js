import { Employees } from "./Employees";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getCompanyEmployees } from "../../store/ducks/details.duck";
import { memo } from "react";

function mapStateToProps(state) {
    return {
        employees: state.details.employees
    }
}

export default memo(withRouter(connect(mapStateToProps, { getCompanyEmployees })(Employees)));