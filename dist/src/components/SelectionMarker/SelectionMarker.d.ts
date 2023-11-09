import React, { ReactElement } from 'react';
import { TextStyle } from 'react-native';
interface Props {
    backgroundColor: string;
    borderColor?: string;
    selectionSeparator?: ReactElement<any>;
    selectionBorder?: TextStyle;
}
declare const _default: ({ backgroundColor, borderColor, selectionSeparator, selectionBorder, }: Props) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
/**
 * Horizontal bar used to indicate the current picker selections.
 */
export default _default;
