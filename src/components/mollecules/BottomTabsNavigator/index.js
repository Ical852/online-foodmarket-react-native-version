import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { customColors } from '../../../utils'
import { IconHome, IconHomeActive, IconOrder, IconOrderActive, IconProfile, IconProfileActive } from '../../../assets'

const Icon = ({title, isIndex}) => {
    if (title == 'Home') {
        return isIndex ? <IconHomeActive/> : <IconHome/>
    } else if(title == 'Order') {
        return isIndex ? <IconOrderActive/> : <IconOrder/>
    } else if(title == 'Profile') {
        return isIndex ? <IconProfileActive/> : <IconProfile/>
    } else {
        return <IconHome/>
    }
}

const BottomTabsNavigator = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
            <TouchableOpacity onPress={onPress} key={index}>
                <Icon title={label} isIndex={isFocused}/>
            </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default BottomTabsNavigator

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop : 15,
        paddingBottom : 13,
        paddingHorizontal : 50,
        backgroundColor : customColors.white
    },
});