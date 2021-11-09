import React,{ Component} from 'react';

class Demo extends Component{
    showInfo(product){
        if(product.status){
            return ( 
            <h3>
                ID:{product.id}<br/>
                Name:{product.name}<br/>
                Age:{product.age}<br/>
                STT:{product.status?"tr":"fa"}
            </h3>)
        }
    }
    render(){
        var a='66';
        var b='9';
        var product={
            id:1,
            name:'namNN',
            age:27,
            status:true
        }
        var users=[
            {id:1,name: 'nam1', age:20},
            {id:2,name: 'nam2', age:21},
            {id:3,name: 'nam3', age:22}
        ]
        var els= users.map((user,index)=>{
            return ( <div key={user.id}>
                        <h2>Tên: {user.name}</h2>
                    </div>)
        })
        return (
        <div >
            <div className="ml-30">
                <h2>
                    a:{a}<br/>
                    b:{b}<br/>
                    a+b:{Number(a) + Number(b)}
                </h2>
                {this.showInfo(product)}
                {els}
                
            </div>
        </div>
        )
    }
}
export default Demo;
