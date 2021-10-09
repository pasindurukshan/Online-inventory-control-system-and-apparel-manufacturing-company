import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';



export default class LmoMatCreate extends Component {
       //Binding event handler method
       constructor(props){
           super(props);
           this.state={
               lmoID:"",
               matID:"",
               matName:"",
               qty:"",
               category:"",
               description:"",
               lmoIDError:"",
               matIDError:"",
               matNameError:"",
               qtyError:"",
               categoryError:"",
               descriptionError:""
             

          }
       } 

       handleInputChange = (e) =>{
           const{name,value} = e.target;

           this.setState({
               ...this.state,
               [name]:value
           })

       } 

       //validation
       validate= ()=>{
        let lmoIDError="";
        let matIDError="";
        let matNameError="";
        let qtyError="";
        let categoryError="";
        let descriptionError="";
       //statements
        if(!this.state.lmoID){
          lmoIDError="*LMO ID is Required!"
        }
        if(!this.state.matID){
          matIDError="*Material ID is Required!"
        }
       
        if(!this.state.matName){
          matNameError="*Material name is Required!"
        }
        if(!this.state.qty){
          qtyError="*QTY is Required"
        }

          else if (!this.state.qty.match('^[1-9]+[0-9]*$')){
            qtyError= '*Please Enter a Valid QTY Range '
          } 

        if(!this.state.category){
           categoryError="*Category is Required"
        }
        if(!this.state.description){
          descriptionError="*Description is Required"
        }
    
 
        if(lmoIDError||matIDError||matNameError||qtyError||categoryError||descriptionError){
         this.setState({lmoIDError,matIDError,matNameError,qtyError,categoryError,descriptionError});
         return false;
 
     }
 
     return true;
 
    }

          //onsubmit method
           onSubmit =(e) =>{
           e.preventDefault();
           const isValid= this.validate();
           const {lmoID,matID,matName,qty,category,description} = this.state;
           

           const data = {
               lmoID:lmoID,
               matID:matID,
               matName:matName,
               qty:qty,
               category:category,
               description:description

           }


       //if validation succussesfully pass
       if(isValid){
       console.log(data)
           //Post data to back end using the Http link
           axios.post("http://localhost:8000/lmomat/save", data).then((res) =>{
               if(res.data.success){
                Swal.fire('Added','LMO Card Added Successfilly','success')
                   this.setState(
                       {
                        lmoID:"", 
                        matID:"",
                        matName:"",
                        qty:"",
                        category:"",
                        description:""
                       }
                   )
               }
           })


          }
      }


      //Demo button
      btnDemo = (e) => {
        e.preventDefault();
      
        const {  lmoID, matID, matName, qty, category, description} = this.state;
      
        const data = {
          lmoID: lmoID,
          matID: matID,
          matName: matName,
          qty: qty,
          category: category,
          description: description,
        }
      
        console.log(data)
      
        this.setState(
            {
              lmoID: "LMO001",
              matID: "MAT020",
              matName: "Crape",
              qty: "10000",
              category: "Fabric",
              description: "Versatile fabric",
              
            }
        )
      }
    //gather outputs
    render() {
        return (
            //component organizer
            <div id="wrapper" className="toggled">
            <div id="page-content-wrapper">
            <div className="container-fluid">
              .
          {/* custom navigation        */}
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark  rounded-3">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/matDash">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/lmo"> &#62; LMO Card </a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href=""> &#62; Add a LMO Card  <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
</nav> 



<hr/>




{/* Instruction section */}
<div class="card">
  <div class="card-body">
    <h5 class="card-title">INSTRUCTIONS</h5>

    <div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
    <p class="card-text">Imagine having just the right number of products for a certain SKU, given demand -- but your team is working with old data and, based on that data, projects that your inventory will fall short of demand in a month. It is obvious what your team would do: begin the process of acquiring more inventory to make up the difference. Now there will be excess inventory, and you will be in an Overstock situation.</p>
    <p class="card-text"><small class="text-muted">Latest Regulations</small></p>
  </div>
  <img src="%PUBLIC_URL%../../CASANOVA03.png" class="card-img-bottom" alt="..."/>
</div>

<div class="p-3 mb-2 bg-info text-dark rounded-3">

            <div className="col-md-8 mt-4 mx-auto">
              {/* Title        */}
              <center>
                <h1 className="h3 mb-3 font-weight-normal text-info rounded-3 " style={{backgroundColor: "#0E3662" , padding: "10px"}}><b>ADD NEW LMO CARD</b></h1>
                </center>
                <hr/>

                 {/* LMO add form */}
                <form className="needs-validation" noValidate>


                <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >LMO ID</label>
                        <input type="text"
                        className="form-control"
                        name="lmoID"
                        placeholder="Enter LMO ID"
                        value={this.state.lmoID}
                        onChange={this.handleInputChange}
                        required
                        />



<div style={{fontSize:15 ,color:"red"}}>
                           {this.state.lmoIDError}
                   </div>
                        </div>


                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Material ID</label>
                        <input type="text"
                        className="form-control"
                        name="matID"
                        placeholder="Enter Material ID"
                        value={this.state.matID}
                        onChange={this.handleInputChange}
                        required
                        />


<div style={{fontSize:15 ,color:"red"}}>
                           {this.state.matIDError}
                   </div>

                 </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Material Name</label>
                        <input type="text"
                        className="form-control"
                        name="matName"
                        placeholder="Enter Material Name"
                        value={this.state.matName}
                        onChange={this.handleInputChange}
                        required
                        />
                         
                         <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.matNameError}
                   </div>

                        </div>

                       

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Qty</label>
                        <input type="number"
                        className="form-control"
                        name="qty"
                        placeholder="Enter Qty"
                        value={this.state.qty}
                        onChange={this.handleInputChange}
                        required
                        />
                          
                          <div style={{fontSize:15 ,color:"red"}}>
                           {this.state.qtyError}
                   </div>

                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Category</label>
                        <input type="text"
                        className="form-control"
                        name="category"
                        placeholder="Enter Category"
                        value={this.state.category}
                        onChange={this.handleInputChange}
                        required
                        />

<div style={{fontSize:15 ,color:"red"}}>
                           {this.state.categoryError}
                   </div>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Description</label>
                        <textarea 
                        className="form-control"
                        name="description"
                        placeholder="Enter Description"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        required
                        />

<div  style={{fontSize:15 ,color:"red"}}>
                           {this.state.descriptionError}
                   </div>
                        </div>
                        <hr/>

                        <button className="btn btn-success" type="submit" style={{ backgroundColor: "#0E3662" }} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                            &nbsp; Submit LMO
                        </button>
                        <br/>
                        <br/>
                        <button type="submit" className="btn btn-dark"  style={{ backgroundColor: "#2D5F97"}}  onClick={this.btnDemo}>DEMO</button>
                    </form>   
                    </div>
                    </div>
                    </div>
                    </div> 


{/* Footer */}
<div class="footer">


<div class="contain">

  <br/>
<div class="col">
  <h1>ABOUT US</h1>

  
  <ul>
 
    <li><i class="fas fa-phone-square"></i>&nbsp; &nbsp; Contact us</li>
    <li><i class="fas fa-comment-alt"></i>&nbsp; &nbsp;Suggestion</li>
    
  </ul>
  
  
</div>
<div class="col">
  <h1></h1>
  <ul>
    <li></li>
  </ul>
</div>
<div class="col">
<div class="position-absolute top-50 start-50 translate-middle">
<br/>

<img src="%PUBLIC_URL%../../white.jpg" class="rounded-circle" width="40" height="40"  alt=""/>
  <h1>CASANOVA</h1>
  
  <ul>
    <li>@ Copyright reserved</li>
  </ul>
  </div>
</div>
<div class="col">
  <h1></h1>
  <ul>
  </ul>
  </div>

  <div class="position-absolute top-50 end-0 translate-middle-y">
<div class="col social">
  <h1>Help</h1>
  
  <ul>
  
    <li><i class="fas fa-envelope"></i>&nbsp; &nbsp; <i class="fas fa-map-marker-alt"></i>&nbsp; &nbsp;<i class="fas fa-star"></i></li>
    
  </ul>
  
  </div>
</div>
<div class="clearfix">


</div>
</div>
</div>
            </div>
        )
    }
}
