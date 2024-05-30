import { useState, useEffect } from "react"
import Foo from "./../components/Foo"

export default function Home(){

    const [name, setName] = useState('')
    const [counter, setCounter] = useState(0)

    // const handleChangeInput = (e) => {
    //     setName(e.target.value)
    // }
    useEffect(() => {
        console.log(" name : ", name)
    },[])
    
    useEffect(() => {
        console.log(" uf2 : ", counter)
    },[counter, name])

    return (<div>
        <h1>Home</h1>
        
        <hr></hr>

        <h3> Hello , {name}</h3>

        <div>
            <label> name </label>
            <input type="text" onChange={(e) => {
                setName(e.target.value)
            }} value={name}  />
            <button> Change </button>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter+1)}> Counter </button>
        </div>

        <Foo bar="hello" fooName={name} fooCounter={counter} />
        
    </div>)
}