const SET_AUTHED_USER = 'SET_AUTHED_USER'
const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER'

export default function authedUser (authedUser = null, action) {
    switch(action.type) {
        case SET_AUTHED_USER :
            return action.id

        case REMOVE_AUTHED_USER:
            return null
            
        default:
            return authedUser
    }
}