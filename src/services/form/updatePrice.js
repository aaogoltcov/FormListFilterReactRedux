export default function updatePrice(price) {
    return {
        type: 'UPDATE_PRICE',
        price: price,
    }
}