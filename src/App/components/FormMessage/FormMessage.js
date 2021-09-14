import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FormMessage.module.scss';
import MessageInput from '../MessageInput/MessageInput';
import SelectUser from '../SelectUser/SelectUser';

export const formMessageInitialState = {};

const FormMessage = (props) => {
  const [formMessageState, setFormMessageState] = useState(formMessageInitialState)
  return (
    <div className={styles.FormMessage} data-testid="FormMessage">
      FormMessage Component
      <div className={styles.input}>
        <MessageInput/>
      </div>
      <div className={styles.select}>
        <SelectUser/>
      </div>
      {/* {JSON.stringify(formMessageState)} */}
    </div>
  );
}

FormMessage.propTypes = {};

FormMessage.defaultProps = {};

export default FormMessage;
