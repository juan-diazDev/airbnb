import './styles.scss'

function Signinform () {


    return (
    <body>
        <section>
            <div className="signin__container">
                <div className="signin">
                <header className="signin_headerbox">
                    <h2>Sign up</h2>
                </header>
                <div action="" className="signin__form">
                    <input className="signin__namebox" type="text" name="names" placeholder="First name" />
                    <input className="signin__lastnamebox" type="text" name="lastname" placeholder="Last name" />
                    <p className="signin__helptext">Make sure it matches the name on your government ID.</p>
                    <input className="signin__textbox" type="date" name="birthdate" placeholder="Birthdate" />
                    <p className="signin__helptext">To sign up, you need to be at least 18. Your birthday won't be shared with other people who use Airbnb.</p>
                    <input className="signin__textbox" type="email" name="email" placeholder="Email" />
                    <p className="signin__helptext">We'll email you trip confirmations and receipts.</p>
                    <input className="signin__textbox" type="password" name="password" placeholder="Password"/>
                    <button className="signin__btn"><b>Agree and continue</b></button>
                    <p className="signin_final">Airbnb will send you members-only deals, inspiration, marketing emails, and push notifications. You can opt out of receiving these at any time in your account settings or directly from the marketing notification.
                    </p>
                    <div className="signin__checkbox">
                        <input  type="checkbox" id="radio1"/>
                        <label for="radio1">I don't want to receive marketing messages from Airbnb.</label>
                    </div>
                </div>
                </div>
            </div>
        </section >
    </body>

    )
}

export default Signinform

