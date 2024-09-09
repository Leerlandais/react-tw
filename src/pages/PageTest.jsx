import Element from "../components/Element";
import Url from "../components/Url";

export default function PageTest() {
    return (
        <>
        <div className="text-center">
            <Element elem={"h1"} text={"Welcome to the Test page!"} className={"text-center text-4xl mt-10"} />
            <Element elem={"img"} src={"http://placehold.co/400x300"} alt={"Placeholder missing"} className="mx-auto my-12"/>
            <Element elem={"p"} text={"Isn't this fun?"} className={"text-center text-1xl underline"} />
            <Element elem={"a"} text={"Home"} href={"/"} className={"mt-5 text-blue-900 text-2xl underline"} />
        </div>
        <div className="text-center mt-12">
            <Url />
            <form action="">
            <Element elem={"label"} className="text-gray-600 font-bold inline-block pb-2" text={"Name :"} />
            <Element elem={'input'} className="border border-gray-400 focus:outline-slate-400 rounded-md w-36 shadow-sm ml-4 px-5 py-2"
                     type="text" name="userLoginName" id="userName" required />
            <div className="mt-5">
                <Element elem={"button"} text={"Send"} type={"submit"} className={"border-2 bg-amber-800 text-white text-sm py-2 px-2 ml-4 mr-2 mb-2 rounded-xl"} />
            </div>
        </form>
        </div>
        </>
    );
}