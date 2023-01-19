import PropTypes from 'prop-types';
import { Text, NativeText, Btn } from './User.styled';

export const User = ({
  user: { name, email, id, hasJob },
  deleteUser,
  changeStatus,
}) => {
  const endsWithBiz = email.endsWith('biz');
  return (
    <>
      <Text>
        Name: <NativeText>{name}</NativeText>
      </Text>
      <Text>
        Email: <NativeText isRed={endsWithBiz}> {email}</NativeText>
      </Text>
      <Text>Has job: {hasJob + ''}</Text>
      <Btn onClick={() => deleteUser(id)}>Delete</Btn>
      <Btn onClick={() => changeStatus(id)}>Change job status</Btn>
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    hasJob: PropTypes.bool.isRequired,
  }).isRequired,
  deleteUser: PropTypes.func.isRequired,
  changeUser: PropTypes.func.isRequired,
};
