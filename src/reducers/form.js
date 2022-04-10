const initialState = [
    {
        id: "",
        title: "",
        price: "",
        search: "",
    }
]

export default function form(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_TITLE':
            return state = {
                ...state,
                title: action.title,
            }
        case 'UPDATE_PRICE':
            return state = {
                ...state,
                price: action.price,
            }
        case 'CLEAR_FORM':
            return state = {
                id: "",
                title: "",
                price: "",
                search: "",
            }
        case 'EDIT_FORM':
            return state = {
                ...state,
                id: action.id,
            }
        case 'FILTER_INPUT':
            return state = {
                ...state,
                filterInput: action.filterInput,
            }
        default:
            return state
    }
}