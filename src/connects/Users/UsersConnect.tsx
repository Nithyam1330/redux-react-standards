import Users from "../../components/Users/Users"
import {connect} from 'react-redux';
import { UsersStaticConfig } from "./UsersStaticConfig";
import { getErrorMessage, getLoadingStatus, GetUsersList } from "./UsersSelector";
const mapStateToProps = (state: any, ownProps: any) => {
    return {
        ...UsersStaticConfig,
        users: GetUsersList({...state.userReducer}),
        loading: getLoadingStatus({...state.userReducer}),
        error: getErrorMessage({...state.userReducer})
    }
}


export default connect(mapStateToProps)(Users)