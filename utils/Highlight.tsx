'use client'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Highlight = ({ code }) => {
    return (
        <SyntaxHighlighter language="javascript" style={dark}>
            {code}
        </SyntaxHighlighter>
    );
};

export default Highlight;
