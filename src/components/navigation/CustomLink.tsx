import classNames from 'classnames';
import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

type Props = {
    // the path to which the Link should point to
    to: string
    // allowed content as children of the Link component
    children: React.ReactNode
    // class name string for custom styling applied to Link
    className?: string
    // optional callback which is called once Link is clicked
    onClick?: () => void
}

// CustomLink is embeds react-router's Link for enabling path based styling,
// such as giving the navigation Link another color if the link points to
// the currently active page.
// idea/code adapted from
// https://stackblitz.com/github/remix-run/react-router/tree/main/examples/custom-link?file=src/App.tsx
export function CustomLink ({to, children, className, onClick}: Props) {

    let path = useResolvedPath(to);
    // match contains information weather the current page matches the given
    // path
    let match = useMatch({path: path.pathname, end: true});

    return (<div>
        <Link
            onClick={onClick ? onClick : undefined}
            to={to}
            className={classNames(className,
                'cursor-pointer border-b-2 transition-all hover:text-blue-11',
                'hover:border-blue-11 hover:border-b-2',
                match ? 'border-blue-11 text-blue-12' : 'border-transparent')}
        >
            {children}
        </Link>
    </div>);

}
