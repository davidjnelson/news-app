const searchReducer = (state = {
                         message: 'Please enter your search term above and click Search.',
                         articles: [],
                         searchText: '',
                         sortType: ''
                       }, action) => {
  switch(action.type) {
    case 'SET_MESSAGE':
      return Object.assign({}, state, {
        message: action.message
      });
    case 'CHANGE_SORT_TYPE':
      return Object.assign({}, state, {
        sortType: action.sortType
      });
    case 'SET_ARTICLES':
      return Object.assign({}, state, {
        articles: action.articles
      });
    case 'CHANGE_SEARCH_TEXT':
      return Object.assign({}, state, {
        searchText: action.searchText
      });
    default:
      return state;
  }
};

export { searchReducer }
