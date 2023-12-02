import React, { useState, useEffect } from 'react';
import Highlight from './Highlight';

interface FetchGistProps {
    gistUrl: string;
}

const FetchGist: React.FC<FetchGistProps> = ({ gistUrl }) => {
    const [code, setCode] = useState<string>('');

    useEffect(() => {
        fetch(gistUrl)
            .then(response => response.text())
            .then(text => setCode(text))
            .catch(error => console.error('Error fetching Gist:', error));
    }, [gistUrl]);

    return <Highlight code={code} />;
};

export default FetchGist;
