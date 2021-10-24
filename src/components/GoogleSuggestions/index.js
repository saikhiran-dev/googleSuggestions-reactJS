import {Component} from 'react'
import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onSearchChange = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-image"
            alt="google logo"
          />
          <div className="search-input-suggestion-container">
            <div className="input-search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon"
                alt="search icon"
              />
              <input
                type="search"
                className="input-search"
                placeholder="Search Google"
                value={searchInput}
                onChange={this.onSearchChange}
              />
            </div>
            <ul className="suggestion-item-container">
              {searchResults.map(eachSuggestion => (
                <SuggestionItem
                  key={eachSuggestion.id}
                  suggestionItems={eachSuggestion}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
