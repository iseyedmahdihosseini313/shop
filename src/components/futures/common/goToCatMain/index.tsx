import CategoriesShowBtn from '../categoriesShowBtn'
import './index.css'
const GoToCatMain = () => {
    return (
        <div className="relative min-w-96 min-h-80  rounded-xl bg-black  before:content[''] before:size-16  before:absolute before:rounded-full before:-bottom-[0.1rem] before:right-[9.5rem] shadowCursor2">
            <CategoriesShowBtn />
        </div>
    )
}

export default GoToCatMain
