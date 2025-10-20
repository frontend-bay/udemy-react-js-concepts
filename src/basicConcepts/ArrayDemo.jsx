const arrayDemo = () => {
    const stars = Array.from({ length: 5 }, (_, i) => i+2);
    return (
        <>
            {stars.map((item, i) => <h1>{item}</h1>)}
        </>
    )

}

export default arrayDemo;