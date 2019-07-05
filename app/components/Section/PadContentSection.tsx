import styled, { css } from "styled-components";

const padChildrenContentCSS = css`
  > :first-child {
    ${props => props.theme.padContent};
  }
`;

const PadContentSection = styled.section<
  { background?: string; padChild?: boolean }>`
  ${props => (props.padChild ? padChildrenContentCSS : props.theme.padContent)};
  background: ${props => props.theme.colors[props.background as string]};
`;

export default PadContentSection;
