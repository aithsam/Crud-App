import {React, Component} from 'react';
import "./App.css";

class App extends Component{

  constructor(){
    super();
    this.state={
      title : "Crud App",
      employeeData : [],
      act : 0,
      index : ''
    }
  }

  handleSubmit=(e)=>{
    e.preventDefault();//Default action that belongs to the event will not occur.
    let employeeData = this.state.employeeData;
    let name=this.refs.textName.value;
    let age=this.refs.textAge.value;
    
    if(this.state.act===0){
      let newEmployee ={
        "name":name,
        "age":age,
      }
      employeeData.push(newEmployee);
    }
    else{
      let index= this.state.index;
      employeeData[index].name=name;
      employeeData[index].age=age;
    }

    this.setState({
      employeeData:employeeData,
      act:0
    })

    this.refs.myForm.reset();
    
  }

  handleEdit= (i)=>{
    let employeeData=this.state.employeeData[i];
    this.refs.textName.value=employeeData.name;
    this.refs.textAge.value=employeeData.age;

    this.setState({
      employeeData:employeeData,
      act:1,
      index:i
    })
  }

  handleDelete=(i)=>{
    let employeeData = this.state.employeeData;
    employeeData.splice(i,1);
    this.setState({
      employeeData : employeeData
    });
  }


  render(){
    let employeeData = this.state.employeeData;
    return(
    <div>
      
      <form ref="myForm" className="myForm">
      <h1>{this.state.title}</h1>
        <label>Name</label>
        <input type="text" ref="textName" placeholder="Enter Your Name" className="formFeild"/>
        <label>Age</label>
        <input type="text" ref="textAge" placeholder="Enter your Age" className="formFeild" />
        <button onClick={e => this.handleSubmit(e)} className="myButton">Save</button>
      </form>
      <table className='table'>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>

        {
          employeeData.map( (data,i) =>
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>
                <button onClick={i=>this.handleEdit(i)} className="myButton">Edit</button>
              </td>
              <td>
                <button onclick={i=>this.handleDelete(i)} className="myButton">Delete</button>
              </td>
            </tr>
          )
        }

      </table>
      
    </div>
    )
  }

}

export default App;