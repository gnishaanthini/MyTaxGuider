import {
    DISPLAY_ALERT,
    CLEAR_ALERT,
} from './actions'
import { initialState } from './AppContext'

const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return {
            ...state,
            showAlert: true,
            alertType: 'danger',
            alertText: 'Please provide all values!',
        }
    }
}

export default reducer