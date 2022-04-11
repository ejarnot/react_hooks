import { useState } from "react";

function Tasks(props){
    let [list, setList] = useState([
        {
          content: "Practice React",
          priority: 1,
          date: "4-11-2022",
        },
    ]);
    let [content, setContent] = useState("");
    let [date, setDate] = useState(new Date().toISOString());
    let [priority, setPriority] = useState(0);

    function handleSubmit(event){
        event.preventDefault();

        setList([
            ...this.state.list,
            {
              
            }
        ])
    }

    return(
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
    )
}