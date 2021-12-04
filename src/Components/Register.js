import React, { useState } from 'react'

const Register = () => {
      const [contacts, setContacts] = useState();

    const [addFormData, setAddFormData] = useState({
        email:'',
        password:'',
        retype_password:'',
        Firstname:'',
        LastName:'',
        phonenumber:'',
        Address:'',
        Town:'',
        Region:'',
        ZipCode:''
    })
    const handleAddFormChange = (event) => {
        event.preventDefault();
    
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;
    
        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;
    
        setAddFormData(newFormData);
      };

        const handleAddFormSubmit = (event) => {
            event.preventDefault();
            const newContact = {
        email:addFormData.email,
        password:addFormData.password,
        retype_password:addFormData.retype_password,
        Firstname:addFormData.Firstname,
        LastName:addFormData.LastName,
        phonenumber:addFormData.phonenumber,
        Address:addFormData.Address,
        Town:addFormData.Town,
        Region:addFormData.Region,
        ZipCode:addFormData.ZipCode
    };    
       const newContacts = [...contacts, newContact];
            setContacts(newContacts);
          };

    return (
        <div>
        <form onSubmit={handleAddFormSubmit}>
        <label>email:</label>
        <input type='email' name='email' required='required'  onChange={handleAddFormChange} />
        <br />
        <label>password:</label>
        <input type='password' name='password' required='required'  onChange={handleAddFormChange} />
        <br />
        <label>Retype-password:</label>
        <input type='password' name='retype_password' required='required'  onChange={handleAddFormChange} />
        <br />

        <label>Firstname:</label>
        <input type='text' name='Firstname' required='required'  onChange={handleAddFormChange} />
        <br />

        <label>LastName:</label>
        <input type='text' name='LastName' required='required'  onChange={handleAddFormChange} />
        <br />

        <label>phonenumber:</label>
        <input type='number' name='phonenumber' required='required'  onChange={handleAddFormChange} />
        <br />
        <label>Address:</label>
        <input type='text' name='Address' required='required'  onChange={handleAddFormChange} />
        <br />
        <label>Town:</label>
        <input type='text' name='Town' required='required'  onChange={handleAddFormChange} />
        <br />
        <label>Region:</label>
        <input type='text' name='Region' required='required'  onChange={null} />
        <br />
        <label>Zipcode:</label>
        <input type='text' name='ZipCode' required='required'  onChange={null} />
        <br />
        <input type='submit' required='required' value='register' onChange={null} />
        </form>
        </div>
    )
}

export default Register
