export default function deleteItem(id) {
    return {
        type: 'DELETE_ITEM',
        id: id,
    }
}