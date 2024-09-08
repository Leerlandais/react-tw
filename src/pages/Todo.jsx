import { useState, useEffect } from "react"
import List from "../components/List";
import Header from "../components/Header";

export default function Todo() {

    function GetList () {
        const checkLocal = localStorage.getItem("checkLocal");
        if (!checkLocal) {
            return (
                <div className="text-center pt-12">
                There are no items in the list. <br /> Yet!
                </div>
            )
        } else {
            return (
                <div className="text-center pt-12">
                    Isn't this fun
                </div>
            )
        }
    }
    return (
        <>
            <Header name="ToDo List" />
            <GetList />
            <List />
        </>
    )
}