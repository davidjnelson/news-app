import { connect } from 'react-redux';
import { SearchResults } from '../components/SearchResults';

const mapStateToProps = state => {
  return {
    articles: state.search.articles,
    message: state.search.message
  }
};

const ConnectedSearchResults = connect(
  mapStateToProps
)(SearchResults);

export { ConnectedSearchResults }
