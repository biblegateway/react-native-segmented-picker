import React, { ReactElement } from 'react';
import { Text, TextStyle, View } from 'react-native';
import styles from './SelectionMarkerStyles';

interface Props {
  backgroundColor: string;
  borderColor?: string;
  selectionSeparator?: ReactElement<any>;
  selectionBorder?: TextStyle,
}

/**
 * Horizontal bar used to indicate the current picker selections.
 */
export default ({
  backgroundColor,
  borderColor,
  selectionSeparator,
  selectionBorder,
}: Props): ReactElement => (
  <View style={styles.selectionMarkerContainer}>
    <View
      style={[
        styles.selectionMarkerBorder,
        { backgroundColor: borderColor },
      ]}
    />
    <View style={[styles.selectionMarker, { backgroundColor: backgroundColor }, selectionBorder]} >{selectionSeparator}</View>
    <View
      style={[
        styles.selectionMarkerBorder,
        { backgroundColor: borderColor },
      ]}
    />
  </View>
);
