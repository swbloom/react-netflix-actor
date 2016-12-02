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
      src = 'http://netflixroulette.net/api/posters/60034971.jpg';
    }
    return (
      <li>
        <img src={src} alt={this.props.title} onError={this.handleError} />
      </li>
    )
  }

};

module.exports = Film;
