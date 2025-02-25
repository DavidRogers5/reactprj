import React, { useState, useEffect } from 'react';
import ClsObjects from './ClsObjects';

const Update = () => {
    
  //On load read data array
  const [data, setData] = useState(null);

  let ResJsonStrItems = [];
  let ResJsonObjArray = [];
  let TempStr = new String();
  let MetObject = new ClsObjects();

  //values and method for form events
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  //ID and method for form events
  const [inputID, setInputID] = useState('');
  const handleInputChangeID = (event) => {
    setInputID(event.target.value);
  };

  useEffect(() => {
    fetch('http://localhost:8080/api/FakeListing')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);   

  

  return ( 
  
      <div>          
   
   <h1>Update</h1>

    <form action="">

    <label htmlFor="UpdateItemID">List Item ID: </label>
    <input type="number" id="BtnUpdateItemID" name="UpdateItemID" value={inputID} onChange={handleInputChangeID} /><br></br>

    <label htmlFor="UpdateItem">Update List Item Text: </label>
    <input type="text" id="BtnUpdateItemName" name="UpdateItemName" value={inputValue} onChange={handleInputChange} /> &nbsp; &nbsp; 

    <input type="submit" value="UPDATE" onClick={() => MetObject.UpdateMethText(inputID , inputValue) } />            

    </form>   


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
 
export default Update;