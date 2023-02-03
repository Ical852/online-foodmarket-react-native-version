const initOrder = {
    inProgress: [],
    postOrders: [],
    cancelled: []
}

export const orderReducer = (state = initOrder, action) => {
    if (action.type === 'SET_IN_PROGRESS') {
        return {
            ...state,
            inProgress: action.value
        }
    }
    if (action.type === 'SET_POST_ORDERS') {
        return {
            ...state,
            postOrders: action.value
        }
    }
    if (action.type === 'SET_CANCELLED') {
        return {
            ...state,
            cancelled: action.value
        }
    }
    return state
}