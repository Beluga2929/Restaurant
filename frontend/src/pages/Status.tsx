type messageStatus ={
    status:string
}

export const Status = (props:messageStatus)=>{
    let message
    if(props.status==='loading'){
       message = 'Loading...'
    } else if(props.status === 'success'){
        message = 'Successfuly'
    }
  else if(props.status === 'fail'){
    message = 'fail'
  }
    return(
       <div>
        <h1>
            {message}
        </h1>
       </div>
    )
 }