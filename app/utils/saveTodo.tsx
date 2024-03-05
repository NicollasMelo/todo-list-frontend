import axios from "axios";

interface propsTodo {
  list_name: string;
  description: string;
  realized: any;
}

export default function SaveTodo(props: propsTodo) {
  axios.post("http://localhost:8080/todo_list", {
    list_name: props.list_name,
    description: props.description,
    realized: props.realized,
  });
}
