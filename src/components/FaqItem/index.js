import './index.css'

const FaqItem = props => {
  const {details} = props
  const {questionText, answerText} = details

  return (
    <li>
      <div className="question-box">
        <p>{questionText}</p>
        <button type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
            alt="plus"
          />
        </button>
      </div>
    </li>
  )
}

export default FaqItem
