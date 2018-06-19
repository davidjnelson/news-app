import { searchReducer } from './searchReducer';

describe('Search Reducer', () => {
  describe('SET_MESSAGE action', () => {
    it('sets the message', () => {
      expect(searchReducer(undefined, {
        type: 'SET_MESSAGE',
        message: 'test'
      })).toEqual({
        message: 'test',
        articles: [],
        searchText: '',
        sortType: ''
      });
    })
  });

  describe('CHANGE_SORT_TYPE action', () => {
    it('changes the sort type', () => {
      expect(searchReducer(undefined, {
        type: 'CHANGE_SORT_TYPE',
        sortType: 'popularity'
      })).toEqual({
        message: 'Please enter your search term above and click Search.',
        articles: [],
        searchText: '',
        sortType: 'popularity'
      });
    })
  });

  describe('SET_ARTICLES action', () => {
    it('sets the articles', () => {
      expect(searchReducer(undefined, {
        type: 'SET_ARTICLES',
        articles: [{ title: 'cool'}]
      })).toEqual({
        message: 'Please enter your search term above and click Search.',
        articles: [{ title: 'cool'}],
        searchText: '',
        sortType: ''
      });
    })
  });

  describe('CHANGE_SEARCH_TEXT action', () => {
    it('sets the search text', () => {
      expect(searchReducer(undefined, {
        type: 'CHANGE_SEARCH_TEXT',
        searchText: 'new search text'
      })).toEqual({
        message: 'Please enter your search term above and click Search.',
        articles: [],
        searchText: 'new search text',
        sortType: ''
      });
    })
  });
});
