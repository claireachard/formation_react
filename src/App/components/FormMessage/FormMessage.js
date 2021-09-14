import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FormMessage.module.scss';
import MessageInput from '../MessageInput/MessageInput';
import SelectUser from '../SelectUser/SelectUser';
import { userListInitialState } from '../UserList/UserList';
import Button from '../Button/Button';

export const formMessageInitialState = {
  text: 'new text',
  destId:0
};

const FormMessage = (props) => {
  const [formMessageState, setFormMessageState] = useState(formMessageInitialState)
  return (
    <div className={styles.FormMessage} data-testid="FormMessage">
      {JSON.stringify(formMessageState)}
      <form onSubmit={(evt)=> {
        evt.preventDefault();
      }}>
        <MessageInput value={formMessageState.text} 
          onChange={(evt)=> {setFormMessageState({...formMessageState, text:evt.target.value})}}/>
        <SelectUser users={userListInitialState} 
          onChange={(evt)=>{setFormMessageState({...formMessageState, destId:Number(evt.target.value)})}}
        />
        <Button type="submit">Envoyer</Button>
      </form>
      {/* {JSON.stringify(formMessageState)} */}
    </div>
  );
}

FormMessage.propTypes = {};

FormMessage.defaultProps = {};

export default FormMessage;
