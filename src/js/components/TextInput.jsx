import React from 'react';

export class JsxForm extends React.Component {
  render() {
    return (
      // <h1>{"Hello"}</h1>
      <form>
        <label>
          <input type="text"></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}
