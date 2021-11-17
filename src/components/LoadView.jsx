const LoadView = () => {
    return (
        <main className={'loading'}>
            <div className={'loading__imgs'}>
                <div className={'loading__imgs__content'}></div>
                <div className={'loading__imgs__content'}></div>
                <div className={'loading__imgs__content'}></div>
            </div>
            <div className={'loading__txt'}>
                <h1>Loading</h1>
            </div>
            <div className={'loading__imgs imgsBottom'}>
                <div className={'loading__imgs__content'}></div>
                <div className={'loading__imgs__content'}></div>
                <div className={'loading__imgs__content'}></div>
            </div>
        </main>
    )
}

export default LoadView;