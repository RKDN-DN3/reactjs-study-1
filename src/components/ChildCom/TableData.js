import { Component } from "react";

class TableData extends Component{
    ShowRowOther(text) {
        if(text===undefined || text===''){
            return null;
        }
        return(
            <tr>
                <td className="color">PROPS</td>
                <td>Count: {text}</td>
            </tr> 
        )
    }
    render(){
        return(
            <div>
                <table>
                    <tr>
                        <td className="color">STATE</td>
                        <td>Count: {this.props.count}</td>
                    </tr> 
                    {this.ShowRowOther(this.props.props)}                                          
                </table>
            </div>
        )
    }
     
}

export default TableData