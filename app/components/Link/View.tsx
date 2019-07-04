import * as React from "react";
import styled from "styled-components";
import slugify from "slugify";

const A = styled.a`
  text-decoration: none;
  color: inherit;
  ${props => props.fullWidth && "width: 100%;"};
  :hover {
    color: ${props => props.theme.colors.hoverTextColor} !important;
    > * {
      color: ${props => props.theme.colors.hoverTextColor} !important;
      > * {
        color: ${props => props.theme.colors.hoverTextColor} !important;
        > * {
          color: ${props => props.theme.colors.hoverTextColor} !important;
        }
      }
    }
  }
`;

class Link extends React.Component {
  handleClick = (e, url) => {
    if (
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      (e.nativeEvent && e.nativeEvent.which === 2)
    ) {
      // ignore click for new tab / new window behavior
      return;
    }
    e.preventDefault();
    e.stopPropagation();
    url.indexOf("https://") !== -1
      ? window.open(url, "_blank")
      : this.props.routeChangeAction(url);
    if (this.props.callback) {
      this.props.callback();
    }
  };

  render() {
    let url =
      this.props.as || this.props.href || this.props.children.props.href;
    const slug = this.props.toSlug
      ? slugify(this.props.toSlug, { lower: true })
      : null;
    if (slug) url += `/${slug}`;
    const { fullWidth } = this.props;

    if (this.props.useAnchorTag) {
      return (
        <A
          href={url}
          onClick={e => this.handleClick(e, url)}
          fullWidth={fullWidth}
        >
          {this.props.children}
        </A>
      );
    }
    return React.cloneElement(this.props.children, {
      onClick: e => this.handleClick(e, url),
    });
  }
}

export default Link;
export { Link };
