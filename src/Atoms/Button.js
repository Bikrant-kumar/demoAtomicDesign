import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
    const {
       saveInputData,
       text
      } = props;

    return (
        <div>   
            <button 
                onClick={saveInputData}
                data-testid="submit"
             >{text}
            </button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    saveInputData:PropTypes.func.isRequired
}

export default Button