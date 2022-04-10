export default function updateItem(id, title, price) {
    return {
        type: 'UPDATE_ITEM',
        id: id,
        title: title,
        price: price,
    }
}