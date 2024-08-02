'use client'; 
import { useState } from 'react';

export default  function EditTodo( { todo }: any) {
    const { id, item } = todo || {};
    const [updatedItem, setUpdatedItem] = useState(todo.item); // Manage state for item

    const updateTodo = async (e: React.FormEvent<HTMLFormElement>) => {
        
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
      };

    return (
        <form onSubmit={updateTodo}>
            <h3>Edit Todo</h3>
            <textarea
                placeholder={item}
                value={updatedItem}  
                onChange={(e) => setUpdatedItem(e.target.value)}  
            />
            <button type="submit">Edit</button>
        </form>
    );
}