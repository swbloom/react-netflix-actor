import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';
import FilmList from './components/FilmList';
import request from 'superagent';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      films: []
    };

    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(term) {
    const endpoint = `http://netflixroulette.net/api/api.php?actor=${term}`

    if (term.length === 0) this.setState({films: []});
    if (term.length < 5) return; // api needs at least 5 characters to return a result

    request.get(endpoint, (err,res) => {
      this.setState({films: res.body});
    });
  }

  render() {
    return (
      <div>
        <SearchBar onTermChange={this.handleTermChange} />
        <FilmList films={this.state.films} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
