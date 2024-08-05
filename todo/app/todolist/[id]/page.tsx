'use client'

import EditTodo from "../EditTodo";
import { usePathname } from 'next/navigation'


async function getTodo() {
    //extract ID from the URL
    const pathname = usePathname();
    const regex = /\/todolist\/(.+)/;
    const id = pathname.match(regex);
    if (id) {
        const todoId = id[1];
        const result = await fetch(`http://127.0.0.1:8090/api/collections/todos/records/${todoId}`,
            // {
            //     next: {revalidate: 10},
            // }
        );
        const data = await result.json();
        return data;
    }
}
export default async function EditPage() {
    //pass the todo item to EditTodo
    const todo = await getTodo();
    return (
        <div>
            <h2>Edit Todo</h2>
            <EditTodo todo={todo} /> 
        </div>
    );
}