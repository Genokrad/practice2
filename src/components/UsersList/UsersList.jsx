import PropTypes from 'prop-types';
import { User } from '../User/User';

export const UsersList = ({ users, deleteUser, changeStatus }) => {
  return (
    <ul>
      {users.map(user => {
        return (
          <li key={user.id}>
            <User
              user={user}
              deleteUser={deleteUser}
              changeStatus={changeStatus}
            />
          </li>
        );
      })}
    </ul>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      hasJob: PropTypes.bool.isRequired,
    }).isRequired
  ),
  deleteUser: PropTypes.func.isRequired,
  changeUser: PropTypes.func.isRequired,
};
