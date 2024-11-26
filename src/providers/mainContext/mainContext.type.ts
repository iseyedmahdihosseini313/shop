/* eslint-disable no-unused-vars */
import { ReactNode } from 'react'
import IUser from '../../types/user'
export interface IContextOutProp {
    user: IUser
    dispatch: (key: string, value: any, store: boolean) => void
    isAdmin: () => boolean
    isAuthenticated: () => boolean
}
interface ISetting {
    lang: 'fa' | 'en'
    theme: 'light' | 'dark'
}
export interface IState {
    user: IUser
    setting: ISetting
}
export interface IContextProvider {
    children: ReactNode
}
