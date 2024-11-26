import clsx from 'clsx'
import './index.css'
import IHomeBtn from '../../../types/homeBtn'
const HomeBtn = ({ setHomeBtnActive }: IHomeBtn) => {
    const buttonStyle = {
        base: 'flex justify-center items-center p-1 fixed min-w-12 min-h-12 transition-all duration-1000 left-50 -bottom-5 active:scale-125 hover:scale-125 ease-in-out bg-black rounded-t-full before:content[""] before:absolute before:size-10 before:rounded-full before:-left-[2.3rem] before:bottom-5  before:content[""] after:absolute after:size-10 after:rounded-full after:content[""] after:left-[2.9rem] after:bottom-5 shadowAfter shadowBefore rounded-full ',
    }
    return (
        <div
            onClick={() => {
                setHomeBtnActive(prev => !prev)
            }}
            id='HomeBtn'
            className={clsx(buttonStyle.base)}
        >
            {' '}
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width='20'
                height='20'
                fill='none'
                viewBox='0 0 16 20'
            >
                <path
                    fill='#e0dddc'
                    d='M1 6v9h5v-4a2 2 0 1 1 4 0v4h5V6L8 0z'
                ></path>
            </svg>
        </div>
    )
}
export default HomeBtn
