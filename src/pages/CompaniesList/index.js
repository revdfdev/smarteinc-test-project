import { CompaniesList } from "./CompaniesList";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getAllCompanies } from "../../store/ducks/details.duck";
import { memo } from "react";

function mapStateToProps(state) {
    return {
        companies: state.details.companies
    }
}

export default memo(withRouter(connect(mapStateToProps, {getAllCompanies})(CompaniesList)));