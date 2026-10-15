import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <h1>Seed SPA</h1>
      <p>Add pages, then ship it.</p>
      <button type="button" onClick={() => setCount((n) => n + 1)}>
        Clicked {count} times
      </button>
    </main>
  );
}
