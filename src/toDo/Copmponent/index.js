import React, { Component } from "react";

export class TodoComponent extends Component {
  render() {
    const {
      value,
      list,
      showList,
      handleChange,
      handleSubmit,
      handleChecked,
      handleDelete,
      sortItem
    } = this.props;

    //Отрисовка всех ТоДо
    let allList = (
      <ul>
        {list.map(item => {
          return (
            <li key={item.id}>
              {item.value}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <input type="checkbox" onChange={() => handleChecked(item.id)} />
            </li>
          );
        })}
      </ul>
    );

    //Отрисовка выбранных ТоДо
    let checkedList = (
      <ul>
        {list.map(item => {
          if (item.checked === true)
            return <li key={item.id}> {item.value} </li>;
        })}
      </ul>
    );

    //
    return (
      <div>
        <button onClick={() => sortItem("All")}>Show All</button>
        <button onClick={() => sortItem("Checked")}>Show Only Checked</button>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={value} onChange={handleChange} />
          </label>
          <button> Save </button>
        </form>
        {showList === "All" ? allList : checkedList}
      </div>
    );
  }
}
