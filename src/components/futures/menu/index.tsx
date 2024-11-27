import clsx from 'clsx'
import { useState } from 'react'
import { HomeBtn, MainMenuItem } from '../../../components'
const menuItems: { src: string; title: string; dir: 'r' | 'l' }[] = [
    { title: 'Categories', dir: 'l', src: '/categories' },
    { title: 'Producs', dir: 'r', src: '/products' },
]
const Menu = () => {
    const [homeBtnActive, setHomeBtnActive] = useState<boolean>(false)
    const stylesOfContainer = {
        base: 'z-50 min-w-[100vw] bg-slate-50 flex justify-center items-center flex-col gap-2 relative transition-all duration-700 *:transition-all *:duration-700 ',
        mobile: ' flex-col gap-2 p-2',
        tablet: '',
        laptab: '',
    }
    return (
        <div className={clsx(stylesOfContainer.base)}>
            <HomeBtn setHomeBtnActive={setHomeBtnActive} />
            {menuItems.map(i => (
                <MainMenuItem
                    key={i.title}
                    src={i.src}
                    dir={i.dir}
                    title={i.title}
                    homeBtnActive={homeBtnActive}
                />
            ))}
        </div>
    )
}

export default Menu
