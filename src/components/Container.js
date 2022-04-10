import EditForm from "./EditForm";
import ItemsList from './ItemsList';
import {useSelector} from "react-redux";
import {useState} from "react";
import filterItems from "../services/list/filterItems";
import store from "../strore/store";

export default function Container() {
    const [currentListOfItems, setCurrentListOfItems] = useState([]);
    useSelector(state => {
        const previousList = currentListOfItems;
        const currentList = state.list;

        const filterInput = state.form.filterInput;


        if (filterInput) {
            // const previousFilteredListOfItems = currentListOfItems;
            // const currentFilteredListOfItems = store.dispatch(filterItems(filterInput));
            // if (currentFilteredListOfItems !== previousFilteredListOfItems) {
            //     console.log("filteredListOfItems", previousFilteredListOfItems, currentFilteredListOfItems);
                // setCurrentListOfItems(filteredListOfItems);
            // }

        } else if (currentList !== previousList) {
            setCurrentListOfItems(currentList);
        }
    })

    return (
        <div className="card-group m-5 gap-4">
            <EditForm  />
            <ItemsList list={currentListOfItems}/>
        </div>
    )
}