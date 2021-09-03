import React from 'react'
import Card from './Card.jsx'
import './assets/styles/Cards.css'
import { getCreators } from './assets/scripts/services'

class Creators extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      creators: [],
      search: ''
    }
  }

  componentDidMount() {
    console.log('mounted')
    getCreators()
      .then(data => this.setState({ creators: data }));
  }

  render() {
    return (<div>
      <h1>Creators page</h1>
      <div className="card-container">
      {this.state.creators.map(creator => <Card creator={creator} key={creator.creatorId} />)}
      </div>
    </div>)
  }
}

export default Creators;