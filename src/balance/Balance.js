import { Component } from 'react';
import './Balance.css';


class Balance extends Component{

    constructor(props){
        super(props)
    }
    render(){
        return(<div className='form-container'>
            <h3 className='sub-heading'>Balance:{this.props.balanceName}</h3>
            <input type='number' value={this.props.itemNumber} onChange={this.props.onChangeHandler} name='num'/>
            <div className='button'>
                <button className='btn green' onClick={()=>this.props.onActionHandler('DEPOSIT')}>DEPOSIT</button>
                <button className='btn red' onClick={()=>this.props.onActionHandler('WITHDRAW')}>WITHDRAW</button>

            </div>
        </div>)
    }

}

export default Balance;