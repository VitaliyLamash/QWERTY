import React, { Component } from "react";
import { TodoComponent } from "../Copmponent/index";

export class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      list: [],
      showList: "All"
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.state.value) return;

    const newItem = {
      value: this.state.value,
      id: Date.now(),
      checked: false
    };

    this.setState(prevState => ({
      list: [...prevState.list, newItem],
      value: ""
    }));
  };

  handleChecked = id => {
    this.setState(prevState => ({
      list: prevState.list.map(todo => {
        if (todo.id === id) {
          todo.checked = !todo.checked;
        }
        return todo;
      })
    }));
  };
  handleDelete = id => {
    this.setState(prevState => ({
      list: prevState.list.filter(todo => todo.id !== id)
    }));
  };

  sortItem = showValue => {
    if (showValue === "All") this.setState({ showList: "All" });
    else this.setState({ showList: "Checked" });
  };

  render() {
    return (
      <div>
        <TodoComponent
          value={this.state.value}
          list={this.state.list}
          showList={this.state.showList}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleChecked={this.handleChecked}
          handleDelete={this.handleDelete}
          sortItem={this.sortItem}
        />
      </div>
    );
  }
}
