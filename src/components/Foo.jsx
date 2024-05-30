import Bar from "./Bar"
import style from "./foo.module.css"

export function FooFirst(){
    return(<div> 
        FooFirst 
        
    </div>)
}

export function FooSecond(){
    return (<div>Foo Second</div>)
}

export default function Foo(props){

    const { fooName, fooCounter, bar } = props

    return (<div className={style.foo}  style={{ border:"1px solid red", padding:10}}>Foo
        <div> name : {fooName}</div>
        <div> counter : {fooCounter}</div>
        <div>
            <Bar bar={bar}>
                <div> Bar children of Foo</div>
                <h3 color="blue"> Bar children of Foo </h3>
            </Bar>
            <Bar bar={bar}>
                <div> Bar children of Foo</div>
                <h3 color="blue"> Bar children of Foo </h3>
            </Bar>
            <Bar bar={bar}>
                <div> Bar children of Foo</div>
                <h3 color="blue"> Bar children of Foo </h3>
            </Bar>
        </div>
    </div>)
}