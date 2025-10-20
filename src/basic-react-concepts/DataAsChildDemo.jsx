const Button = (props) => {
    return <button>{props.children}</button>
}


const DataAsChildDemo = () => {
    return(
        <Button>Submit</Button>
    )
}

export default DataAsChildDemo;