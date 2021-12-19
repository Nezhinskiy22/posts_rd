import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../redux/actions";
import Alert from "./Alert";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  submitHandler = (e) => {
    e.preventDefault();
    const { title } = this.state;
    if (!title.trim()) {
      return this.props.showAlert("Назва поста не може бути пустою");
    }
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    this.props.createPost(newPost);
    this.setState({ title: "" });
  };

  changeInputHandler = (e) => {
    e.persist();
    this.setState((prev) => ({
      ...prev,
      ...{ [e.target.name]: e.target.value },
    }));
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        {this.props.alert && <Alert text={this.props.alert} />}
        <div className="form-group">
          <label htmlFor="title">заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            name="title"
            onInput={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success mt-3" type="submit">
          Створити
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
  showAlert,
};

const mapStateToProps = (state) => ({
  alert: state.app.alert,
});

export default connect(mapStateToProps, mapDispatchToProps)(Postform);
