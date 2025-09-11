"use client";

import React, { useEffect } from 'react'
import "@/styles/components/enquireform.css";

const FormSec = () => {

    useEffect(() => {
        const inputBoxes = document.querySelectorAll(".form-control");
        const handleFocus = function () {
            this.closest(".form-group")?.classList.add("active");
            this.classList.add("valid");
        };
        const handleBlur = function () {
            if (!this.value.trim()) {
                this.closest(".form-group")?.classList.remove("active");
                this.classList.remove("valid");
            }
        };
        inputBoxes.forEach((inputBox) => {
            inputBox.addEventListener("focus", handleFocus);
            inputBox.addEventListener("blur", handleBlur);
        });
        return () => {
            inputBoxes.forEach((inputBox) => {
                inputBox.removeEventListener("focus", handleFocus);
                inputBox.removeEventListener("blur", handleBlur);
            });
        };
    }, []);

    return (
        <>
            <section>
                <div className="contact-secC">
                    <div className="heading">
                        <h2>Your Ideas Deserve a Response</h2>
                    </div>
                    {/* <EnquireForm /> */}
                    <form action="" className="form form-grid">
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" id="name" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" className="form-control" id="email" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-group">
                            <input type="tel" name="phone" className="form-control" id="phone" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="form-group">
                            <input type="text" name="country" className="form-control" id="country" />
                            <label htmlFor="country">Country</label>
                        </div>
                        <div className="form-group full">
                            <textarea name="message" id="message" className="form-control"></textarea>
                            <label htmlFor="message">Message</label>
                        </div>
                        <div className="submit-btn full">
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default FormSec