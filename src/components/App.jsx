import React, { Component } from 'react';
import { UsersList } from './UsersList/UsersList';
import { Section } from './Section/Section';
import { data } from '../data/users';
import { Button } from './Button/Button';
import { AddForm } from './AddForm/AddForm';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    users: data,
    isFormShown: false,
  };

  deleteUser = userId => {
    this.setState(prevState => {
      return {
        users: prevState.users.filter(user => user.id !== userId),
      };
    });
  };

  changeStatus = userId => {
    this.setState(prevState => {
      return {
        users: prevState.users.map(user => {
          if (user.id === userId) {
            return { ...user, hasJob: !user.hasJob };
          } else {
            return user;
          }
        }),
      };
    });
  };

  openForm = () => {
    this.setState({ isFormShown: true });
  };

  closeForm = () => {
    this.setState({ isFormShown: false });
  };

  addUser = data => {
    const newUser = {
      id: nanoid(),
      hasJob: false,
      ...data,
    };
    this.setState(prevState => {
      return {
        users: [...prevState.users, newUser],
      };
    });
  };

  render() {
    const { users, isFormShown } = this.state;
    return (
      <>
        <Section>
          <UsersList
            users={users}
            deleteUser={this.deleteUser}
            changeStatus={this.changeStatus}
          />
          {isFormShown ? (
            <AddForm addUser={this.addUser} closeForm={this.closeForm} />
          ) : (
            <Button text="Add User" clickHandler={this.openForm} />
          )}
        </Section>
      </>
    );
  }
}
