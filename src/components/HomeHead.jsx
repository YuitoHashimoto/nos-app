import { Rank, AlertIcon, MoneyIcon, TicketIcon } from './icons/index'


const HomeHead = () => {
    return(
        <div className="homeHead">
            <div className="homeHead__content">
                <div className="homeHead__content__xpBar">
                    <div className='xpTxt'>
                        <p>あと1000</p>
                    </div>
                    <div className="bar">
                        <div className="bar__circle">
                            <Rank className='bar__circle__rank' />
                            <p className="bar__circle__num">1</p>
                        </div>
                        <div className='bar__box'>
                            <div className='bar__box__xp'></div>
                        </div>
                    </div>
                </div>
                <div className="homeHead__content__money">
                    <div className='money'>
                         <MoneyIcon />
                        <p>10000</p>
                    </div>
                    <div className='ticket'>
                        <TicketIcon />
                        <p>1</p>
                    </div>
                </div>
                <div className="homeHead__content__alert">
                    <AlertIcon />
                </div>
            </div>
        </div>
    )
}
export default HomeHead; 