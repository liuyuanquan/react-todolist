import { connect } from 'react-redux'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: state.filter === ownProps.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleClick: () => {
    dispatch({
      type: 'SET_FILTER',
      filter: ownProps.filter
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)