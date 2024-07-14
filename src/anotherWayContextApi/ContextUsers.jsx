import React, { useContext } from 'react';
import ContextUser from './ContextUser';
import { userHook } from '../hooks/UserHooks';

const Users = () => {
    const { userData } = userHook()

    return (
        <div className="grid grid-cols-4 gap-6 my-5">
            {userData.length === 0 ? (
                <h1>Loading...</h1>
            ) : (
                userData.map(userItem => (
                    <ContextUser key={userItem.id} userItem={userItem}  />
                ))
            )}
            {/* {userData.map(userItem => (
                <ContextUser key={userItem.id} userItem={userItem} handleDelete={handleDelete} />
            ))} */}
        </div>
    );
};

export default Users;
