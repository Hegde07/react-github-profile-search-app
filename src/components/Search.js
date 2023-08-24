import { Box ,TextField,Button,FormControl} from "@mui/material";
import React, { useEffect, useState } from 'react'
import ShowProfile from "./ShowProfile";

const Search = () => {
    const [user,setUser]=useState('')
    const [userProfile,setUserProfile]=useState([])
     const fetchData= async ()=>{
      await fetch(`https://api.github.com/users/${user}`)
      .then(res=>res.json())
      .then(result=>setUserProfile(result))
      console.log(userProfile)
     }
    const handleFetchProfile=()=>{
      fetchData();
    }
  return (
    <>
    <Box mt={3} width="100%" textAlign='center'>
    <FormControl >
      <TextField
        value={user}
        varient="outlined"
        label="Search Profile"
        type="text"
        size="small"
        onChange={e=>setUser(e.target.value)}
      />
     
    </FormControl>
    <Button sx={{mx:"auto"}} variant="contained" onClick={e=>handleFetchProfile()}>Search</Button>
  </Box>
  <ShowProfile userProfile={userProfile}/>
  </>
  )
}

export default Search