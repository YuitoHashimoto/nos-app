import { SelectBtn } from './icons/index'


const NewName = () => {
    return (
        <main className={'newName'}>
            <div className={'newName__box'}>
                <p className={'newName__box__txt'}>ゲームで使用する<br />名前を決めよう</p>
                <input type="text" className={'newName__box__input'} placeholder="名前を入力(8文字まで)" maxlength="8" />
            </div>
            <div className={'btnArea'}>
                <SelectBtn />
            </div>
        </main>
    )
}

export default NewName;