import { useContext } from "react"
import { UserContext } from "../anotherWayContextApi/UserContextApi"

export const userHook = ()=>{
    return useContext(UserContext)
}