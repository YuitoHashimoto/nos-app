import { SelectBtn } from './icons/index'
import { useNavigate } from 'react-router-dom';

const NewName = () => {
    const navigate = useNavigate();

    const nextPage = () => {
        navigate({
            pathname: '/charaselect'
        })
    }

    return (
        <main className={'newName'}>
            <div className={'newName__box'}>
                <p className={'newName__box__txt'}>ゲームで使用する<br />名前を決めよう</p>
                <input type="text" className={'newName__box__input'} placeholder="名前を入力(8文字まで)" maxLength="8" />
            </div>
            <div className={'btnArea'}>
                <SelectBtn onClick={nextPage} />
            </div>
        </main>
    )
}

export default NewName;