import { Component, Children } from 'react'
import PropTypes from 'prop-types'

class BaqendProvider extends Component {
  static propTypes = {
    db: PropTypes.object.isRequired,
  }

  static childContextTypes = {
    db: PropTypes.object.isRequired,
  }

  getChildContext() {
   const { db } = this.props
   return { db }
  }

  render() {
    return Children.only(this.props.children)
  }
}
export default BaqendProvider
