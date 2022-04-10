import shortid from 'shortid';

export default function addItem(title, price) {
    return {
        type: 'ADD_ITEM',
        id: shortid.generate(),
        title: title,
        price: price,
    }
}