import './styles.scss'

const FormContainerDescriptionPlace = () =>{
    return (
    <div>
            <div className="form__container">
                <div className="container__question">
                    <h1 className="question__title">
                        Now, let's describe your place
                    </h1>
                </div>
                <div className="container__options">
                    <div className="option__offerdescription">
                        <h2 className="offerdescription">Create your description</h2>
                        <textarea className="offerdescription__text"placeholder="This place is the best in the world." rows="3"></textarea>
                    </div>
                    
                    <div className="container__button-step">
                        <button className="button__backstep">Back</button>
                        <button className="button__nextstep">Next</button>
                    </div>
                </div>
                
            </div>
    </div>
    )
}

export default FormContainerDescriptionPlace;