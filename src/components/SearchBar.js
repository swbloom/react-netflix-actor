import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onTermChange(term);
  }

  render() {
    return (
      <div className='search-bar'>
        <input onChange={event => this.onInputChange(event.target.value)} placeholder="Enter an actor's name to see what movies they have on Netflix!" />
      </div>
    )
  }
}

module.exports = SearchBar;
