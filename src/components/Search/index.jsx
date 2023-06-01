import React, { useEffect } from 'react'
import { Main, SearchBox } from './styles'
import { Button,  TextField, Typography } from '@mui/material'
import "./style.css"


const Search = ({getSearchData, apiCalledSuccess, setApiCalledSuccess}) => {


const [inputValue, setInputValue] = React.useState('')

  const handleChange = (e)=>{
setInputValue(e.target.value)
  }

const handleClick = (event)=>{
event.preventDefault();
getSearchData(inputValue);

}


useEffect(()=>{
  if(apiCalledSuccess){
setInputValue('')
setApiCalledSuccess(false)}

}, [apiCalledSuccess, setApiCalledSuccess])

  return (
    <>
    <Main>
    <rotateKeyframes />
      <SearchBox>
    <Typography className='title'>Food Hunt</Typography>
    <Typography className='heading'>Hunt your favorite food here!!</Typography>
        <form onSubmit={handleClick} className='form'>
      <TextField fullWidth size='small' type='text' value={inputValue}  onChange={handleChange} className='input' >
       
        </TextField> 
        <Button variant="contained" type='submit' className='btn' >Search</Button>
     
     </form>
     </SearchBox>
 <img src='./dish.png' alt='img'  className='rotate-image'/> 
    </Main>

   </>
  )
}

export default Search
