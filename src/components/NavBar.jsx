import Link from "./Link";
export default function NavBar() {
return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-screen">
        <ul className="navbar-nav text-center pt-8 flex justify-center text-blue-900">
            <Link linkTo="/" linkName="Home"/>
            <Link linkTo="/todo" linkName="ToDo List"/>

        </ul>
    </nav>
)
}