import clsx from 'clsx'
import { GotoCatContainer } from '../../components'
const Home = () => {
    const homePageStyle = {
        container: 'min-w-[100vw] min-h-[100vh]',
    }
    return (
        <div className={clsx(homePageStyle.container)}>
            <GotoCatContainer />
        </div>
    )
}
export default Home
