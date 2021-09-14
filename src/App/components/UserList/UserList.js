import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './UserList.module.scss';
import User from '../User/User';

export const userListInitialState = [
  {
    id:0,
    nick:'Mme Princesse',
    img:'https://th.bing.com/th/id/OIP.pxah8UHSkCzavQRVJlE1LgHaJO?pid=ImgDet&rs=1'
  },
  {
    id:1,
    nick:'Mr. No',
    img:'https://www.aubert.com/medias/sys_aubert/root/h45/hdb/8966416367646/01021435-1.jpg'
  }
];

const UserList = (props) => {
  const [userListState, setUserListState] = useState(userListInitialState)
  return (
    <div className={styles.UserList} data-testid="UserList">
      User List
      <div style={{ height: '100%', overflowY: 'scroll' }}>
        {
          userListInitialState.map((e, index) => <User user={e} key={`user-${index}`}/>)
        }

        {/* {JSON.stringify(userListState)} */}
      </div>
    </div>
  );
}

UserList.propTypes = {};

UserList.defaultProps = {};

export default UserList;
