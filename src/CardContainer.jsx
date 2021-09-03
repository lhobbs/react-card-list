import React from 'react'
import Card from './Card.jsx'
import './assets/styles/Cards.css'
import { getCreators } from './assets/scripts/services'

class CardContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      search: ''
    }
  }

  componentDidMount() {
    getCreators()
      .then(data => this.setState({ items: data }));
  }

  render() {
    return (<div>
      <div className="card-container">
      {this.state.items.map(item => <Card item={item} key={item.creatorId} />)}
      </div>
    </div>)
  }
}

export default CardContainer;