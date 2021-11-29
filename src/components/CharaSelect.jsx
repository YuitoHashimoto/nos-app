import { SelectBtn } from './icons/index'

const CharaSelect = () => {
    return (
        <main className={'charaSelect'}>
            <div className={'charaSelect__box'}>
                <p className={'charaSelect__box__txt'}>キャラクターを選ぼう</p>
                <div className={'selectArea'}>
                    <div className={'selectArea__btn'}>
                        <input type="radio" name="race" id="human" />
                        <label htmlFor="human">人型</label>
                    </div>
                    <div className={'selectArea__btn'}>
                        <input type="radio" name="race" id="animal" />
                        <label htmlFor="animal">その他</label>
                    </div>
                </div>
            </div>
            <div className={'btnArea'}>
                <SelectBtn />
            </div>
        </main>
    )
}

export default CharaSelect;