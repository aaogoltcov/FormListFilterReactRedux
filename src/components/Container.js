import EditForm from "./EditForm";
import ItemsList from './ItemsList';
import {useSelector} from "react-redux";

export default function Container() {
    const listOfItems = useSelector(state => {
        const filterInput = state.form.filterInput;
        if (filterInput) {
            return state.list.filter;
        } else {
            return state.list.items;
        }
    });

    return (
        <div className="card-group m-5 gap-4">
            <EditForm  />
            <ItemsList list={listOfItems}/>
        </div>
    )
}