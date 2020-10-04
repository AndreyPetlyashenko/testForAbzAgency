const HEADER_MENU_IS_TOGGLED = "HEADER_MENU_IS_TOGGLED"


export const toggleMenu = () => {
    
    return (dispatch)=>{
        dispatch({
            type: HEADER_MENU_IS_TOGGLED
        })
    }
}
