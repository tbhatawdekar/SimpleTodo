'use client';

import { useState } from 'react';

export default function DeleteTodo({ id }: { id: string }) {
    const [item, setItem] = useState('');
    const remove = async () => {
        await fetch(`http://127.0.0.1:8090/api/collections/todos/records/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    }
    
    return (
        <button onClick={remove}>Delete</button>
    );
}
