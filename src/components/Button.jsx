
export default function Button(props) {
    return (
        <button
            className={`border-2 ${props.bgColor} text-white text-sm py-2 px-2 ml-4 mr-2 mb-2 rounded-xl`}
            onClick={props.onClick}
        >
            {props.btnName}
        </button>
    );
}
