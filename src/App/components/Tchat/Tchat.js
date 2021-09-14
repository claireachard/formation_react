import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Tchat.module.scss';
import FlexContainer from '../FlexContainer/FlexContainer';
import MessageList from '../MessageList/MessageList';
import UserList from '../UserList/UserList';
import FormMessage from '../FormMessage/FormMessage';

export const tchatInitialState = {};

const Tchat = (props) => {
  const [tchatState, setTchatState] = useState(tchatInitialState)
  return (
    <div className={styles.Tchat} data-testid="Tchat">
        <FlexContainer type="horizontal" style={{height:'98vh'}}>
          {/* partie supérieure */}
          <FlexContainer type="vertical">
            <MessageList/>
            <UserList/>
          </FlexContainer>
          {/* partie inférieure */}
          <FormMessage/>
        </FlexContainer>
      {/* {JSON.stringify(tchatState)} */}
    </div>
  );
}

Tchat.propTypes = {};

Tchat.defaultProps = {};

export default Tchat;
