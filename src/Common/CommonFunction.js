export function demoAsyncCall()  {    
    return new Promise((resolve) => setTimeout(() => resolve(), 500));
}

export function showTimeRender() {
    var dateNow= new Date();
    return(
        <div>
            <h4>Time Render: {dateNow.toLocaleTimeString()}</h4>
        </div>
    )
} 
export function showLoading(isLoading){
    if(isLoading){
        return ( 
        <h4 style={{color:"red"}}>
            Loading...                
        </h4>)
    }
}
export function showBtnOnClick(onClick){
    if(onClick)
    {
        return (
            <a className="btn btn-primary btn-sm m-lg-2" onClick={onClick} role="button">OnClick</a>
        )
    }
}