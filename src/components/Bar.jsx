const Bar = (props) => {

    const { bar, children } = props

    return (<div style={{ padding:10, border:"1px solid blue" }}>
        
        <div style={{ border:"1px solid", borderColor:'purple',}}>{children}</div>
    </div>)
}

export default Bar