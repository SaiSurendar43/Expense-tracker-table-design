import { Component } from "react";
import './Expense.css';

class Expense extends Component{
     constructor(props){
     super(props);
};

render(){
    return(<div className='container'>
        <h2>Transaction</h2>
        <div className='map-container'>
        <table className=''>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>DATE/TIME</th>
                        <th>BALANCE</th>
                        <th>MODE OF TRANSACTIONS</th>
                    </tr>
                </thead>
                <tbody>
        {this.props.List && this.props.List.length >= 1 &&
                
                        this.props.List.map((obj, index) => {
                            return (<tr key={index}>
                               <td>{index}</td>
                               <td>{obj.date}</td>
                               <td>{obj.item}</td>
                               <td>{obj.type}</td>
                            </tr>)

                        })}
                   
            
                </tbody>
            </table>
        </div>
    </div>)
}
}

export default Expense;