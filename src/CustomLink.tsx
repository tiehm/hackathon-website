import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

type Props = {
    to: string
    children: React.ReactNode
    className: string
    onClick?: () => any
}

// adapted from
// https://stackblitz.com/github/remix-run/react-router/tree/main/examples/custom-link?file=src/App.tsx
export function CustomLink ({to, children, className, onClick}: Props) {

    let resolved = useResolvedPath(to);
    let match = useMatch({path: resolved.pathname, end: true});

    return (<div>
            <Link
                onClick={onClick ? onClick : undefined}
                to={to}
                className={className + ' ' + (match ? 'border-b-2 border-blue-11 text-blue-12' : '')}
            >
                {children}
            </Link>
        </div>);


}
