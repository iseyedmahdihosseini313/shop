import clsx from 'clsx'
import { useState } from 'react'
import { HomeBtn } from './components'
const stylesOfContainer = {
    base: 'min-w-[100vw] min-h-screen bg-slate-100 flex justify-center items-center flex-col gap-2 relative',
    mobile: ' flex-col gap-2 p-2',
    tablet: '',
    laptab: '',
}

const App = () => {
    const [menuBtnActive] = useState<boolean>(false)
    return (
        <div className={clsx(stylesOfContainer.base)}>
            <HomeBtn />
            <div className={clsx()}></div>
        </div>
    )
}

export default App
