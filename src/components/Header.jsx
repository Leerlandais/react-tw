
export default function Header(props) {
    return (
        <h1 className="text-4xl font-bold leading-tight text-gray-900 dark:text-white text-center pt-20">
            This is the {props.name} page!
        </h1>
    )
}