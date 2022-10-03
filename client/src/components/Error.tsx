import React, {FC} from 'react';

interface ErrorProps {
    error: string;
}

const Error: FC<ErrorProps> = ({error}) => {
    return (
        <div className="flex-container">
            <h1>
                {error}
            </h1>
        </div>
    );
};

export default Error;