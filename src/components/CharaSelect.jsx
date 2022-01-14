import { SelectBtn } from './icons/index'
import { useNavigate } from 'react-router-dom';


const CharaSelect = () => {
    const navigate = useNavigate();

    const nextPage = () => {
        navigate({
            pathname: '/characomp'
        })
    }


    return (
        <main className={'charaSelect'}>
            <div className={'charaSelect__box'}>
                <p className={'charaSelect__box__txt'}>キャラクターを選ぼう</p>
                <div className={'selectArea'}>
                    <div className={'selectArea__btn'}>
                        <input type="radio" name="race" id="human" />
                        <label className={'humans'} htmlFor="human">人型</label>
                    </div>
                    <div className={'selectArea__btn'}>
                        <input type="radio" name="race" id="animal" />
                        <label className={'animals'}  htmlFor="animal">その他</label>
                    </div>
                </div>
            </div>
            <div className={'btnArea'}>
                <SelectBtn onClick={nextPage} />
            </div>
        </main>
    )
}

export default CharaSelect;