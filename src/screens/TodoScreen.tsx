import React, { Component } from "react";
import { Text, View } from "react-native";
import { Note, NoteType } from "../entities/Note";
import { createConnection, getConnection, getRepository } from "typeorm";
export class TodoScreen extends Component {
  state = {
    notes: []
  };
  connect() {
    return createConnection({
      type: "react-native",
      database: "cherylnote",
      location: "Documents",
      logging: ["error", "query", "schema"],
      synchronize: false,
      migrationsRun: true,
      entities: [Note]
    });
  }
  async componentDidMount() {
    await this.connect();
    const newNote = new Note();
    newNote.content = "123422";
    newNote.content_type = NoteType.NOTE;
    newNote.done = false;
    const result = await newNote.save();
    console.log({ result });
    const r = await getRepository(Note)
      .createQueryBuilder()
      .getMany();
    console.log({ r });
    this.setState({ notes: r });
  }

  render() {
    if (this.state.notes.length <= 0) {
      return <Text>今日待办</Text>;
    } else {
      return (
        <View>{this.state.notes.map((item,index) => <Text key={index}>{item.content}</Text>)}</View>
      );
    }
  }
}
