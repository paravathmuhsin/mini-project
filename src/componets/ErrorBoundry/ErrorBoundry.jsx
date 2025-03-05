import { Component } from "react";

export class ErrorBoundry extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    // console.log(error);
    return { hasError: true };
  }

  componentDidCatch(err, info) {
    console.log(err, info);
  }
  render() {
    return this.state.hasError ? (
      <h2>
        Something went wrong! please go back to <a href="/">Home page</a>
      </h2>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundry;