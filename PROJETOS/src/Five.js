import React, { useState, useEffect } from 'react';

function Example () {
    
    const [count, setCount] = useState (0)

    useEffect(() => {
        document.title = `Cliques: ${count}`; 
    })

    return (
        <div>
            <p>Você clicou {count} vezes</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
}


export default Example;