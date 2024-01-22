import React from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
    const prevBtns = document.querySelectorAll(".btn-prev");
    const nextBtns = document.querySelectorAll(".btn-next");
    const progress = document.getElementById("progress");
    const formSteps = document.querySelectorAll(".form-step");
    const progressSteps = document.querySelectorAll(".progress-step");

    let formStepsNum = 0;

    nextBtns.forEach((btnProgress) => {
        btnProgress.addEventListener("click", () => {
            formStepsNum++;
            updateFormSteps();
            updateProgressbar();
        });
    });

    prevBtns.forEach((btnProgress) => {
        btnProgress.addEventListener("click", () => {
            formStepsNum--;
            updateFormSteps();
            updateProgressbar();
        });
    });

    function updateFormSteps() {
        formSteps.forEach((formStep) => {
            formStep.classList.contains("form-step-active") &&
                formStep.classList.remove("form-step-active");
        });

        formSteps[formStepsNum].classList.add("form-step-active");
    }

    function updateProgressbar() {
        progressSteps.forEach((progressStep, idx) => {
            if (idx < formStepsNum + 1) {
                progressStep.classList.add("progress-step-active");
            } else {
                progressStep.classList.remove("progress-step-active");
            }
        });

        const progressActive = document.querySelectorAll(".progress-step-active");

        progress.style.width =
            ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
    }
    return (
        <div className='pt-24'>
            <form action="#" className="form">
                <h1 className="text-center">Form</h1>
                {/* Progress bar */}
                <div className="progressbar">
                    <div className="progress" id="progress"></div>
                    <div className="progress-step progress-step-active"
                        data-title="intro"></div>
                    <div className="progress-step" data-title="contact"></div>
                    <div className="progress-step" data-title="product order"></div>
                    <div className="progress-step" data-title="payment gateway"></div>
                    <div className="progress-step" data-title="product delivery"></div>
                </div>

                {/* Steps */}
                <div className="form-step form-step-active">
                    
                    <div className="input-group">
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" placeholder='Your Email' required />
                    </div>
                    <div className="input-group">
                        <label for="detail">Details</label>
                        <textarea className='details' name="detail" id="detail" cols="50" rows="4" placeholder='Your Details'></textarea>
                    </div>
                    <div className="">
                        <a href="#" className="btnProgress btn-next width-50 ml-auto">Next</a>
                    </div>
                </div>
                <div className="form-step">
                    <div className="input-group">
                        <label for="phone">Phone</label>
                        <input type="text" name="phone" id="phone" />
                    </div>
                    <div className="input-group">
                        <label for="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="btns-group">
                        <a href="#" className="btnProgress btn-prev">Previous</a>
                        <a href="#" className="btnProgress btn-next">Next</a>
                    </div>
                </div>
                <div className="form-step">
                    <div className="input-group">
                        <label for="dob">Date of Birth</label>
                        <input type="date" name="dob" id="dob" />
                    </div>
                    <div className="input-group">
                        <label for="ID">National ID</label>
                        <input type="number" name="ID" id="ID" />
                    </div>
                    <div className="btns-group">
                        <a href="#" className="btnProgress btn-prev">Previous</a>
                        <a href="#" className="btnProgress btn-next">Next</a>
                    </div>
                </div>
                <div className="form-step">
                    <div className="input-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="input-group">
                        <label for="price">Price</label>
                        <input type="text" name="price" id="price"/>
                    </div>
                    <div className="btns-group">
                        <a href="#" className="btnProgress btn-prev">Previous</a>
                        <a href="#" className="btnProgress btn-next">Next</a>
                    </div>
                </div>
                <div className="form-step">
                    <div className="input-group">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div className="input-group">
                        <label for="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                        />
                    </div>
                    <div className="btns-group">
                        <a href="#" className="btnProgress btn-prev">Previous</a>
                        <input type="submit" value="Submit" className="btnProgress" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ProgressBar;