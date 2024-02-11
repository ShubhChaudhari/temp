import { Box } from '@mui/material';
import { convertLength } from '@mui/material/styles/cssUtils';
import React from 'react'

const CountryList = () => {
    const countryList = [{"id":1,"name": "India","isoCode":"IN"},{"id":2,"name": "Pakistan", "isoCode": "PAK"}]


    

  return (
    <div>
        <Box
            sx={{width: 300,height: 420, border: '1px dashed grey'}}
            id="target"
        />

        <Box
            sx={{width: 300,height: 420, border: '1px dashed grey'}}
        >
            {countryList && countryList.map((val,key)=>{
                console.log("countryList",val)
                return(
                    <div>
                        <p className="mx-1 my-1" 
                            key={val.isoCode} 
                            id={"show-" + val.id} 
                            draggable={true} 
                            // onDragStart={(event) => dragstart_handler (event, val.id)}
                        >
                            {val.name}
                        </p>
                    </div>
                )
            })}
        </Box>
    </div>
  )
}

export default CountryList;