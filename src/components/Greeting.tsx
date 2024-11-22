import { useState } from "preact/hooks";

export function Greeting({ messages }: Readonly<{ messages: string[] }>) {
    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    const [greeting, setGreeting] = useState(messages[0]);

    return (
        <div>
            <h3>{greeting} ¡Gracias por tu visita!</h3>
            <button className='mt-5 bg-black text-white py-2 px-4 rounded-sm' onClick={() => setGreeting(randomMessage())}>
                Nuevo saludo
            </button>
        </div>
    )

}