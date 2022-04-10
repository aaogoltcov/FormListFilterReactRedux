import list from './list';
import form from "./form";

export default function manager(state = {}, action) {
    return {
        list: list(state.list, action),
        form: form(state.form, action),
    }
}