import React, { Component } from 'react';
import logo from './MORASKULL1.png';
import './App.css';

// Importacion de archivos que necesito para armar la pagina
import TodoForm from './components/TodoForm.js';

//Se creo un todos.json para simular extraccion de datos desde una base de datos
import { todos } from './todos.json'
// para verlos 
console.log(todos);

class App extends Component {
  constructor(){
    super();
    this.state = {
      // title: 'Aplicacion de tareas',
      // ntareas: 10
      //Se pueden escribir asi
      //todos: todos
      //o asi
      todos
    };
    //Se pierde el scope lo cual hay que especificarlo que es parte de este constructor
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo] //con esto agrego nuevas tareas a todos.json
    })
  }

  removeTodo(index){
    //console.log(index);
    if(window.confirm('Estas seguro de eliminar esta tarea?')){
      //Si el indice es encontrado dentro del arreglo, lo va a quitar
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
      })
    }
  }

  render(){
    const todos = this.state.todos.map((todo, i) => {
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>
                {todo.title}
              </h3>
              <span className="text-danger">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>
                {todo.description}
              </p>
              <p>
                {todo.responsable}
              </p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.removeTodo.bind(this, i)}>
                Borrar Tarea
              </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
            {/* <a href="##" className="text-white"> */}
                {/* {this.state.title} - {this.state.ntareas} */}
                <p className="text-white">
                  Tareas por hacer= 
                  <span className="text-info pl-3">
                    { this.state.todos.length }
                  </span>
                </p>
            {/* </a> */}
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo} />
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
        </div>
      </div>
    </div>  
    );
  }
}

export default App;
