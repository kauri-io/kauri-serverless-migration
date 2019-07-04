import React from "react";
import styled from "styled-components";
import { branch, renderComponent } from "recompose";

const Message = styled.h4`
  display: block;
  text-align: center;
  width: 100%;
  color: red;
`;

interface IProps {
  data: {
    error: { message: string };
  };
}

export class ErrorMessage extends React.Component<IProps> {
  render() {
    const {
      data: {
        error: { message },
      },
    } = this.props;
    return process.env.config === "production" ? (
      <Message>Something went wrong.</Message>
    ) : (
      <Message>{message}</Message>
    );
  }
}

export default (component = ErrorMessage, propName = "data") =>
  branch(
    (props: any) => props[propName] && props[propName].error,
    renderComponent(component)
  );
