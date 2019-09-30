import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { makeStyles } from '@material-ui/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  formControl: {
    minWidth: 215,
  }
});

const Filter = ({
  filterType,
  filterValue,
  filterOptions,
  handleChange
}) => {

  const classes = useStyles();

  let typeLowerCase = filterType.toLowerCase();
  let typeCapitalized = `str${filterType[0].toUpperCase()}${filterType.substr(1)}${typeLowerCase === 'ingredient' ? '1' : ''}`;

  return(
    <Grid item>
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor={typeLowerCase}>{`${filterType[0].toUpperCase()}${filterType.substr(1)}`}</InputLabel>
          <Select
            value={filterValue}
            onChange={(e) => handleChange(e.target)}
            inputProps={{
              name: typeLowerCase,
              id: typeLowerCase,
            }}
          >
            {filterOptions.length > 1 && filterOptions.map((val, i) => 
              val.strAlcoholic !== null &&  
              <MenuItem key={i} value={val[typeCapitalized]}>{val[typeCapitalized]}</MenuItem>
            )}
          </Select>
        </FormControl>
      </form>
    </Grid>
  )
};

Filter.propTypes = {
  filterType: PropTypes.string,
  filterValue: PropTypes.string,
  filterOptions: PropTypes.array,
  handleChange: PropTypes.func
};

export default Filter;