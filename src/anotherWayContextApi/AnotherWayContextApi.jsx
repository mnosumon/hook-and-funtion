import React from 'react'
import ContextNewUser from './ContextNewUser'
import ContextUsers from './ContextUsers'
import { UserContextProvider } from './UserContextApi'

const AnotherWayContextApi = () => {




  return (
    <>
        <UserContextProvider>
            <ContextNewUser />
            <ContextUsers />        
        </UserContextProvider>
    </>
  )
}

export default AnotherWayContextApi