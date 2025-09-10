"use client";
import "@/styles/components/enquireform.css";
import { useEffect } from "react";

export default function EnquireForm({ className = "", buttonType = "" }) {
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
        <form action="" className={`form form-grid ${className}`}>
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
            <div className="btn-wrap full">
                <button className={`btn w-100 ${buttonType}`}>Submit</button>
            </div>
        </form>
    );
}