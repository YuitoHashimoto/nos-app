import { StartBtn, TitleLogo } from './icons/index'

import { useNavigate } from 'react-router-dom';
import firebase from '../firebase'

const Title = () => {
    const navigate = useNavigate();

    const nextPage = () => {
        firebase.auth().onAuthStateChanged(async (user) => {
            // 未ログイン時
            if (!user) {
                firebase.auth().signInAnonymously();
            }
            // ログイン時
            else {
                // TODO: ログインしているときにやる処理...
                console.log(user);
                navigate({
                    pathname: '/name'
                })
            }
        });
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