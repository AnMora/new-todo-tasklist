import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            responsable: '',
            description: '',
            priority: 'low'
        };
        //lo que le estamos diciendo con este .this.handleInput es que este componente pertenece al de arriba
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        //console.log(e.target.value, e.target.name);
        const { value, name } = e.target;
        this.setState({
            //esto es para indicar que voy a cambiar el estado de los inputs
            [name]: value
        });
        console.log(this.state);
    }

    handleSubmit(e){
        //alert("Enviando..");
        e.preventDefault(); //evita refrescar la pagina
        console.log("sending the data..");
        this.props.onAddTodo(this.state);
        console.log(this.state);
    }

    render(){
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group mb-1">
                        <input type="text" name="title" className="form-control" placeholder="Title" onChange={this.handleInput} />
                    </div>
                    <div className="form-group mb-1">
                        <input type="text" name="responsable" className="form-control" placeholder="responsable" onChange={this.handleInput} />
                    </div>
                    <div className="form-group mb-1">
                        <input type="text" name="description" className="form-control" placeholder="description" onChange={this.handleInput}/>
                    </div>
                    <div className="form-group mb-1">
                        <select name="priority" className="form-control" onChange={this.handleInput}>
                            <option>low</option>
                            <option>medium</option>
                            <option>High</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

export default TodoForm;