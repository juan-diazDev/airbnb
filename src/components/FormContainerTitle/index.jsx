import './styles.scss'

const FormContainerTitle = () =>{
    return (
        <div>
        <div className="form__container">
            <div className="container__question">
                <h1 className="question__title">
                    Let's give your place a name
                </h1>
            </div>
            <div className="container__options">
                <div className="option__offertitle">
                    <h2 className="offertitle">Create your title</h2>
                    <textarea className="offertitle__text"placeholder="cheerful 3 bedrooms house with pool" rows="3"></textarea>
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

export default FormContainerTitle;