import { SelectBtn, CancelBtn } from './icons/index'


const CharaComp = () => {
     return (
         <main className={'charaComp'}>
            <div className={'charaComp__box'}>
                <p className='charaComp__box__txt'>決定する?</p>
                <div className={'charaComp__box__chara'}>
                    <div className={'charaComp__box__chara__content'}>
                        <p>アホボケカス</p>
                    </div>
                </div>
            </div>
            <div className={'btnArea'}>
                <SelectBtn />
                <CancelBtn />
            </div>
         </main>
     )
}

export default CharaComp;