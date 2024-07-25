import { Pressable, Text, useWindowDimensions } from 'react-native';
import { styles, colors } from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  blackText = false,
  onPress,
}: Props) => {
  const { width } = useWindowDimensions();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        ...styles.button,
        opacity: pressed ? 0.8 : 1,
        backgroundColor: color,
        height: width / 4 - 20,
        width: doubleSize ? width / 2 - 20 : width / 4 - 20,
      })}
    >
      <Text
        style={{
          ...styles.buttonText,
          color: blackText ? 'black' : 'white',
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};
