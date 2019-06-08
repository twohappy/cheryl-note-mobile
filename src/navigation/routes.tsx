import React from "react";
import {Button, Text, View} from "react-native";
import {createBottomTabNavigator, createAppContainer, createStackNavigator} from "react-navigation";
import {TodoScreen} from "../screens/TodoScreen";
import {DoneTodayScreen} from "../screens/DoneTodayScreen";


const ToDoStack = createStackNavigator({
    Home: TodoScreen,
    // Details: DetailsScreen,
});

const DoneStack = createStackNavigator({
    Done: DoneTodayScreen,
    // Details: DetailsScreen,
});

const TabNavigator = createBottomTabNavigator({
        'Todo': ToDoStack,
        'Done': DoneStack
    });

export default createAppContainer(TabNavigator);
