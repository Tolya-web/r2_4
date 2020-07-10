import React from "react";
import "./create-new-element.scss";

class CreateNewElement extends React.Component {
  state = {
    label: "",
  };
  onChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAdded(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      <form className="new-task" onSubmit={this.onSubmit}>
        <input
          type="text"
          id="new-task-input"
          placeholder="Write down a new task..."
          value={this.state.label}
          onChange={this.onChange}
        />
        <button id="new-task-button">Add</button>
      </form>
    );
  }
}

export default CreateNewElement;
