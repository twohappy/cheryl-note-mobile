import React, {Component} from "react";
import {Text} from 'react-native';
import {Note, NoteType} from "../entities/Note";
import {getConnection, getRepository} from "typeorm";

export class DoneTodayScreen extends Component {

    render() {
        return <Text>done</Text>;
    }
}
