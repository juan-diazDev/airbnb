import './styles.scss'

function HeaderHostPlaceRegister () {

    return(
        <div>
            <div className="form__header">
                <div className="header__logo">
                    <img className="logo__img" src="images/airbnblogo.png"/>
                </div>
                <div className="header__buttons">
                    <button className="button">
                        Ask a Superhost            
                    </button>
                    <button className="button">
                        Help            
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeaderHostPlaceRegister;