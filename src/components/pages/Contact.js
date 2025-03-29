import React, { useState } from 'react'
import { useEffect } from 'react'

const Contact = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //sempre que estiver vazio, vai rodar apenas uma vez e no ato da renderização da página
    console.log(`rodou uma só vez ${count}`)
  }, []);

  useEffect(() => {
    //sempre que estiver com um valor de uma variável (state), vai executar sempre que o state mudar
    console.log(`o valor do count mudou, olha ele ai: ${count}`)
  }, [count]);

  const handleSetCount = () =>{
    setCount(count+1);
  }


  

  return (
    <>
      <h1>Contact {count}</h1>
      <h2>alkjsadj</h2>


      <button onClick={handleSetCount}>iterar sob count</button>
    </>
  );


}

export default Contact
