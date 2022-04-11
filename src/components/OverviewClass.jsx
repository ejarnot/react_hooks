import { Component } from "react";

class Tasks extends Component{
    constructor(props){
        super(props)

        this.state={
            list: [{
                content: "Practice React",
                proirity: 1,
                date: "4-11-2022",
            }],
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault();

        this.setState({
            list: [ ...this.state.list,{
                content: this.state.task,
            }]
        })
    }

    render(){
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
                  <input 
                  type="text" 
                  name="newTask" 
                  id="newTask" 
                  placeholder="Sleep..." 
                  value={this.state.task} 
                  onChange={(event)=> this.setState({task: event.target.value})} 
                  />
                  <input 
                    type="date" 
                    name="taskDate" 
                    id="taskDate" 
                    value="{this.state.date}"
                    onChange={(event)=> this.setState({
                        date: event.target.value
                    })}
                />
            </form>
            <ul>
                {this.state.list.map((task, index) => {
                    return <li key={`${task.date}${index}`}>{task.content}</li>;
                })}
            </ul>
          </div>
        );
    }
}

export default Tasks; 