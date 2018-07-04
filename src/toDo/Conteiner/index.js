import React, { Component } from "react";
import { TodoComponent } from "../Copmponent/index";

export class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      list: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChecked = this.handleChecked.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.value) return;

    const newItem = {
      value: this.state.value,
      id: Date.now(),
      checked: false,
      hidden: false
    };

    this.setState(prevState => ({
      list: [...prevState.list, newItem],
      value: ""
    }));
  }

  handleChecked(id) {
    this.setState(prevState => ({
      list: prevState.list.map(todo => {
        if (todo.id === id) {
          todo.checked = !todo.checked;
        }
        return todo;
      })
    }));
  }
  handleDelete(id) {
    this.setState(prevState => ({
      list: prevState.list.filter(todo => todo.id !== id)
    }));
  }

 
  render() {
    return (
      <div>
        <TodoComponent
          value={this.state.value}
          list={this.state.list}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleChecked={this.handleChecked}
          handleDelete={this.handleDelete}
        />
      </div>
    );
}
}

