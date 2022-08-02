import './index.css'

const SuggestionItem = props => {
  const {sugDetails, arrowClick} = props
  const {suggestion} = sugDetails
  const click = () => {
    arrowClick(suggestion)
  }

  return (
    <li className="list-item">
      <p className="sug">{suggestion}</p>
      <img
        onClick={click}
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        alt="arrow"
        className="image-arrow"
      />
    </li>
  )
}
export default SuggestionItem
