
export default function Button(props) {
    return (
        <button
            className="border border-2 bg-blue-500 text-white text-sm py-2 px-2 ml-4 mr-2 mb-2 rounded-xl"
            onClick={props.onClick}
        >
            {props.btnName}
        </button>
    );
}
