import is_Empty from '../validation/is_empty'
const initalState={
    isAuthenticated:false,
    user:{}
}
export  default  function (state=initalState, action) {
    switch (action.type) {
        case "SET_CURRENT_USER":
            return{
                ...state,
                isAuthenticated: !is_Empty(action.payload),
                user: action.payload
            }
        default:
           return state;
    }

}