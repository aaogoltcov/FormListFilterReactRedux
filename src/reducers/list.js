export default function list(state = [], action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return state.concat([{
                id: action.id,
                title: action.title,
                price: action.price, }])
        case 'UPDATE_ITEM':
            return [state.filter(item => item.id === action.id)[0] = {
                    id: action.id,
                    title: action.title,
                    price: action.price,
                }].concat(state.filter(item => item.id !== action.id))
        case 'DELETE_ITEM':
            return state = state.filter(item => item.id !== action.id)
        case 'SEARCH':
            return [...state, {filter: state.filter(item => item.title.includes(action.search))}]
        default:
            return state
    }
}