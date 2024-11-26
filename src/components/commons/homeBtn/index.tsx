import clsx from 'clsx'
import './index.css'

const HomeBtn = () => {
    const buttonStyle = {
        base: 'p-2 fixed min-w-12 min-h-12 transition-all duration-1000 left-50 -bottom-5 active:scale-125 hover:scale-125 ease-in-out bg-gray-400 rounded-t-full before:content[""] before:absolute before:size-10 before:rounded-full before:-left-[2.3rem] before:bottom-5  before:content[""] after:absolute after:size-10 after:rounded-full after:content[""] after:left-[2.9rem] after:bottom-5 shadowAfter shadowBefore rounded-full ',
    }
    return <div id='HomeBtn' className={clsx(buttonStyle.base)}></div>
}

export default HomeBtn
