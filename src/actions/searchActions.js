import axios from "axios/index";
import { getBaseUrl } from "../configuration/configuration";

export const setMessage = message => {
  return {
    type: 'SET_MESSAGE',
    message
  }
};

export const changeSortType = sortType => {
  return {
    type: 'CHANGE_SORT_TYPE',
    sortType
  }
};

export const setArticles = articles => {
  return {
    type: 'SET_ARTICLES',
    articles
  }
};

export const changeSearchText = searchText => {
  return {
    type: 'CHANGE_SEARCH_TEXT',
    searchText
  }
};

export const search = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setMessage('Loading...'));
      dispatch(setArticles([]));

      if(getState().search.searchText === '') {
        dispatch(setMessage('Please enter a search term.'));
        return;
      }

      const response = await axios.get(`${getBaseUrl()}/search?search=${getState().search.searchText}&sort=${getState().search.sortType}`);

      if (response.status !== 200) {
        dispatch(setMessage('An error occured.  Please try your search again.'));
        dispatch(setArticles([]));
      } else {
        dispatch(setMessage(''));
        dispatch(setArticles(response.data.articles));
      }
    } catch (error) {
      dispatch(setMessage('An error occured.  Please try your search again.'));
      dispatch(setArticles([]));
    }
  }
};
