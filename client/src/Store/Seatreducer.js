const initialState = { seatNo: null };
const seatReducer = (state = initialState, action) => {
 
        switch (action.type) {
            case "SELECT_SEAT":
                return {
                    ...state,
                    seatNo: action.seatNo
                }
            default:
                return state;

        
    }
}
export default seatReducer;