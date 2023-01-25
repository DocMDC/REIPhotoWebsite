import React, {useState} from "react"
import OrderFormCSS from "../css/OrderForm.module.css"
import Timeline from "./Timeline"

export default function OrderForm() {
    const [formData, setFormData] = useState({
        isNew: false,
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        beds: "",
        baths: "",
        price: "",
        preferredDate: new Date(),
        alternativeDate: new Date(),
        notes: "",
    })

    function updateForm(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function submitForm(event) {
        event.preventDefault()
        setFormData({
            isNew: false,
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            city: "",
            state: "",
            beds: "",
            baths: "",
            price: "",
            preferredDate: new Date(),
            alternativeDate: new Date(),
            notes: ""
        })
    }
    
    return (
        <div>
            <div className={OrderFormCSS.title__container}>
                <h1>ORDER</h1>
                <div className={OrderFormCSS.line}></div>
            </div>
            <Timeline />
            <div className={OrderFormCSS.form__container}>
                <form onSubmit={submitForm}>
                    <div className={OrderFormCSS.form__info}>
                        <h2>Your Information</h2>
                        <div className={OrderFormCSS.checkboxes__container}>
                            <label htmlFor="new-client" className={OrderFormCSS.client}>New Client?</label>
                            <input 
                                type="checkbox" 
                                id="new-client"
                                name="isNew"
                                checked={formData.isNew}
                                onChange={updateForm}
                                className={OrderFormCSS.client__checkbox}
                            />
                        </div>
                        <div className={OrderFormCSS.form__info__top}>
                            <input 
                                type="text" 
                                placeholder="First Name" 
                                name="firstName"
                                value={formData.firstName}
                                onChange={updateForm}
                                className={OrderFormCSS.first}
                            />
                            <input 
                                type="text" 
                                placeholder="Last Name" 
                                name="lastName"
                                value={formData.lastName}
                                onChange={updateForm}
                                className={OrderFormCSS.last}
                            />
                        </div>
                        <div className={OrderFormCSS.form__info__bottom}>
                            <input 
                                type="text" 
                                placeholder="Email" 
                                name="email"
                                value={formData.email}
                                onChange={updateForm}
                                className={OrderFormCSS.email}
                            />
                            <input 
                                type="text" 
                                placeholder="Phone" 
                                name="phone"
                                value={formData.phone}
                                onChange={updateForm}
                                className={OrderFormCSS.phone}
                            />
                        </div>
                    </div>
                    <div className={OrderFormCSS.form__listing}>
                        <h2>Your Listing</h2>
                        <div className={OrderFormCSS.form__listing__top}>
                            <input 
                                type="text" 
                                placeholder="Listing Address" 
                                name="address"
                                value={formData.address}
                                onChange={updateForm}
                                className={OrderFormCSS.address}
                            />
                            <input 
                                type="text" 
                                placeholder="City"
                                name="city" 
                                value={formData.city}
                                onChange={updateForm}
                                className={OrderFormCSS.city}
                            />
                        </div>

                        <div className={OrderFormCSS.form__listing__middle}>
                            <input 
                                type="text" 
                                placeholder="State"
                                name="state" 
                                value={formData.state}
                                onChange={updateForm}
                                className={OrderFormCSS.state}
                            />
                            <input 
                                type="text" 
                                placeholder="Number of bedrooms"
                                name="beds" 
                                value={formData.beds}
                                onChange={updateForm}
                                className={OrderFormCSS.beds}
                            />
                        </div>

                        <div className={OrderFormCSS.form__listing__bottom}>
                            <input 
                                type="text" 
                                placeholder="Number of bathrooms"
                                name="baths" 
                                value={formData.baths}
                                onChange={updateForm}
                                className={OrderFormCSS.baths}
                            />
                            <input 
                                type="text" 
                                placeholder="Listing price $$$"
                                name="price" 
                                value={formData.price}
                                onChange={updateForm}
                                className={OrderFormCSS.price}
                            />
                        </div>
                    </div>
                    <div className={OrderFormCSS.form__schedule}>
                        <h2>Schedule</h2>
                        <div className={OrderFormCSS.form__content}>
                            <div className={OrderFormCSS.schedule__dates}>
                                <label htmlFor="preferredDate">Preferred Date</label>
                                <input 
                                    type="date" 
                                    id="preferredDate"
                                    name="preferredDate"
                                    value={formData.preferredDate}
                                    onChange={updateForm}
                                    className={OrderFormCSS.preferredDate}
                                />
                                <label htmlFor="alternativeDate">Alternative Date</label>
                                <input 
                                    type="date" 
                                    name="alternativeDate"
                                    id="alternativeDate"
                                    value={formData.alternativeDate}
                                    onChange={updateForm}
                                    className={OrderFormCSS.alternativeDate}
                                />
                            </div>

                            <div className={OrderFormCSS.schedule__notes}>
                                <textarea 
                                    name="notes" 
                                    value={formData.notes}
                                    placeholder="Any additional information (eg, waterfront property, multifamily house, home can only be accessed after a certain time, etc.)"
                                    onChange={updateForm}
                                    cols="30" 
                                    rows="10">
                                    className={OrderFormCSS.notes}
                                </textarea>
                            </div>
                            
                        </div>
                        
                    </div>
                        <div className={OrderFormCSS.button__container}>
                            <button>Submit Order</button>
                        </div>
                </form>
            </div>
        </div>
    )
}