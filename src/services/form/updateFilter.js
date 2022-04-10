export default function updateFilter(filterInput) {
    return {
        type: 'FILTER_INPUT',
        filterInput: filterInput,
    }
}