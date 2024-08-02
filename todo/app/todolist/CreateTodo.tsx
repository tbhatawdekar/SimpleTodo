'use client';

import { useState } from 'react';

export default function CreateTodo() {
    const [item, setItem] = useState('');

    const create = async () => {
        await fetch('http://127.0.0.1:8090/api/collections/todos/records',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    item
                }),
            });
        setItem('');
    }
    return (
        <form onSubmit={create}>
            <h3>Add a todo!</h3>
            <textarea
                placeholder="e.g. feed the cat"
                value={item}
                onChange={(e) => setItem(e.target.value)}
            />
            <button type="submit">add todo</button>
        </form>
    );
}