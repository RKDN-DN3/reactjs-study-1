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