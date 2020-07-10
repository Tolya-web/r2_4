import React, { Component } from "react";
import "./todo-list-item.scss";

class ToDoListItem extends Component {
  /* state = {
    doneOk: false,
  };*/
  render() {
    const { message, done, important } = this.props;
    let classNameText = " task-text ";

    let clickHandler = () => {
      this.props.onToggle();
      /*  this.state.doneOk = true;
      console.log(this.state);*/
      /*    this.setState(
        (prevState) => {
          return {
            done: !prevState.done,
          };
        }
      );*/
    };

    let removeHandler = () => {
      this.props.onDelete();
    };

    if (done) {
      classNameText += " task_is_done";
    }

    let clickHand = () => {
      this.props.onImportant();
      //  this.props.important = !this.props.important;
    };

    if (important) {
      classNameText += " taskisdone";
    }

    return (
      <div className="task-item">
        <span
          className={classNameText}
          onClick={() => {
            clickHandler();
          }}
        >
          {message}
        </span>
        <div className="controls">
          <i
            className="fa fa-trash"
            onClick={() => {
              removeHandler();
            }}
          />
          <i
            className="fa fa-star"
            onClick={() => {
              clickHand();
            }}
          />
        </div>
      </div>
    );
  }
}

export default ToDoListItem;
