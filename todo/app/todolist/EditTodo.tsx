'use client'; 

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function EditTodo( { todo }: any) {
    const { id, item } = todo || {};
    const [updatedItem, setUpdatedItem] = useState(item); // Manage state for item
    const router = useRouter();

    const updateTodo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        
        await fetch(`http://127.0.0.1:8090/api/collections/todos/records/${id}`, 
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    item: updatedItem
                })
            });
        router.push("/todolist");

      };

    return (
        <form onSubmit={updateTodo}>
            {/* <h3>Edit Todo</h3> */}
            <textarea
                onChange={(e) => setUpdatedItem(e.target.value)}  
            />
            <button type="submit">Save Changes</button>
        </form>
    );
}