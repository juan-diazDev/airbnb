import './styles.scss'

const FormContainerFeatures = () => {

    return (
        <div>
            <div className="form__container">
                <div className="container__question">
                    <h1 className="question__title">
                        How many guest would you like to welcome?
                    </h1>
                </div>
                <div className="container__options">
                    <div className="option__card2">
                        <h2 className="option__card-title2">
                            Guest
                        </h2>
                        <div className='option__card-features'>
                            <button className="card_button-increase">-</button>
                            <p className='card_number-guest'>0</p>
                            <button className="card_button-decrease">+</button>
                        </div>
                    </div>
                    <div className="option__card2">
                        <h2 className="option__card-title2">
                            Beds
                        </h2>
                        <div className='option__card-features'>
                            <button className="card_button-increase">-</button>
                            <p className='card_number-beds'>0</p>
                            <button className="card_button-decrease">+</button>
                        </div>
                    </div>
                    <div className="option__card2">
                        <h2 className="option__card-title2">
                            Bedrooms
                        </h2>
                        <div className='option__card-features'>
                            <button className="card_button-increase">-</button>
                            <p className='card_number-bedrooms'>0</p>
                            <button className="card_button-decrease">+</button>
                        </div>
                    </div>
                    <div className="option__card2">
                        <h2 className="option__card-title2">
                            Bathrooms
                        </h2>
                        <div className='option__card-features'>
                            <button className="card_button-increase">-</button>
                            <p className='card_number-bathrooms'>0</p>
                            <button className="card_button-decrease">+</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FormContainerFeatures;