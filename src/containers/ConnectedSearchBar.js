import { connect } from 'react-redux';
import { SearchBar } from '../components/SearchBar';
import { changeSortType, changeSearchText, search } from '../actions/searchActions';

const mapStateToProps = state => {
  return {
    searchText: state.search.searchText,
    sortType: state.search.sortType
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleButtonClick: () => {
      dispatch(search())
    },
    handleSelectChange: event => {
      dispatch(changeSortType(event.target.value));
      dispatch(search());
    },
    handleInputKeyDown: event => {
      if(event.keyCode === 13) {
        dispatch(search());
      }
    },
    handleInputChange: event => {
      dispatch(changeSearchText(event.target.value))
    }
  }
};

const ConnectedSearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);

export { ConnectedSearchBar }
