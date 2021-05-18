import Users from "../../components/Users/Users"
import {connect} from 'react-redux';
import { UsersStaticConfig } from "./UsersStaticConfig";
import { getErrorMessage, getLoadingStatus, GetUsersList } from "./UsersSelector";
import { getUserDetail } from "../../redux/Users/UserThunk";
import { fetchUsersRequestAction } from "../../redux/Users/UserActions";
const mapStateToProps = (state: any, ownProps: any) => {
    return {
        ...UsersStaticConfig,
        users: GetUsersList({...state.userReducer}),
        loading: getLoadingStatus({...state.userReducer}),
        error: getErrorMessage({...state.userReducer})
    }
}

const mapDispatchToProps = (dispatch: any, ownProps: any) => {
    return {
        fetchData: () => dispatch(fetchUsersRequestAction())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)