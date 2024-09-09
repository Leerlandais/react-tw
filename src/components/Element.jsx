import React from "react";
import PropTypes from "prop-types";
export default function Element({ elem, text, className, ...rest }) {
    return React.createElement(elem, { className, ...rest }, text);

}
    Element.propTypes = {
        elem: PropTypes.string.isRequired,
    }

  /*  Usage of Element:
        <Element type="Tagname (p, h3, img, etc" className='Code for CSS/BS/TW' text="Text" />
    */
