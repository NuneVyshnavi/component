function StudentCard(props){
    console.log(props)
    return(
        <div>
            <h1>Name:{props.name}</h1>
            <h1>Age:{props.age}</h1>
            <h1>Batch:{props.batch}</h1>
        </div>
    )
}

export default StudentCard