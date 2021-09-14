import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectUser.module.scss';

const SelectUser = (props) => (
  <select className={styles.SelectUser} value={props.value} data-testid="SelectUser" onChange={props.onChange}>
    {props.users.map((e, index)=><option value={e.id} key={`opt-user-${index}`}>{e.nick}</option>)}
  </select>
);

SelectUser.propTypes = {users:PropTypes.array.isRequired};

SelectUser.defaultProps = {};

export default SelectUser;
