import { AppNavBar } from "./AppNavBar";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

function mapStateToProps(state) {
    return {

    }
}

export default withRouter(connect(mapStateToProps, {})(AppNavBar));