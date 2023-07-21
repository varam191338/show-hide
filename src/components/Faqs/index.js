import {Component} from 'react'

import './index.css'

import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>FAQs</h1>
          <div>
            <ul>
              {faqsList.map(eachItem => (
                <FaqItem details={eachItem} key={eachItem.Id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Faqs
