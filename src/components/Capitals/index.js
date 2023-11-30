import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capital extends Component {
  state = {intialCapital: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({intialCapital: event.target.value})
  }

  gettingCountry = () => {
    const {intialCapital} = this.state
    const filteredCapital = countryAndCapitalsList.find(
      eachItem => eachItem.id === intialCapital,
    )
    return filteredCapital.country
  }

  render() {
    const {intialCapital} = this.state

    const country = this.gettingCountry(intialCapital)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Countries And Capitals</h1>
          <div className="question-container">
            <select onChange={this.onChangeCapital} value={intialCapital}>
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capital
