import styled from "styled-components";
import theme from "../../lib/theme-config";

export interface ITagName {
  color: string;
  hiddenTags?: boolean;
  resourceType?: string; // card
  orientation?: string;
}

const TagName = styled.div<ITagName>`
  font-weight: ${props =>
    props.resourceType === "card" ? theme.fontWeight[3] : theme.fontWeight[2]};
  font-size: ${props =>
    props.resourceType === "card" ? theme.fontSizes[0] : theme.fontSizes[1]}px;
  text-transform: uppercase;
  color: ${props => props.color};
  margin-top: 1px;
  color: ${props => theme.colors[props.color]};
`;

export default TagName;
