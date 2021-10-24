import './index.css'

const SuggestionItem = props => {
  const {suggestionItems, updateSearchInput} = props
  const {suggestion} = suggestionItems

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="suggestion-item">
      <p className="suggestion">{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onClick={onClickSuggestion}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow"
          alt="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
