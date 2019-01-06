import React from "react";


class Application extends React.Component {
  state = {
    counter: 0
  };

  onClick = (e) => {
    e.preventDefault();

    this.setState({counter: this.state.counter+=1});
  };

  render() {
    return (
        <div>
          <h1>Hola mundo desde React. Contador: ({this.state.counter})</h1>
            <button onClick={this.onClick.bind(this)}>Contador</button>
        </div>
    )
  }
}

export default Application;
