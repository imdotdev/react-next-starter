import React from 'react';
import cx from 'classnames';

import './style.less';

interface IProps {
  icon: any;
  //
  className?: string;
  style?: React.CSSProperties;
  alwaysDarkMode?: boolean;
}

export const HugeIcon: React.FC<IProps> = (props) => (
    <div
      className={cx(
        'comp-wrapper',
        props.className,
      )}
      style={props.style}
    >
      {props.icon}
    </div>
  );
