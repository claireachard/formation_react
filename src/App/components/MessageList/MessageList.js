import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MessageList.module.scss';
import Message from '../Message/Message';

export const messageListInitialState = [
  {
    id: 0,
    text: 'Voici le message',
    dateTime: new Date().toString(),
    userId: 0,
    user: {
      id: 0,
      nick: 'Mme Princesse',
      img: 'https://th.bing.com/th/id/OIP.pxah8UHSkCzavQRVJlE1LgHaJO?pid=ImgDet&rs=1'
    }
  },
  {
    id: 1,
    text: 'Voici le message',
    dateTime: new Date().toString(),
    userId: 1,
    user: {
      id: 1,
      nick: 'Mr. No',
      img: 'https://www.aubert.com/medias/sys_aubert/root/h45/hdb/8966416367646/01021435-1.jpg'
    }
  }];

const MessageList = (props) => {
  const [messageListState, setMessageListState] = useState(messageListInitialState)
  return (
    <div className={styles.MessageList} data-testid="MessageList">
      Message List
      <div style={{ height: '100%', overflowY: 'scroll' }}>
        {
          messageListState.map((e, index) => <Message message={e} key={`mess-${index}`}/>)
        }

        {/* {JSON.stringify(messageListState)} */}
      </div>
    </div>
  );
}

MessageList.propTypes = {};

MessageList.defaultProps = {};

export default MessageList;
