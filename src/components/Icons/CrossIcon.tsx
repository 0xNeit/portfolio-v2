// this code is borrowed from react-burger-menu package and rewritten for typescript
import React, { Component, CSSProperties, ReactNode } from 'react';

interface Props {
    crossClassName?: string;
    customIcon?: ReactNode;
    isOpen?: boolean;
    styles?: {
      bmCross?: CSSProperties;
      bmCrossButton?: CSSProperties;
    };
    className?: string;
    onClick?: () => void;
}

export default class CrossIcon extends Component<Props> {
    getCrossStyle(type: 'before' | 'after'): CSSProperties {
        if (type === 'before') {
            return {
              position: 'absolute',
              width: 3,
              height: 14,
              transform: 'rotate(45deg)',
            };
        } else if (type === 'after') {
            return {
              position: 'absolute',
              width: 3,
              height: 14,
              transform: 'rotate(-45deg)',
            };
        } else {
            // Handle invalid type values
            throw new Error(`Invalid type: ${type}`);
        }
    }

  render(): JSX.Element {
    let icon: ReactNode;
    let buttonWrapperStyle: CSSProperties = {
      position: 'absolute',
      width: 24,
      height: 24,
      right: 8,
      top: 8
    };
    let buttonStyle: CSSProperties = {
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      margin: 0,
      padding: 0,
      border: 'none',
      fontSize: 0,
      background: 'transparent',
      cursor: 'pointer'
    };

    if (this.props.customIcon) {
      let customIcon = this.props.customIcon as React.ReactElement;
      let extraProps: { className?: string; style?: CSSProperties } = {
        className: `bm-cross ${customIcon.props.className ||
          ''}`.trim(),
        style: {
          ...{ width: '100%', height: '100%' },
          ...this.props.styles?.bmCross
        }
      };
      icon = React.cloneElement(customIcon, extraProps);
    } else {
      icon = (
        <span style={{ position: 'absolute', top: '6px', right: '14px' }}>
          {['before', 'after'].map((i) => (
            <span
              key={i}
              className={`bm-cross ${this.props.crossClassName}`.trim()}
              style={{
                ...this.getCrossStyle('before' as 'before' | 'after'),
                ...this.props.styles?.bmCross
              }}
            />
          ))}
        </span>
      );
    }

    return (
      <div
        className={`bm-cross-button ${this.props.className}`.trim()}
        style={{
          ...buttonWrapperStyle,
          ...this.props.styles?.bmCrossButton
        }}
      >
        <button
          type="button"
          id="react-burger-cross-btn"
          onClick={this.props.onClick}
          style={buttonStyle}
          {...(!this.props.isOpen && { tabIndex: -1 })}
        >
          Close Menu
        </button>
        {icon}
      </div>
    );
  }
}
