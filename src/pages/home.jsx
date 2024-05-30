import { useState, useEffect } from "react"
import { Button, Heading, Input, Text } from '@chakra-ui/react'
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
        <Text fontSize={'6xl'} >Home</Text>
        
        <hr></hr>

        <Heading as='h3'> Hello , {name}</Heading>

        <div>
            <label> name </label>
            <Input type="text" onChange={(e) => {
                setName(e.target.value)
            }} value={name}  />
            <button> Change </button>
            <div>{counter}</div>
            <Button colorScheme="blue" onClick={() => setCounter(counter+1)}> Counter</Button>
        </div>

        <Foo bar="hello" fooName={name} fooCounter={counter} />
        
    </div>)
}