'use client';

import Markdown from "react-markdown";

const MarkdownWrapper = ({ README } : { README: string }) => {
    return (
        <div className='markdown'>
            <Markdown>{README}</Markdown>
        </div>
    )
}

export default MarkdownWrapper;