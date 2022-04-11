import {Button, Table} from "react-bootstrap";
import toEditForm from "../services/form/toEditForm";
import store from "../strore/store";
import updateTitle from "../services/form/updateTitle";
import updatePrice from "../services/form/updatePrice";
import deleteItem from "../services/list/deleteItem";
import clearForm from "../services/form/clearForm";

export default function ItemsList(props) {

    function editClickHandler(event) {
        event.preventDefault();
        const clickedItemId = event.target.parentNode.parentNode.dataset.id;
        const item = store.getState().list.items.filter(item => item.id === clickedItemId)[0];
        store.dispatch(toEditForm(item.id));
        store.dispatch(updateTitle(item.title));
        store.dispatch(updatePrice(item.price));
    }

    function deleteClickHandler(event) {
        event.preventDefault();
        const clickedItemId = event.target.parentNode.parentNode.dataset.id;
        store.dispatch(deleteItem(clickedItemId));
        store.dispatch(clearForm());
    }

    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Название</th>
                <th>Стоимость</th>
                <th>{}</th>
                <th>{}</th>
            </tr>
            </thead>
            <tbody>
            {props.list.map(item => (
                <tr key={item.id} data-id={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td><Button variant="info" onClick={editClickHandler}>Редактировать</Button></td>
                    <td><Button variant="danger" onClick={deleteClickHandler}>Удалить</Button></td>
                </tr>
            ))}
            </tbody>
        </Table>
    )
}