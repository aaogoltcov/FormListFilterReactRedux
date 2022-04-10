export default function filterItems(search) {
    return {
        type: 'SEARCH',
        search: search,
    }
}