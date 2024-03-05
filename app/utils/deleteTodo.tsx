"use client";
import axios from "axios";
import { useEffect } from "react";

export default function DeleteTodo(id: number) {
  return axios
    .delete(`http://localhost:8080/todo_list/${id}`)
    .then((res) => "ok");
}
