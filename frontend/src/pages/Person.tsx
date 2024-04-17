type personProps= {
   data:{
        name:string
        age:number
   }
}

export const Person =(props:personProps)=>{
    return(
        <div> {props.data.name} {props.data.age}</div>
    )
}