class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: !this.props.taskName
        }
        this.textId = React.createRef();
    }

    handleClickEdit = ()=>{
        this.setState({isEdit: true});
    }

    handleClickDelete = () =>{
        this.props.deleteTask(this.props.index);
    }
    renderView= ()=> {
        return (
            <div className='box'>
                <div>{this.props.children}</div>
                <button onClick={this.handleClickEdit} className='btn light'>Edit</button>
                <button onClick={this.handleClickDelete} className={'btn red'}>Delete</button>
            </div>
        );
    }
    handleClickSave = ()=>{
        const task = this.textId.current.value;
        this.props.updateTask(this.props.index, task);
        this.setState({isEdit:false});
    }
    renderEdit = () => {
        return(
            <div className='box'>
                <textarea ref={this.textId} defaultValue={this.props.children}></textarea>
                <button className={"btn success"} onClick={this.handleClickSave}>Save</button>
            </div>
        );
    }
    render() {
        return (
            this.state.isEdit ? this.renderEdit() : this.renderView()
        )
    }
}

class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: ['Task1','Task2', 'Task3']
        }
    }

    deleteTask = index =>{
        const tasks = [...this.state.tasks];
        tasks.splice(index,1);
        this.setState({tasks});
    }

    updateTask = (index, content)=>{
        const tasks = [...this.state.tasks];
        tasks[index] = content;
        this.setState({tasks});
    }

    handleClickAddNewTask =()=>{
        //TODO
        const tasks = [...this.state.tasks];
        tasks.push('');
        this.setState({tasks});
    }

    render () {
        return (
            <div className='field'>
                <button className={"btn new"} onClick={this.handleClickAddNewTask}>Add New Task</button>
                <p></p>
                {this.state.tasks.map((t,i) => <Task taskName={t} key={i+1} index={i}
                                                     deleteTask={this.deleteTask}
                                                     updateTask={this.updateTask}>{t}</Task>)}
            </div>
        )
    }
}

ReactDOM.render(<TaskList/>, root)
