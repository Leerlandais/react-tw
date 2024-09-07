
import { Link as RouterLink } from 'react-router-dom';

function Link({ linkTo, linkName }) {
    return <RouterLink className="mx-8 text-xl text-" to={linkTo}>{linkName}</RouterLink>;
}

export default Link;