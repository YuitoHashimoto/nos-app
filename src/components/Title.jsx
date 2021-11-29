import { StartBtn, TitleLogo } from './icons/index'

const Title = () => {
    return (
        <main className={'title'}>
            <div className={'title__logo'}>
                <p className={'title__logo__txt'}>アイテム奪い合いクイズゲーム</p>
                <TitleLogo />
            </div>
            <StartBtn />
        </main>
    )
}

export default Title;