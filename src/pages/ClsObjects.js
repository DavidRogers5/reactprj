import React from "react";


export default class ClsObjects extends React.Component { 

    INSERTMeth(NameValue) {
        //console.log(NameValue);

        fetch('http://localhost:8080/api/CreateListing', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "name": NameValue    
            })
          })

    }

    UpdateMethText(IDValue, NameValue) {
      //console.log(NameValue);

      fetch('http://localhost:8080/api/UpdateListing', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "id": IDValue, "name": NameValue    
          })
        })
  }

  DeleteMeth(IDValue) {
    //console.log(NameValue);

    fetch('http://localhost:8080/api/DeleteListing', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "id": IDValue   
        })
      })
}

  
}


/*
 PostResults(data: any): Observable<any> 
  {
    return this.httpClient.post<any>(this.urlPost, data);
  }
*/

//  private urlPost = 'http://localhost:8080/api/CreateListing';





