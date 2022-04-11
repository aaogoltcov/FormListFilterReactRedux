const initialList = {
    items: [],
    filter: [],
}

let items = [];

export default function list(state = initialList, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            items = state.items.concat([{
                id: action.id,
                title: action.title,
                price: action.price, }])
            return { ...state, items}
        case 'UPDATE_ITEM':
            items = [state.items.filter(item => item.id === action.id)[0] = {
                id: action.id,
                title: action.title,
                price: action.price,
            }].concat(state.items.filter(item => item.id !== action.id));
            return { ...state, items}
        case 'DELETE_ITEM':
            items = state.items.filter(item => item.id !== action.id);
            return { ...state, items}
        case 'SEARCH':
            const { search } = action;
            const filter = state.items.filter(item => item.title.includes(search))
            return { ...state, search, filter}
        default:
            return state
    }
}