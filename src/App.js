import { Component } from 'react';
import './App.css';
import Balance from './balance/Balance';
import Expense from './expense/Expense';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      balanceName:0,
      itemNumber:'',
      List:[]
    }
  }
  onChangeHandler=(event)=>{
    this.setState({
      itemNumber:event.target.value
    })
  }

  onActionHandler=(type)=>{
    let date = new Date().toString();
    let item =this.state.itemNumber;

    if(type=='DEPOSIT'){
      this.setState({balanceName: parseInt(this.state.itemNumber)+parseInt(this.state.balanceName)})
    }
    else if(type=='BALANCE'){
      this.setState({balanceName: parseInt(this.state.balanceName)-parseInt(this.state.itemNumber)})
    }
    this.setState({
     List:[...this.state.List,{date, item, type}],
     itemNumber:''
    
  })

  }
  componentDidUpdate(){
    console.log(this.state.List);
  }

  render(){
    return(<div className='heading'>
      <h1>Expense Tracker</h1>
      <Balance balanceName={this.state.balanceName} itemNumber={this.state.itemNumber} 
      onChangeHandler={this.onChangeHandler} onActionHandler={this.onActionHandler} />
      <Expense List={this.state.List}/>
    </div>)
  }
}

export default App;