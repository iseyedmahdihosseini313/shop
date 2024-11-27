import clsx from 'clsx'
import CategoriesTitleShow from '../common/categoriesTitle'
import FadeText from '../../commons/fadeText'
import GoToCatMain from '../common/goToCatMain'

const GotoCatContainer = () => {
    const text =
        'Explore our curated collection of products across various categories. From everyday essentials to luxury items, discover what you need in our carefully organized sections.'
    return (
        <div
            className={clsx(
                'min-w-[100vw] min-h-screen flex flex-col justify-start gap-3 items-center p-5  overflow-x-hidden'
            )}
        >
            <CategoriesTitleShow />
            <FadeText text={text} delay={400} />
            <GoToCatMain />
        </div>
    )
}
export default GotoCatContainer
