import React,{ Component } from "react";

class ContactBook extends Component{
    constructor(props){
        super(props);
        this.state={contacts:[],fname:"",lname:"",phone:"",editingId:null};
    }
    handleFnameChange=(e)=>{
        this.setState({fname:e.target.value});
    };
    handleLnameChange=(e)=>{
        this.setState({lname:e.target.value});
    };
    handlePhoneChange=(e)=>{
        this.setState({phone:e.target.value});
    };
    addtoContacts=()=>{
        if(this.state.fname==="" || this.state.lname==="" || this.state.phone===""){
            return;
        }
        // if editing, update existing contact instead of adding a new one
        if(this.state.editingId){
            this.setState((prevState)=>({
                contacts: prevState.contacts.map((c)=>
                    c.id === prevState.editingId ? { ...c, fname:this.state.fname, lname:this.state.lname, phone:this.state.phone } : c
                ),
                fname:"",
                lname:"",
                phone:"",
                editingId:null
            }));
            return;
        }
        const newContact={
            id:Date.now(),
            fname:this.state.fname,
            lname:this.state.lname,
            phone:this.state.phone,
            visible:false,
        };
        this.setState((prevState)=>({
            contacts:[newContact,...prevState.contacts],
            fname:"",
            lname:"",
            phone:"",
        }));
    };

    toggleVisible = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.map((y) =>
                y.id === id ? { ...y, visible: !y.visible } : y
            ),
        }));
    };

    deleteContact = (id) => {
        this.setState((prevState) => ({
            contacts: prevState.contacts.filter((y) => y.id !== id),
        }));
    };

    startEdit = (id) => {
        const contact = this.state.contacts.find((y) => y.id === id);
        if(contact){
            this.setState({editingId:id, fname:contact.fname, lname:contact.lname, phone:contact.phone});
        }
    };

    render(){ 
        const {contacts,fname,lname,phone}=this.state;
        return(
            <>
                <input type="text"  value={fname} placeholder="First Name" onChange={this.handleFnameChange}/><br/>
                <input type="text"  value={lname} placeholder="Last Name" onChange={this.handleLnameChange}/><br/>
                <input type="text"  value={phone} placeholder="Phone Number" onChange={this.handlePhoneChange}/><br/>
                <button type="button" onClick={this.addtoContacts}>{this.state.editingId ? 'Save' : 'Add Contact'}</button>
                {this.state.editingId && <button type="button" onClick={() => this.setState({editingId:null,fname:"",lname:"",phone:""})}>Cancel</button>}<br/>
                <ul> 
                    {contacts.map((y)=>(
                        <li key={y.id}>
                            {y.fname}
                            <button type="button" onClick={() => this.toggleVisible(y.id)}>{y.visible ? 'Hide' : 'View'}</button>
                            <button type="button" onClick={() => this.deleteContact(y.id)}>Delete</button>
                            <button type="button" onClick={() => this.startEdit(y.id)}>Update</button>
                            <div style={{display: y.visible ? "block" : "none"}}>
                                {y.lname}. {y.phone}
                            </div>
                        </li>
                    ))} 
                </ul>
            </>
        );
    }
}
export default ContactBook;