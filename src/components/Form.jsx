import {useState, useEffect} from 'react'

export default function Form(props) {
    return(

        <div className="w-1/6 mx-auto mt-8 text-center border-2 border-cyan-500 rounded-xl p-10">
            <form action="/form" method="">
                <h3 className="text-xl font-bold pb-4" id="loginFormHeader">Login</h3>
                <div>
                    <label className="text-gray-600 font-bold inline-block pb-2" for="userLoginName" id="loginFormUser">Name :</label>
                    <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="text" name="userLoginName" id="userName" required />
                </div>
                <div>
                    <label className="text-gray-600 font-bold inline-block pb-2" for="userLoginPwd" id="loginFormPwd">Password :</label>
                    <input className="border border-gray-400 focus:outline-slate-400 rounded-md w-full shadow-sm px-5 py-2" type="password" name="userLoginPwd" id="userLoginPwd" required />
                </div>
                <div>
                    <button type="submit" className="bg-[#4F46E5] w-auto mt-3 p-2 rounded-md text-white font-bold cursor-pointer hover:bg-[#181196]">Submit</button>
                </div>
            </form>

        </div>

)
}

