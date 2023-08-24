// this code is borrowed from react-burger-menu package and rewritten for typescript

import React, { Component, ReactNode, CSSProperties } from 'react';

interface Props {
    barClassName?: string;
    customIcon?: ReactNode;
    styles?: {
      bmBurgerButton?: CSSProperties;
      bmIcon?: CSSProperties;
      bmBurgerBars?: CSSProperties;
      bmBurgerBarsHover?: CSSProperties;
    };
    className?: string;
    onClick?: () => void;
    onIconHoverChange?: (params: { isMouseIn: boolean }) => void;
}

interface State {
    hover: boolean;
}

export default class BurgerIcon extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  getLineStyle(index: number): CSSProperties {
    return {
      position: 'absolute',
      height: '20%',
      left: 0,
      right: 0,
      top: 20 * (index * 2) + '%',
      opacity: this.state.hover ? 0.6 : 1,
      ...(this.state.hover && this.props.styles?.bmBurgerBarsHover)
    };
  }

  render(): JSX.Element {
    let icon: ReactNode;
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
        className: `bm-icon ${customIcon.props.className || ''}`.trim(),
        style: {
          ...{ width: '100%', height: '100%' },
          ...this.props.styles?.bmIcon
        }
      };
      icon = React.cloneElement(customIcon, extraProps);
    } else {
      icon = (
        <span>
          {[0, 1, 2].map(bar => (
            <span
              key={bar}
              className={`bm-burger-bars ${this.props.barClassName} ${
                this.state.hover ? 'bm-burger-bars-hover' : ''
              }`.trim()}
              style={{
                ...this.getLineStyle(bar),
                ...this.props.styles?.bmBurgerBars
              }}
            />
          ))}
        </span>
      );
    }

    return (
      <div
        className={`bm-burger-button ${this.props.className}`.trim()}
        style={{
          ...{ zIndex: 1000 },
          ...this.props.styles?.bmBurgerButton
        }}
      >
        <button
          type="button"
          id="react-burger-menu-btn"
          onClick={this.props.onClick}
          onMouseOver={() => {
            this.setState({ hover: true });
            if (this.props.onIconHoverChange) {
              this.props.onIconHoverChange({ isMouseIn: true });
            }
          }}
          onMouseOut={() => {
            this.setState({ hover: false });
            if (this.props.onIconHoverChange) {
              this.props.onIconHoverChange({ isMouseIn: false });
            }
          }}
          style={buttonStyle}
        >
          Open Menu
        </button>
        {icon}
      </div>
    );
  }
}
