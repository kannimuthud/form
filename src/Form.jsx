import React,{ Component }  from 'react';
class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            Username :'',
            commands:'Give your commands',
            topic:'vue'
        }
    }
    handle = event =>{
        this.setState({
            Username:event.target.value
        })
    }
    handleCommands = event =>{
        this.setState({
            commands:event.target.value
        })
    }
    handleTopic = event =>{
        this.setState({
            topic:event.target.value
        })
    }
    submitForm = event =>{
        alert(this.state.Username + this.state.commands + this.state.topic);
 
        event.preventDefault();
    }
    render(){
        return(
           <form onSubmit={this.submitForm}>
               <div>
                   <label > Username</label>
                   <input type="text" 
                   value={this.state.Username} 
                   onChange={this.handle} />
               </div>
               <div>
                   <label >commands</label>
                   <textarea 
                   value={this.state.commands}  
                   onChange={this.handleCommands}> </textarea>
               </div>
               <div>
                   <label >Topic</label>
                   <select   multiple={true} value={['react1' , 'react']}
                   value={this.state.topic}  
                   onChange={this.handleTopic}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="react1">React1</option>
                        <option value="angular1">Angular1</option>
                        <option value="vue"  selected >vue</option>
                   </select>
               </div>
               <input type="submit" value="Submit" />
           </form>
        )
    }
} 
export default Form