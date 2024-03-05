"use client";

import SaveTodo from "@/app/utils/saveTodo";
import { useState } from "react";

export default function CreateTodo() {
  const [list_name, setTodoName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [realized, setRealized] = useState<any>();

  const handleSubmit = (event: any) => {
    setTodoName(list_name);
    setDescription(description);
    setRealized(realized);
    console.log("TODO: ", list_name, description, realized);
  };
  const options = {
    list_name,
    description,
    realized,
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-[5rem]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registre sua nova tarefa
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Todo-name
              </label>
              <div className="mt-2">
                <input
                  required
                  onChange={(e) => setTodoName(e.target.value)}
                  value={list_name}
                  id="todo-name"
                  name="todo-name"
                  type="todo-name"
                  autoComplete="todo-name"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="text"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
              </div>
              <div className="mt-2">
                <input
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="todo-description"
                  name="todo-description"
                  type="todo-description"
                  autoComplete="current-todo-description"
                  className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Realizado ?
                </label>
              </div>
              <div className="flex items-center mt-5">
                <input
                  value={realized}
                  onClick={() => setRealized(true)}
                  type="checkbox"
                  id="sim"
                  name="sim"
                  className="h-5 w-5 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="sim"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Sim
                </label>

                <input
                  value={realized}
                  onClick={() => setRealized(false)}
                  type="checkbox"
                  id="nao"
                  name="nao"
                  className="h-5 w-5 text-red-600 focus:ring-red-500 border-gray-300 rounded ml-4"
                />
                <label
                  htmlFor="nao"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Não
                </label>
              </div>
            </div>

            <div>
              <button
                onClick={() => SaveTodo(options)}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create todo
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
