const initialState = {
    active: false,
    lock: false
}
export const  rootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
        case "HEADER_MENU_IS_TOGGLED":
            let changeActive= state.active
            return {
                ...state,
                active: !changeActive,
                lock: !changeActive
            }
           
    }
}