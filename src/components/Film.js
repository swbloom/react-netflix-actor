import React from 'react';

class Film extends React.Component {
  constructor(props) {
    super();
    this.state = {
      noPicture: false
    };
    this.handleError = this.handleError.bind(this);
  }

  handleError() {
    this.setState({noPicture: true});
  }

  render() {
    let src = this.props.poster;

    if (this.state.noPicture) {
      return (
        <li className='film film--no-picture'>
          {this.props.title}
          <div className='additional-info'>
            <h2>{this.props.title}</h2>
            <p>{this.props.summary}</p>
          </div>
        </li>
      )
    } else {
      return (
        <li className='film'>
          <img src={src} alt={this.props.title} onError={this.handleError} />
          <div className='additional-info'>
            <h2>{this.props.title}</h2>
            <p>{this.props.summary}</p>
          </div>
        </li>
      )
    }

  }

};

module.exports = Film;
