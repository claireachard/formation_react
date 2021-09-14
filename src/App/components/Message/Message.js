import React from 'react';
import PropTypes from 'prop-types';
import styles from './Message.module.scss';

const Message = (props) => (
  <div className={styles.Message} data-testid="Message">
    {/* Message Component */}
    <img src={props.message.user.img} alt="portrait"/>
    <div>
      <div className={styles.messageHeader}>
        {props.message.user.nick} le {props.message.dateTime}
      </div>
      <div className={styles.messageContent}>
        {props.message.text}
      </div>
    </div>
  </div>
);

Message.propTypes = {};

Message.defaultProps = {};

export default Message;
