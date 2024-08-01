import Link from "next/link";
import CreateTodo from "./CreateTodo";
async function getTodos() {
    const result = await fetch(
        'http://127.0.0.1:8090/api/collections/todos/records?page=1&perPage=30',
        { cache: 'no-store' }
    );
    const data = await result.json();
    console.log(data); 
    return data?.items as any[];
}

export default async function todoList() {
    const todos = await getTodos();
    return (
      <div>
        <h1>TodoList</h1>
        <div>
            <ul>
            {todos?.map((todo) => {
                return( 
                    <li key="{todo.id}">
                    <Todo key={todo.id} todo={todo} />
                    </li>
                ); //calls the Todo function
            })}
            </ul>
        </div>
        <CreateTodo />
        <button>Add Todo</button>    
      </div>
    );
  }

  function Todo( { todo }: any) {
    const { id, item } = todo || {};
    return (
        <Link href={`/todos/${id}`}>
                <div>
                    {item}
                </div>
        </Link>
    );
  }