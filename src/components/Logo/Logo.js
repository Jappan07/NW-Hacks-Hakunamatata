import React from "react"
import companyLogo from "../../assets/logo.png"
import classes from "./Logo.module.css"

const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={companyLogo} alt="logo" />
            {/* <h1>company name</h1> */}
        </div>
    )
}

export default logo