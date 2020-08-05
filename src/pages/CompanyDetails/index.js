import { CompanyDetails } from "./CompanyDetails";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getCompanyInformation } from "../../store/ducks/details.duck";
import { memo } from "react";

function mapStateToProps(state) {
    return {
        companyInfo: state.details.companyInfo
    }
}


export default memo(withRouter(connect(mapStateToProps, { getCompanyInformation })(CompanyDetails)));