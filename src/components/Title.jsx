import { StartBtn, TitleLogo } from './icons/index'
import { useNavigate } from 'react-router-dom';


const Title = () => {
    const navigate = useNavigate();

    const nextPage = () => {
        navigate({
            pathname: '/name'
        })
    }

    return (
        <main className={'title'}>
            <div className={'title__logo'}>
                <p className={'title__logo__txt'}>アイテム奪い合いクイズゲーム</p>
                <TitleLogo />
            </div>
            <StartBtn onClick={nextPage} />
        </main>
    )
}

export default Title;