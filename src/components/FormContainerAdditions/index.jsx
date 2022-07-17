import './styles.scss'

const FormContainerAdditions= () => {

    return (
        <div>
            <div className="form__container">
                <div className="container__question">
                    <h1 className="question__title">
                        Let guest know what your place has to offer
                    </h1>
                </div>
                <div className="container__aditions">
                    <div className='addition__question'>
                        <h2 className='question__addtitle'>
                            How about these guest favorites?
                        </h2>
                    </div>
                    
                    <div className="add_included-options">
                        <button className="option__card3">
                            <h2 className="option__card-title3">
                                Wi-fi
                            </h2>
                            <div className='option__card-adition'>
                                <img className="adition-icon" src=" https://img.freepik.com/premium-vector/wifi-symbol-exclamation-mark-icon-jamming-wireless-internet-signal-wifi-error-failure-wifi-icon-disconnected-wireless-internet-signal-vector-illustration-isolated-white-background_192280-935.jpg?w=2000"/>
                            </div>
                        </button>
                        <button className="option__card3">
                            <h2 className="option__card-title3">
                                Air conditioner
                            </h2>
                            <div className='option__card-adition'>
                                <img className="adition-icon" src=" https://img.freepik.com/premium-vector/wifi-symbol-exclamation-mark-icon-jamming-wireless-internet-signal-wifi-error-failure-wifi-icon-disconnected-wireless-internet-signal-vector-illustration-isolated-white-background_192280-935.jpg?w=2000"/>
                            </div>
                        </button>
                        <button className="option__card3">
                            <h2 className="option__card-title3">
                                Bedrooms
                            </h2>
                            <div className='option__card-adition'>
                                <img className="adition-icon" src=" https://img.freepik.com/premium-vector/wifi-symbol-exclamation-mark-icon-jamming-wireless-internet-signal-wifi-error-failure-wifi-icon-disconnected-wireless-internet-signal-vector-illustration-isolated-white-background_192280-935.jpg?w=2000"/>
                            </div>
                        </button>
                        <button className="option__card3">
                            <h2 className="option__card-title3">
                                Free Parking of premisses
                            </h2>
                            <div className='option__card-adition'>
                                <img className="adition-icon" src=" https://img.freepik.com/premium-vector/wifi-symbol-exclamation-mark-icon-jamming-wireless-internet-signal-wifi-error-failure-wifi-icon-disconnected-wireless-internet-signal-vector-illustration-isolated-white-background_192280-935.jpg?w=2000"/>
                            </div>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FormContainerAdditions;