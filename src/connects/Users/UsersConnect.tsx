import Users from "../../components/Users/Users"
import {connect} from 'react-redux';
import { UsersStaticConfig } from "./UsersStaticConfig";
import { getErrorMessage, getLoadingStatus, GetUsersList } from "./UsersSelector";
const mapStateToProps = (state: any, ownProps: any) => {
    console.log({...state});
    return {
        ...UsersStaticConfig,
        users: GetUsersList({...state.userReducer}),
        loading: getLoadingStatus({...state.userReducer}),
        error: getErrorMessage({...state.userReducer})
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)