import updateTitle from "../services/form/updateTitle";
import store from "../strore/store";
import addItem from "../services/list/addItem";
import updatePrice from "../services/form/updatePrice";
import clearForm from "../services/form/clearForm";
import {useState} from "react";
import {useSelector} from "react-redux";
import updateItem from "../services/list/updateItem";
import toEditForm from "../services/form/toEditForm";
import updateFilter from "../services/form/updateFilter";
import filterItems from "../services/list/filterItems";

export default function EditForm() {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [filterInput, setFilterInput] = useState("");

    useSelector(state => {
        const previousTitle = title;
        const currentTitle = state.form.title;
        if (currentTitle !== previousTitle) {
            setTitle(currentTitle);
        }
        const previousPrice = price;
        const currentPrice = state.form.price;
        if (currentPrice !== previousPrice) {
            setPrice(currentPrice);
        }
        const previousFilter = filterInput;
        const currentFilter = state.form.filterInput;
        if (currentFilter !== previousFilter) {
            setFilterInput(currentFilter);
        }
    });

    function titleChangeHandler(event) {
        event.preventDefault();
        store.dispatch(updateTitle(event.target.value));
    }

    function priceChangeHandler(event) {
        event.preventDefault();
        store.dispatch(updatePrice(event.target.value));
    }

    function saveNewItemHandler(event) {
        event.preventDefault();
        const title = store.getState().form.title;
        const price = store.getState().form.price;
        const id = store.getState().form.id;
        if (id) {
            store.dispatch(updateItem(id, title, price));
            store.dispatch(toEditForm(undefined));
            store.dispatch(clearForm());
        } else {
            store.dispatch(addItem(title, price));
            store.dispatch(clearForm());
        }
    }

    function filterChangeHandler(event) {
        event.preventDefault();
        const filterInput = event.target.value;
        store.dispatch(updateFilter(filterInput));
        store.dispatch(filterItems(filterInput));
    }

    return (
        <>
            <form action="" className="form-group mb-3 gap-2">
                <label htmlFor="title">????????????????: </label>
                <input type="text"
                       className="form-control"
                       id="title"
                       placeholder="???????????????? ????????????????"
                       required={true}
                       onChange={titleChangeHandler}
                       value={title}
                />
                <label htmlFor="price">????????: </label>
                <input type="number"
                       className="form-control"
                       id="price"
                       placeholder="?????????????? ????????"
                       required={true}
                       onChange={priceChangeHandler}
                       value={price}
                />
                <button
                    type="submit"
                    className="btn btn-primary mt-2"
                    onClick={saveNewItemHandler}
                >??????????????????</button>
            </form>
            <form action="" className="form-group mb-3 gap-2">
                <label htmlFor="filter">???????????? ???? ????????????????: </label>
                <input type="text"
                       className="form-control"
                       id="filter"
                       placeholder="?????????????? ??????????"
                       required={true}
                       onChange={filterChangeHandler}
                       value={filterInput}
                />
            </form>
        </>
    )
}