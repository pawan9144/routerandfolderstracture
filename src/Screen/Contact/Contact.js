import React from "react"
import { Input, Input2 } from "../../Components/Inputs"
import { useState } from "react";
import { isValidate, isfnvalidate } from "../../Utiles";

export const Contact = () => {
    const [fname, setfname] = useState("");
    const [fnameError, setfnameError] = useState("");


    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        email: ""
    });
    const [errors, setErrors] = useState({
        fName: "",
        lName: "",
        email: ""
    })

    const handleEmail = (value) => {
        let valid = isValidate(value);

        if (!valid) {
            setEmailError('enter valid email')
        } else {
            setEmailError("")
        }
        setEmail(value)
    }

    const handlefname = (value) => {
        let valid = isfnvalidate(value);

        if (!valid) {
            setfnameError('enter valid name')
        } else {
            setfnameError("")
        }
        setfname(value)
    }

    const handleInput = (value, key) => {
        switch (key) {
            case "fName":
                if (!value) {
                    setErrors({ ...formData, key: "Enter First name" })
                }
                else {
                    setErrors({ ...formData, [key]: "" })
                    setFormData({ ...formData, [key]: value })
                }
            case "lName":
                if (!value) {
                    setErrors({ ...formData, key: "Enter Last name" })
                }
                else {
                    setErrors({ ...formData, [key]: "" })
                    setFormData({ ...formData, [key]: value })
                }
            case "email":
                if (!value) {
                    setErrors({ ...formData, key: "Enter Email" })
                }
                else {
                    setErrors({ ...formData, [key]: "" })
                    setFormData({ ...formData, [key]: value })
                }

        }
    }


    return (
        <>
            <h1>Contact details</h1>
            <Input placeholder="name" label="name" type="text" value={formData.fName} handleInput={handleInput} key="fName" />
            <span>{errors.fName}</span>
            <br></br>
            <Input2 placeholder="email" label="email" type="text" value={formData.email} handleInput={handleInput} key="email" />
            

            <span>{errors.email}</span>
        </>
    )
}


