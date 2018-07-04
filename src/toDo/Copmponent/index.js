import React, { Component } from "react";

export class TodoComponent extends Component {
  render() {
    const {
      value,
      list,
      handleChange,
      handleSubmit,
      handleChecked,
      handleDelete
    } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={value} onChange={handleChange} />
          </label>
          <button> save </button>
        </form>
        <ul>
          {list.map(item => {
            return (
              <li
                key={item.id}
                style={{ background: item.checked ? "tomato" : "" }}
              >
                {item.value}

                <button onClick={() => handleDelete(item.id)}>Delete</button>
                <input
                  type="checkbox"
                  onChange={() => handleChecked(item.id)}
                />
              </li>
            );
          })}
        </ul>
        <br />
        <br />
        <br />
        <ul>
          {list.map(item => {
            if (item.checked === true)
              return <li key={item.id}> {item.value} </li>;
          })}
        </ul>
      </div>
    );
  }
}
