import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.module.scss';

const User = (props) => (
  <div className={styles.User}
    onClick={(evt => {
      console.log('test')
    })}
    data-testid="User">
    <img src={props.user.img} alt='portrait' />
    {props.user.nick}
  </div>
);

User.propTypes = {};

User.defaultProps = {};

export default User;
