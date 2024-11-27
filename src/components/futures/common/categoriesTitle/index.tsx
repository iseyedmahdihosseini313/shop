import clsx from 'clsx'

const CategoriesTitleShow = () => {
    const style = {
        base: 'bg-gradient-to-r from-blue-950/20  text-black p-3 text-[1.9rem] font-thin w-1/2 rounded- hover:tracking-widest transition-all duration-1000',
    }
    return <h1 className={clsx(style.base)}>Categories</h1>
}
export default CategoriesTitleShow
