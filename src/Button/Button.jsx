import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120,color:"#fff" }}>
        <InputLabel sx={{color:"#fff"}} id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
          sx={{color:"#fff"}}
        >
          <MenuItem sx={{color:"#fff"}} value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10} sx={{color:"#fff"}}>Ten</MenuItem>
          <MenuItem value={20} sx={{color:"#fff"}}>Twenty</MenuItem>
          <MenuItem value={30} sx={{color:"#fff"}}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
    </div>
  );
}