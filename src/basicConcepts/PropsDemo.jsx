const ConsumePropsDemo = (props) => {
    return (
        <>
            <h1>{props.msg}</h1>
        </>
    )
}

const PropsDemo = () => {
    return(
        <ConsumePropsDemo msg="my name is Shivam"></ConsumePropsDemo>
    )
}

export default PropsDemo;