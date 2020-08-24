export function appReducer(state: any, action: any) {
    switch(action.type){
        case 'SET_FIRST_NAME':
            return {
                ...state,
                first_name: action.payload
            }
        case 'SET_LAST_NAME':
            return {
                ...state,
                last_name: action.payload
            }
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.payload
            }
        case 'SET_DATE':
            return {
                ...state,
                date: action.payload
            }
        default:
            break;
    }
}