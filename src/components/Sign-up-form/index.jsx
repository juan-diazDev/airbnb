import './styles.scss'

function Signupform () {


    return (
    <body>
        <section>
            <div className="signup__container">
                <div className="signup">
                <header className="signup_headerbox">
                    <button className="signup__backbutton">
                    <span>˂</span>  
                    </button>
                    <h2>Sign up</h2>
                </header>
                <div action="" className="signup__form">
                    <input className="signup__namebox" type="text" name="names" placeholder="First name" />
                    <input className="signup__lastnamebox" type="text" name="lastname" placeholder="Last name" />
                    <p className="signup__helptext">Make sure it matches the name on your government ID.</p>
                    <input className="signup__textbox" type="date" name="birthdate" placeholder="Birthdate" />
                    <p className="signup__helptext">To sign up, you need to be at least 18. Your birthday won't be shared with other people who use Airbnb.</p>
                    <input className="signup__textbox" type="email" name="email" placeholder="Email" />
                    <p className="signup__helptext">We'll email you trip confirmations and receipts.</p>
                    <input className="signup__textbox" type="password" name="password" placeholder="Password"/>
                    <p className="signup__policies1">By selecting Agree and continue, I agree to Airbnb's <a className="signup__policies2" target="blank">Terms of Service</a>, 
                     <a className="signup__policies2" target="blank"> Payments Terms of Service</a>, <a className="signup__policies2" target="blank"> Nondiscrimination Policy</a> and <a className="signup__policies2" target="blank">Colombia Privacy Supplement</a>, and acknowledge the <a className="signup__policies2" target="blank">Privacy Policy.</a></p>
                    <button className="signup__btn"><b>Agree and continue</b></button>
                    <p className="signup__final">Airbnb will send you members-only deals, inspiration, marketing emails, and push notifications. You can opt out of receiving these at any time in your account settings or directly from the marketing notification.
                    </p>
                    <div className="signup__checkbox">
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

export default Signupform

