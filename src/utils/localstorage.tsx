import { useSelector } from "react-redux"
import { RootState } from "../app/rootReducer"
import { UserType } from "../types/User"

export const authenticated = (user: UserType, next: () => void) => {
    localStorage.setItem('user', JSON.stringify(user))
    next()
}

export const isAuthenticate = () => {
    const user: UserType[] = useSelector((state: RootState) => state.user.value) 
    if (user)  return true
    return false
}