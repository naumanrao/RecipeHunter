import React from 'react'
import { Main, SearchBox } from './styles'
import {  TextField, Typography } from '@mui/material'


const SearchFavorite = ({getSearchData, value, onChange}) => {








  return (
    <>
    <Main>
      <SearchBox>
    <Typography className='title'>Selected Favorite Recipes</Typography>
   
        
      <TextField fullWidth size='small' type='text' value={value}  onChange={onChange} className='input' placeholder='Filter Your Selected Favorite'>
       
        </TextField> 
       
     </SearchBox>
 
    </Main>

   </>
  )
}

export default SearchFavorite
