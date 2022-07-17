import './styles.scss'

const FormContainerAdress = () => {
    
    return(
    <div>
        <div className="form__container">
        <div className="container__question">
            <h2 className="question__title">Confirm your adress</h2>
        </div>
            <form className="container__formtable">
                <input className="form__text1" placeholder="Street" type="text "></input>
                <input className="form__text" placeholder="Apt, suite,etc.(Optional)" type="text "></input>
                <input className="form__text" placeholder="City" type="text"></input>
                <input className="form__text" placeholder="State(Optional)" type="text "></input>
                <input className="form__text" placeholder="Zip code(optional) " type="text "></input>
                <select className="form__countries">
                    <option className="country">Country</option>
                    <option className="country">Colombia</option>
                    <option className="country">Ecuador</option>
                    <option className="country">Chile</option>
                </select>
            </form>
        </div>
    </div>
    )

}

export default FormContainerAdress;
