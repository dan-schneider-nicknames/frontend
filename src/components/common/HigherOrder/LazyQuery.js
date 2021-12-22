import options from '../../../services/options'
import PropTypes from "prop-types"
import { useLazyQuery } from '@apollo/client';
import Loader from '../Loader';

export default function LazyQuery(props) {
    const { query, Component, errorMessage } = props
    const [lazyQuery, { data, loading, error }] = useLazyQuery(query, options);

    const callQuery = variables => lazyQuery({ variables })
    
    return (
        <div>
            <Component 
                query={callQuery} 
                data={data}
                loading={loading}
                error={error}
            />
            {loading && <Loader/>}
            {error && <p>{errorMessage || error.message}</p>}
        </div>
    )
}

LazyQuery.propTypes = {
    query: PropTypes.object.isRequired,
    Component: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
}