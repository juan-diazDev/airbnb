import './styles.scss'

const FormContainerCapacity = () =>{
    return (
        <div>
            <div class="form__container ">
                <div class="container__question ">
                    <h1 class="question__title ">
                        What kind of space will your guest have?
                    </h1>
                </div>
                <div class="container__options">
                    <button class="option">An entire place.</button>
                    <button class="option">A private room.</button>
                    <button class="option">A shared room.</button>
                    <div className="container__button-step">
                        <button className="button__backstep">Back</button>
                        <button className="button__nextstep">Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormContainerCapacity;