import React, { useContext } from 'react';
import ContextUser from './ContextUser';
import { userHook } from '../hooks/UserHooks';

const Users = () => {
    const { userData, setUserData } = userHook()

    const handleDelete = (id) => {
        const filteredUsers = userData.filter(userItem => userItem.id !== id);
        setUserData(filteredUsers);
    };



    return (
        <div className="grid grid-cols-4 gap-6 my-5">
            {userData.length === 0 ? (
                <h1>Loading...</h1>
            ) : (
                userData.map(userItem => (
                    <ContextUser key={userItem.id} userItem={userItem} handleDelete={handleDelete} />
                ))
            )}
            {/* {userData.map(userItem => (
                <ContextUser key={userItem.id} userItem={userItem} handleDelete={handleDelete} />
            ))} */}
        </div>
    );
};

export default Users;
