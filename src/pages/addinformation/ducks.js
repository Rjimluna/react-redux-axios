const initialState = {
    information: []
}

const SHOW_INFO = 'addinfomation/SHOW_INFO'
const SHOW_INFO_SUCCESS = 'addinfomation/SHOW_INFO_SUCCESS'
export function showinformation() {
    return {
        type: SHOW_INFO,
        payload: {
            request: {
                url: '/users'
            }
        }
    }
}

const ADD_INFO = 'addinformation/ADD_INFO'
const ADD_INFO_SUCCESS = 'addinformation/ADD_INFO_SUCCESS'
export function addinformation(user) {
    return {
        type: ADD_INFO,
        payload: {
            request: {
                method: 'post',
                url: '/users',
                data: user,
                status: 201
            }
        }
    }
}

const UPDATE_INFO = 'addinformation/UPDATE_INFO'
const UPDATE_INFO_SUCCESS = 'addinformation/UPDATE_INFO_SUCCESS'
export function updateinformation(userid, userUpdate) {
    return {
        type: UPDATE_INFO,
        payload: {
            request: {
                method: 'put',
                url: '/users/'+userid,
                data: userUpdate,
                status: 200
            }
        }
    }
}

const DELETE_INFO = 'addinformation/DELETE_INFO'
export function deleteinformation(user) {
    return {
        type: DELETE_INFO,
        payload: {
            request: {
                method: 'delete',
                url: '/users/'+user,
                status: 200
            }
        }
    }
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_INFO_SUCCESS: 
            return {
                ...state,
                information: action.payload.data
            }    

        case ADD_INFO_SUCCESS: 
            return {
                ...state,
                information: [
                    ...state.information,
                    {
                        name: action.payload.data.name,
                        age: action.payload.data.age,
                        contact: action.payload.data.contact,
                        location: action.payload.data.location
                    }
                ]
            }
        
        case UPDATE_INFO_SUCCESS:
            return {
                ...state,
                information: [
                    ...state.information,
                    {
                        name: action.payload.data.name,
                        age: action.payload.data.age,
                        contact: action.payload.data.contact,
                        location: action.payload.data.location
                    }
                ]
            }

        default: 
            return state
    }
}
