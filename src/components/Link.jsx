
import { Link as RouterLink } from 'react-router-dom';

function Link({ linkTo, linkName }) {
    return <RouterLink className={"myLink"} to={linkTo}>{linkName}</RouterLink>;
}

export default Link;