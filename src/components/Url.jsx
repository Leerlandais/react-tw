
import React from "react"

export default function Url() {
    const queryParameters = new URLSearchParams(window.location.search)
    const user = queryParameters.get("user");
    console.log('user is :'+user);
    if (user) {
    return (
       <p>Bonjour { user }</p>
    )
    }
}