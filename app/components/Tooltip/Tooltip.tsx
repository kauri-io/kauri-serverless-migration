import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    z-index: 999;
    > .header {
      display: flex;
      height: 100%;
    }
    > *:not(.header) {
        opacity: 0;
    }

    &:hover {
        > * {
            opacity: 1;
            display: flex;
        }
    }
`;

const UpArrow = styled.div`
    width: 14px;
    height: 14px;
    transform: rotate(45deg);
    position: absolute;
    top: 74%;
    background: white;
    border-radius: 2px;
`;

const TooltipBody = styled.div`
    background: white;
    flex-direction: column;
    color: black;
    border-radius: 4px;
    transition: all 0.2s;
    position: absolute;
    top: 80%;
    display: none;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
`;

interface IProps {
    header?: any;
    children: any;
}

const Tooltip = (props: IProps) =>
  <Container>
    <div className='header'>{props.header}</div>
    <UpArrow />
    <TooltipBody className='tooltip-body'>
      {props.children}
    </TooltipBody>
  </Container>;

export default Tooltip;
