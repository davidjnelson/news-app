import React from 'react'
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const getImage = (url) => {
  if(url) {
    return <img alt="" style={{
      width: '100%',
      height: '50%'
    }} src={url} />
  }
};

const ArticleCard = ({article}) => {
  return <div style={{
      backgroundColor: '#fff',
      margin: '5%',
      height: '60%',
      width: '100%',
      flexGrow: 0,
      flexBasis: '40%'
    }}>
      {getImage(article.urlToImage)}
      <div style={{
        padding: '5%',
        width: '90%',
        backgroundColor: '#fff'
      }}>
        <h2>{article.title}</h2>

        <p>{article.description}</p>

        <a href={article.url} target="_blank">
          <Button
            variant="contained"
            color="secondary">
            Read More
          </Button>
        </a>
      </div>
    </div>
};

ArticleCard.propTypes = {
  article: PropTypes.shape({
    urlToImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired
};

export { ArticleCard }
