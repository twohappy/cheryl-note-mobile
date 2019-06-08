import "reflect-metadata";
import {createConnection, getConnection} from "typeorm";
import React, { Component } from "react";
import AppContainer from "./navigation/routes";
import { Note } from "./entities/Note";

export default class App extends Component<any, any> {


  async componentWillMount() {
    try {
      await this.connect();
      console.log('connect!!!')
      const c = await getConnection();
      console.log({c})
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return <AppContainer />;
  }
}
