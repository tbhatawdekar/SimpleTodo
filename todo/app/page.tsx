import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to SimpleTodo!</h1>
      <p>
        An easy-to-use productivity app.

      </p>
      <p>To get started, add a todo</p>
      <Link href={'/todolist'}>Add a Todo!</Link>
    </div>
  );
}