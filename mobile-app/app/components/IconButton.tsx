import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import * as React from 'react'
import { StyleProp, TextStyle, TouchableOpacityProps } from 'react-native'
import { tailwind } from '@tailwind'
import { ThemedIcon, ThemedProps, ThemedText, ThemedTouchableOpacity } from './themed'

type IconType = 'MaterialCommunityIcons' | 'MaterialIcons'

interface IconButtonProps extends TouchableOpacityProps {
  iconName?: React.ComponentProps<typeof MaterialIcons>['name'] | React.ComponentProps<typeof MaterialCommunityIcons>['name']
  iconType?: IconType
  iconSize?: number
  iconLabel?: string
  disabled?: boolean
  disabledThemedProps?: ThemedProps
  themedProps?: ThemedProps
  textStyle?: StyleProp<TextStyle>
  textThemedProps?: ThemedProps
}

export function IconButton (props: IconButtonProps): JSX.Element {
  const {
    disabled = false
  } = props
  return (
    <ThemedTouchableOpacity
      light={tailwind({ 'border-dfxgray-300 bg-white': !disabled, 'border-gray-100 bg-gray-100': disabled })}
      dark={tailwind('border-dfxblue-900 bg-dfxblue-800')}
      {...disabled ? props.disabledThemedProps : props.themedProps}
      onPress={props.onPress}
      style={[tailwind('p-1 flex-row items-center border rounded'), props.style]}
      testID={props.testID}
      disabled={props.disabled}
    >
      {props.iconName !== undefined && props.iconType !== undefined &&
        <ThemedIcon
          light={tailwind({ 'text-primary-500': !disabled, 'text-dfxgray-300': disabled })}
          dark={tailwind({ 'text-dfxred-500': !disabled, 'text-dfxblue-900': disabled })}
          iconType={props.iconType}
          name={props.iconName}
          size={props.iconSize}
        />}

      {props.iconLabel !== undefined &&
        <ThemedText
          light={tailwind({ 'text-primary-500': !disabled, 'text-dfxgray-300': disabled })}
          dark={tailwind({ 'text-dfxred-500': !disabled, 'text-dfxblue-900': disabled })}
          style={[tailwind('px-1 text-sm font-medium leading-4'), props.textStyle]}
          {...disabled ? undefined : props.textThemedProps}
        >
          {props.iconLabel}
        </ThemedText>}
    </ThemedTouchableOpacity>
  )
}
