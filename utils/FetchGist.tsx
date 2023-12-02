import React, { useState, useEffect } from 'react';
import Highlight from './Highlight';

const FetchGist = ({ gistUrl }) => {
    const [code, setCode] = useState('');

    useEffect(() => {
        fetch(gistUrl)
            .then(response => response.text())
            .then(text => setCode(text))
            .catch(error => console.error('Error fetching Gist:', error));
    }, [gistUrl]);

    return <Highlight code={code} />;
};

export default FetchGist;
