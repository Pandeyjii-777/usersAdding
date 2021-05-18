import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
    

const App = () =>{

    let ALLUSERHERE;
    const [showchosen, setshowChosen] = useState();
      let Users =[];
    
      function PUT(put){
        this.put=put;
        this.completed=false;
        }


        if(localStorage.getItem('user')==null){
            Users =[];
            }
          else{
             Users =JSON.parse(localStorage.getItem('user'));
            } 

    
      //Create Item Part of To-Do List;
      let Name=null;
      const userName = (e)=>{
           if(e.target.value.length>=4){
               Name=e.target.value;
            }
            else{
                Name=null;
            } 
        }
     
        //Create Item Add to To-Do List;
      const showall = ()=>{
        let CHOSEN;

        if(Name!=null){
           CHOSEN=new PUT(Name);
           
           Users.map((val, indx)=>{
             if((Users[indx].put).toLowerCase()===Name.toLowerCase()){
               Users.splice(indx, 1);
             }
           });

           Users.unshift(CHOSEN);
         }
         else{
           alert("Please enter the valid input text")
         }

        localStorage.setItem("user", JSON.stringify(Users)); 
        Name=null;

          setshowChosen(
            Users.map((value, index1)=>
        {
          return(
            <div className="OUTtimeline">
                <a className="SavedDelete"><Button id={index1} onClick={DeleteIT} className="Delete"> <DeleteForeverIcon className="Deleteicon" /> </Button>
                  <Button id={index1} onClick={saveIT} ><a className="Saved">Saved</a> </Button></a>
            
              <a onInput={changinghere} contentEditable="true" className="USERNAME">{Users[index1].put}</a>  
           </div>
          );
         }
      )
        );
     
        ALLUSERHERE= showchosen;
    };
    

    //Delete Part of To-Do List;
      const DeleteIT = (e) =>{
          
            Users.splice(e.currentTarget.id , 1);
            localStorage.setItem("user", JSON.stringify(Users)); 
            
            setshowChosen(
              Users.map((value, index1)=>
              {
                return(
                  <div className="OUTtimeline">
                      <a className="SavedDelete"><Button id={index1} onClick={DeleteIT} className="Delete"> <DeleteForeverIcon className="Deleteicon" /> </Button>
                        <Button id={index1} onClick={saveIT} ><a className="Saved">Saved</a> </Button></a>
                  
                    <a onInput={changinghere} contentEditable="true" className="USERNAME">{Users[index1].put}</a>  
                 </div>
                );
               }
            )
             );
            
             ALLUSERHERE= showchosen;

        }


     //Edit Part of To-Do List;   
        let final=null;
        const changinghere= (e)=>{
            
            if(e.currentTarget.textContent.length>=4){
                final=e.currentTarget.textContent;
              }
              else{
                final=null;
               // alert("Please write atleast 4 character otherwise it will not change")
              }
           
        }

      //Edit Saved Part of To-Do List;  
        const saveIT = (e) =>{
           if(final!=null){
            Users.splice(e.currentTarget.id , 1);

            Users.map((val, indx)=>{
              if((Users[indx].put).toLowerCase()===final.toLowerCase()){
                Users.splice(indx, 1);
              }
            });
 
            

           let EditCHOSEN= new PUT(final);
            Users.unshift(EditCHOSEN);
            localStorage.setItem("user", JSON.stringify(Users)); 
          

            setshowChosen(
              Users.map((value, index1)=>
              {
                return(
                  <div className="OUTtimeline">
                      <a className="SavedDelete"><Button id={index1} onClick={DeleteIT} className="Delete"> <DeleteForeverIcon className="Deleteicon" /> </Button>
                        <Button id={index1} onClick={saveIT} ><a className="Saved">Saved</a> </Button></a>
                  
                    <a onInput={changinghere} contentEditable="true" className="USERNAME">{Users[index1].put}</a>  
                 </div>
                );
               }
            )
             );
            
             ALLUSERHERE= showchosen;
            }
             final=null;
        }   


     ALLUSERHERE = Users.map((value, index1)=>
        {
          return(
            <div className="OUTtimeline">
                <a className="SavedDelete"><Button id={index1} onClick={DeleteIT} className="Delete"> <DeleteForeverIcon className="Deleteicon" /> </Button>
                  <Button id={index1} onClick={saveIT} ><a className="Saved">Saved</a> </Button></a>
            
              <a onInput={changinghere} contentEditable="true" className="USERNAME">{Users[index1].put}</a>  
           </div>
          );
         }
      ); 

      

         return(<>
             <div className="frontendOUT">
                <div className="frontend">
                    <input type="text" placeholder="Add a user" onChange={userName}
                      className="INPUT"></input>
                    <Button onClick={showall}><button className="Addbutton">Add</button></Button>
                </div>  

                <div className="showchosen">{ALLUSERHERE}</div>
          
             </div>
         </>);

    }
   

export default App;
