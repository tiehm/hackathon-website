import classNames from 'classnames';
import React from 'react';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';

type Props = {
    // the path to which the Link should point to
    to: string
    // allowed content as children of the Link component
    children: React.ReactNode
    outerClassName?: string
    // class name string for custom styling applied to Link
    className?: string
    // optional callback which is called once Link is clicked
    onClick?: () => void
    id?: string
    // weather the link points to the join page (which has a different
    // background and thus needs some other styling)
    isJoinButton?: boolean
}

// CustomLink is embeds react-router's Link for enabling path based styling,
// such as giving the navigation Link another color if the link points to
// the currently active page.
// idea/code adapted from
// https://stackblitz.com/github/remix-run/react-router/tree/main/examples/custom-link?file=src/App.tsx
export function CustomLink({
  to,
  children,
  className,
  outerClassName,
  onClick,
  id,
  isJoinButton,
}: Props) {
  const path = useResolvedPath(to);
  // match contains information weather the current page matches the given
  // path
  const match = useMatch({path: path.pathname, end: true});

  // the style to apply if the link points to the currently active page
  const underlineStyle = isJoinButton ? 'border-blue-3' : 'border-blue-11';

  return (<div className={classNames(outerClassName,
      'flex justify-center items-center')}>
    <Link
      id={id}
      onClick={onClick ? onClick : undefined}
      to={to}
      className={classNames(
          'cursor-pointer transition-all',
          'flex justify-center items-center',
          isJoinButton ? 'hover:border-blue-3' : 'hover:border-blue-11',
          className,
          match ? underlineStyle + ' text-blue-12' : 'border-transparent')}
    >
      {children}
    </Link>
  </div>);
}
