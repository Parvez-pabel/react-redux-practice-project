import Swal from "sweetalert2";
import store from "../../redux/store/Store";
import { EditTodo } from "../../redux/state/todo/TodoSlice";
export function TodoEditAlert(index, item) {
  Swal.fire({
    title: "Update Task Name",
    input: "text",
    inputValue: item,
    inputValidator: (value) => {
      if (value) {
        store.dispatch(EditTodo({ index: index, task: value }));
      }
    },
  });
}
export default TodoEditAlert;
