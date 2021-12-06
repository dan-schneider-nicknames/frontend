import React from "react"
import PropTypes from "prop-types"

export default function Error(props) {
    const { error, errorType } = props
    
    if (error.length === 0) return null
    return (
        <div>
            {errorType}: {error}
        </div>
    )
}
Error.propTypes = {
    error: PropTypes.string.isRequired,
    errorType: PropTypes.string.isRequired
}
