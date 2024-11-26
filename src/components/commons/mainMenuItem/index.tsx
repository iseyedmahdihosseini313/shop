import clsx from 'clsx'
import IMainMenuItem from '../../../types/mainMenuItem'
import { Link } from 'react-router'
import { memo } from 'react'
const MainMenuItem = ({ title, dir, homeBtnActive, src }: IMainMenuItem) => {
    const style = {
        dir: dir === 'r' ? 'right-8' : 'left-8',
        visibility: !homeBtnActive && 'hidden',
        base: 'fixed flex justify-center items-center p-2 bottom-1 min-w-44 min-h-12 rounded-full tracking-widest ring-2 ring-slate-200',
        titleStyle: 'text-center text-2xl text-gray-500 ',
    }
    return (
        <Link
            to={src}
            id={title}
            className={clsx(style.dir, style.visibility, style.base)}
        >
            <span className={clsx(style.titleStyle)}>{title}</span>
        </Link>
    )
}

export default memo(MainMenuItem)
