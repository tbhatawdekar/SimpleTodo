'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function DeleteTodo({ id }: { id: string }) {
    const router = useRouter();
    const remove = async () => {
        await fetch(`http://127.0.0.1:8090/api/collections/todos/records/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

        router.refresh();
    }
    
    return (
        <button onClick={remove}>Delete</button>
    );
}
