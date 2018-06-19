import React from 'react'
import { ArticleCard } from './ArticleCard';
import PropTypes from "prop-types";

const SearchResults = props => {
  return props.message ?
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      flexGrow: 1
    }}>
      {props.message}
    </div> :
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      paddingTop: '5%'
    }}>
      {props.articles.map((article, index) => {
        return <ArticleCard key={index} article={article} />
      })}
    </div>
};

SearchResults.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    urlToImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  message: PropTypes.string.isRequired
};

export { SearchResults }
