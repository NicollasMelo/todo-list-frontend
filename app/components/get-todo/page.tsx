"use client";
import Footer from "@/app/templates/footer/page";
import Header from "@/app/templates/header/page";
import DeleteTodo from "@/app/utils/deleteTodo";
import axios from "axios";
import { useEffect, useState } from "react";

export default function GetTodos() {
  const [data, setData] = useState<[]>([]);

  const listAllTodos = () => {
    axios.get("http://localhost:8080/todo_list").then((res) => {
      setData(res.data);
    });
  };
  const handleDelete = (id: any) => {
    DeleteTodo(id).then(() => {
      alert("Deletado com sucesso!");
      listAllTodos();
    });
  };

  return (
    <>
      <Header />
      <div className=" w-full px-4 sm:px-0 mt-[10rem] ">
        <h3 className="text-center font-semibold text-3xl leading-7 text-gray-900 mb-5">
          Listagem de todos
        </h3>
        <p className="text-center mt-1 text-md leading-6 text-gray-500">
          Detalhes de suas listas de tarefa
        </p>
      </div>
      {data &&
        data.map((item: any) => (
          <div className="m-10" key={item.id}>
            <div className="mt-6 border-t border-gray-900">
              <dl className="">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Id da tarefa: {item.id}
                  </dt>
                </div>
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Nome da tarefa: {item.list_name}
                  </dt>
                  <dd className="text-sm font-medium leading-6 text-gray-900">
                    Descrição da tarefa: {item.description}
                  </dd>
                </div>
                <div className=" px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Realizou a tarefa ?
                  </dt>
                  <dd className="text-sm font-medium leading-6 text-gray-900">
                    {item.realized ? "Sim" : "Não"}
                    {/* SIM | NÃO{item.realized} */}
                  </dd>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="mt-5 bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-full"
                >
                  Deletar
                </button>
                {/* AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ABAIXO REALIZAR MAIS INSERÇÕES NO SEU CRUD COMO QUEM CRIOU A TAREFA E COISAS DO TIPO */}
                {/*  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    margotfoster@example.com
                  </dd>
                </div> */}
                {/*  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    "Salary expectation
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    $120,000
                  </dd>
                </div> */}
                {/*  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    About
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                    incididunt cillum culpa consequat. Excepteur qui ipsum
                    aliquip consequat sint. Sit id mollit nulla mollit nostrud
                    in ea officia proident. Irure nostrud pariatur mollit ad
                    adipisicing reprehenderit deserunt qui eu.
                  </dd>
                </div> */}
                {/*  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">
                    Attachments
                  </dt>
                  <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <ul
                      role="list"
                      className="divide-y divide-gray-100 rounded-md border border-gray-200"
                    >
                      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                          <PaperClipIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="truncate font-medium">
                              resume_back_end_developer.pdf
                            </span>
                            <span className="flex-shrink-0 text-gray-400">
                              2.4mb
                            </span>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Download
                          </a>
                        </div>
                      </li>
                      <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                        <div className="flex w-0 flex-1 items-center">
                          <PaperClipIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="truncate font-medium">
                              coverletter_back_end_developer.pdf
                            </span>
                            <span className="flex-shrink-0 text-gray-400">
                              4.5mb
                            </span>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Download
                          </a>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div> */}
              </dl>
            </div>
          </div>
        ))}
      <div className="flex justify-center align-middle">
        <button
          onClick={listAllTodos}
          className="mb-[20rem] mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Listar todos
        </button>
      </div>
      <Footer />
    </>
  );
}
