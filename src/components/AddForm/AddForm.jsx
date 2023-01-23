import { Component } from 'react';

export class AddForm extends Component {
  state = {
    name: '',
    email: '',
  };

  changeHandler = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addUser({ ...this.state });
    this.setState({ name: '', email: '' });
    this.props.closeForm();
  };

  render() {
    const { name, email } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            value={name}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={this.changeHandler}
            value={email}
          />
        </label>
        <button>Save</button>
      </form>
    );
  }
}
