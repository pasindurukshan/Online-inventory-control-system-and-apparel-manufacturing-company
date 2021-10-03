import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert2';

export default class AccountplanEdit extends Component {


    constructor(props){
        super(props);
        this.state={
            plan:"",
            section:"",
            deci:"",
            requr:"",
            time:""
            
        }
    }

    handleInputChange = (e) => {
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })

    }


    onSubmit = (e) =>{
        e.preventDefault();
        const id = this.props.match.params.id;

        const {plan,section,deci,requr,time,} = this.state;

        const data = {
            plan:plan,
            section:section,
            deci:deci,
            requr:requr,
            time:time,
           
        }


        if(plan =="" )
        {
          swal.fire('WARNING','Add Plan !  ','warning')
        }
        else if(section ==""){
          swal.fire('WARNING','Add Section !','warning')
        }
        else if(deci ==""){
          swal.fire('WARNING','Add Description !','warning')
        }
        else if(requr ==""){
          swal.fire('WARNING','Add  Requirment !','warning')
        }
        else if(time ==""){
         swal.fire('WARNING','Add Time !','warning')
        }






        console.log(data)

        axios.put(`http://localhost:8000/accountplan/updateaccountplan/${id}`,data).then((res)=>{
            if(res.data.success){
               // alert("Post update successfully!!")
                swal.fire("Updated", "update Successfully", "success");
                this.setState(
                {

                    plan:"",
                    section:"",
                    deci:"",
                    requr:"",
                    time:""



                }
                
                )
            }
        })

    }

   
   
   
    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`http://localhost:8000/accountplan/${id}`).then((res) =>{

        if(res.data.success){

            this.setState({
                plan:res.data.accountplan.plan,
                section:res.data.accountplan.section,
                deci:res.data.accountplan.deci,
                requr:res.data.accountplan.requr,
                time:res.data.accountplan.time,
               
            });
            console.log(this.state.accountplan);
        }

        });
    }
   
   
   
   
   
   
    render() {
        return (
            <div className="container">
            <div className="col-md-8 mt-4 mx-auto">
                <h1 className="h3 mb-3 front-weight-normal">Edit Plan</h1>
                <form className="needs-validation" noValidate>
                   
                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Plan</label>
                        <input type = "text"
                        className="form-control"
                        name="plan"
                        placeholder="Enter Plan"
                        value={this.state.plan}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Section</label>
                        <input type = "text"
                        className="form-control"
                        name="section"
                        placeholder="Enter Section"
                        value={this.state.section}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Description</label>
                        <input type = "text"
                        className="form-control"
                        name="deci"
                        placeholder="Enter Description"
                        value={this.state.deci}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}> Requirment </label>
                        <input type = "text"
                        className="form-control"
                        name="requr"
                        placeholder="Enter Requirment"
                        value={this.state.requr}
                        onChange={this.handleInputChange}/>
                    </div>

                    <div className="form-group" style={{marginBottom:'15px'}}>
                        <label style={{marginBottom: '5px'}}>Time Period</label>
                        <input type = "text"
                        className="form-control"
                        name="time"
                        placeholder="Enter Time Period"
                        value={this.state.time}
                        onChange={this.handleInputChange}/>
                    </div>

                    <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                        <i className="far fa-check-squre"></i>
                        &nbsp; Update
                    </button>


                </form>
                
            </div>




   










            </div>
        )
    }
}
