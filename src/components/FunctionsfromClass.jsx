import { useState } from "react";

function Tasks(props){
    let [list, setList] = useState([
    {   
        content: "Practice React",
        proirity: 1,
        date: "4-11-2022",
    }
    ]);

    let[content, setContent] = useState("")
    let[date, setDate] = useState(new Date().toISOString())
    let[priority, setPriority] = useState(0)

    function handleSubmit(event){
        event.preventDefault();

        setList([
          ...list,
          {
            content: content,
            date: date,
            priority: priority,
          },

        ]);
        
        setContent("")
        setDate(new Date().toISOString())
        setPriority(0)
    }


    return (
        <div>
          <form onSubmit={this.handleSubmit}>
                <input 
                type="text" 
                name="newTask" 
                id="newTask" 
                placeholder="Sleep..." 
                value={this.state.task} 
                onChange={(event)=> setTask(event.target.value)} 
                />
                <input 
                  type="date" 
                  name="taskDate" 
                  id="taskDate" 
                  value="{this.state.date}"
                  onChange={(event)=> setDate(event.target.value
                  )}
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