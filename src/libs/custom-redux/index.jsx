import { combineReducers } from "./combineReducers";
import { createStore } from "./createStore";
import React from "react";

const ReduxContext = React.createContext("redux");

const Provider = ({ store, children }) => (
  <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
);

const connect = (stateProps, dispatchProps) => (Component) => {
  class Connect extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.props.store?.getState();
    }

    componentDidMount() {
      this.props.store.subscribe((state) => {
        this.setState(state);
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          {...stateProps(this.props.store.getState())}
          {...dispatchProps(this.props.store.dispatch)}
        />
      );
    }
  }
  return (props) => (
    <ReduxContext.Consumer>
      {(store) => <Connect {...props} store={store} />}
    </ReduxContext.Consumer>
  );
};

export { Provider, createStore, combineReducers, connect };
