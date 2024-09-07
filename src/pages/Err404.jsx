import Link from "../components/Link";

export default function Err404() {
    return (
        <div>
            <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white text-center pt-20">
                Hmmm, I can't seem to find that page</h1>
            <div className="text-center text-xl text-green-700 pt-12">
                <Link linkTo="/" linkName="Home" />
            </div>
        </div>
    );
}