import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from "prop-types";

const SearchBar = props => {
  return <div style={{
    backgroundColor: '#ccc',
    display: 'flex',
    justifyContent: 'space-between',
    minHeight: '48px',
    position: 'fixed',
    width: '100%',
    zIndex: 100
  }}>
    <FormControl style={{
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '20px'
    }}>
      <div style={{
        width: '60%',
        display: 'flex',
        alignItems: 'flex-end'
      }}>
        <TextField
          label="Search term"
          style={{
            width: '100%'
          }}
          value={props.searchText}
          onChange={props.handleInputChange}
          onKeyDown={props.handleInputKeyDown}
          required
        />
      </div>

      <div style={{
        width: '20%',
        display: 'flex',
        alignItems: 'flex-end'
      }}>
        <Select
          value={props.sortType}
          onChange={props.handleSelectChange}
          displayEmpty
          style={{
            width: '100%',
            textAlign: 'left'
          }}>
          <MenuItem value={''} disabled>
            Sort by
          </MenuItem>
          <MenuItem value={'publishedAt'}>Date</MenuItem>
          <MenuItem value={'relevancy'}>Relevance</MenuItem>
          <MenuItem value={'popularity'}>Popularity</MenuItem>
        </Select>
      </div>

      <div style={{
        width: '15%',
        display: 'flex',
        alignItems: 'flex-end'
      }}>
        <Button
          variant="contained"
          color="primary"
          style={{
            width: '100%'
          }}
          onClick={props.handleButtonClick}>
          Search
        </Button>
      </div>
    </FormControl>
  </div>
};

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleInputKeyDown: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export { SearchBar }
