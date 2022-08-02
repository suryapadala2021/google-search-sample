import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'
import './index.css'

class GoogleSuggestions extends Component {
  state = {search: '', value: null}

  searchBy = event => {
    this.setState({search: event.target.value})
  }

  arrowClick = suggestion => {
    this.setState({search: suggestion, value: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {search, value} = this.state
    const filteresList = suggestionsList.filter(sug => {
      if (sug.suggestion.toLowerCase().includes(search.toLowerCase())) {
        return true
      }
      return false
    })
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
          className="image-google"
        />
        <div className="box">
          <div className="input-box">
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
              alt="search icon"
            />
            <input
              value={value}
              onChange={this.searchBy}
              placeholder="search google"
              className="input"
              type="search"
            />
          </div>
          <ul className="list-container">
            {filteresList.map(item => (
              <SuggestionItem
                key={item.id}
                sugDetails={item}
                arrowClick={this.arrowClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
