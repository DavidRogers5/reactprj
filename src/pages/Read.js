
import React, { useState, useEffect } from 'react';


const Read = () => {

  const [data, setData] = useState(null);

  let ResJsonStrItems = [];
  let ResJsonObjArray = [];
  let TempStr = new String();

  useEffect(() => {
    fetch('http://localhost:8080/api/FakeListing')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); 


  return (    

    
    <div>
     

     {data ? 
      (         
                
        <ul>   

        <li hidden key= "uniquekey"> 
          {
          ResJsonStrItems = Object.values(data.recordset).map(value => ( JSON.stringify(value) )) } 
          { JSON.stringify( ResJsonObjArray = ResJsonStrItems.map( (ResJsonStrItem)=> JSON.parse(ResJsonStrItem) ) ) }  
        </li>        
     
        {                 

          Object.values(ResJsonObjArray).map(value => ( 
            <li key={Object.key} >
            <b hidden>
              { TempStr = JSON.stringify(value["Col1MyStrData"]) }
              { TempStr = TempStr.replace(/\\n/g, '') }
              { TempStr = TempStr.replace(/"/g, "") }
            </b>
             
            <b>ID:</b> { JSON.stringify(value["ID"]) } &nbsp;&nbsp;
            <b>Value:</b> {  TempStr  }
            </li>
             
            ))               
        }

        </ul>  

                  
      ) :       
      (
        <p>Loading data...</p>
      )} 


    </div>         

  );     

}
 
export default Read;

 //http://localhost:8080/api/FakeListing


