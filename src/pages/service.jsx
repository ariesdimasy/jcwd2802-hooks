import { useEffect,useState, useRef} from "react"

export default function Service(){

    useEffect(() => {
        console.log(" first load ")   
    })

    const inputRef  = useRef(null)
    const [name, setName] = useState('')

    return (<div>
        <h2>Service</h2>
        <hr></hr>
        <p> Name : {name}</p>
        <input type="text" ref={inputRef} />
        <button onClick={() => {
            setName(inputRef.current.value)
            alert( inputRef.current.value )

        }}> focus </button>
    </div>)
}