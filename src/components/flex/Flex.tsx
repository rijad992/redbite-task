import styled from 'styled-components';
import type * as CSS from 'csstype';

interface FlexProps {
  width?: CSS.Property.Width;
  flex?: CSS.Property.Flex;
  flexDirection?: CSS.Property.FlexDirection;
  overflow?: CSS.Property.Overflow;
  justifyContent?: CSS.Property.JustifyContent;
  alignItems?: CSS.Property.AlignItems;
  columnGap?: CSS.Property.ColumnGap;
  padding?: CSS.Property.Padding;
}
export const Flex = styled.div<FlexProps>`
  display: flex;
  flex: ${(props) => (props.flex ? props.flex : '0 1 auto')};
  flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'row')};
  overflow: ${(props) => (props.overflow ? props.overflow : 'visible')};
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'flex-start')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'flex-start')};
  column-gap: ${(props) => (props.columnGap ? props.columnGap : 0)};
  width: ${(props) => (props.width ? props.width : 'auto')};
  padding: ${(props) => (props.padding ? props.padding : 0)};
`;
