"use client"
import { useEffect } from "react";

export default function EnquirePop() {
    useEffect(() =>  {
        const inputBoxes = document.querySelectorAll('.form-control')
        inputBoxes.forEach(inputBox => {
            inputBox.addEventListener('focus', function() {
                this.closest('.form-group')?.classList.add('active')
                this.classList.add('valid')
            })
        })

        return () => {
            inputBoxes.forEach(inputBox => {
                inputBox.removeEventListener('focus', function() {
                    this.closest('.form-group')?.classList.add('active')
                    this.classList.add('valid')
                })
            })
        }
    }, [])

    const closePop = () => {
        document.querySelector('.enquire-pop').classList.remove('is-open')
        document.querySelector('.overlay').classList.remove('is-open')
        document.querySelector('body').classList.remove('overflow-hidden')
    }
    return (
        <div className="model enquire-pop">
            <button className="close" onClick={closePop}><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
            <div className="model-body">
                <div className="title">
                    <h4>Enquire Now</h4>
                    <p>Waiting for your queries</p>
                </div>
                <div className="form form-grid">
                <div className="form-group">
                    <input type="text" className="form-control" />
                    <label htmlFor="">Name</label>
                </div>
                <div className="form-group">
                    <input type="tel" className="form-control" />
                    <label htmlFor="">Phone</label>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" />
                    <label htmlFor="">Email</label>
                </div>
                <div className="form-group">
                    <textarea name="" id="" className="form-control"></textarea>
                    <label htmlFor="">Message</label>
                </div>
                <div className="sbmt-grp text-center full">
                    <a href="thanks.html" className="btn black">SUBMIT</a>
                </div>
            </div>
            </div>
        </div>
    )
}