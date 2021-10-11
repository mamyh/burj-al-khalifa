import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    const style = { display: 'fex', justifyContent: 'center', alignItems: 'center' }
    return (
        <div style={{ margin: '150px', textAlign: 'center' }}>
            <div style={style} >
                <div>
                    <h1>404</h1>
                    <p>Page is not found</p>
                    <Link to="/home">Home</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;
