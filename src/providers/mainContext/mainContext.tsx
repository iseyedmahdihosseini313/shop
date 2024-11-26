import { createContext, useEffect, useState } from 'react'
import { IContextOutProp, IContextProvider, IState } from './mainContext.type'
import IUser from '../../types/user'
export const Context = createContext<IContextOutProp>({} as IContextOutProp)
const ContextProvider = ({ children }: IContextProvider) => {
    const [state, setState] = useState<IState>({
        user: { isAdmin: false } as IUser,
        setting: {
            lang: 'en',
            theme: 'light',
        },
    } as IState)
    useEffect(() => {
        //!here must be check token and getuser api with verify token and get user info
        try {
            let data = { ...state }
            const user = localStorage.getItem('user')
            const setting = localStorage.getItem('setting')
            if (setting) {
                const parsedSetting = JSON.parse(setting)
                data = { ...data, setting: parsedSetting }
            }
            if (user) {
                const parsedUser = JSON.parse(user)
                data = { ...data, user: parsedUser }
            }
            setState(data)
        } catch (error) {
            console.error('Error loading settings:', error)
        }
    }, [])
    //!here must be define get user func to get user info
    const dispatch = (key: string, value: any, store = false) => {
        if (key in state) {
            setState(prev => ({ ...prev, [key]: value }))
            if (store) {
                localStorage.setItem(key, JSON.stringify(value))
            }
        }
    }
    const isAuthenticated = () => !!state.user.fullname
    const isAdmin = () => !!state.user.isAdmin
    return (
        <Context.Provider
            value={{ ...state, dispatch, isAuthenticated, isAdmin }}
        >
            {children}
        </Context.Provider>
    )
}
export default ContextProvider
