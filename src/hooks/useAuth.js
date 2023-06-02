import { useSelector } from 'react-redux'

export const useAuth = () => {
    const {email, userName, surname, role} = useSelector(state => state.user)

    return {
        isAuth: !!email,
        email,
        userName,
        surname,
        role
    }
}