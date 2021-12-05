import React, { useState } from 'react'
import { countryNames } from './country'
import Select from 'react-select'
import BootstrapTable from 'react-bootstrap-table-next'

import 'bootstrap/dist/css/bootstrap.min.css'

const Register = () => {

    const [userInput, setUserInput] = useState({
        email: '',
        password: '',
        retype_password: '',
        Firstname: '',
        LastName: '',
        phonenumber: '',
        Address: '',
        Town: '',
        Region: '',
        ZipCode: '',
        country: null
    })
    const [records, setRecords] = useState([])
    const handleInputChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUserInput({ ...userInput, [name]: value })
    }
    const handleInputSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...userInput, id: new Date().getTime().toString() }
        setRecords([...records, newRecord])
    }
    console.log(records)

const columns=[
    {datafield: 'Firstname',text: 'First-Name'},
    {datafield: 'phonenumber',text: 'Phonenumber'},
    {datafield: 'email',text: 'Email'},
    {datafield: 'Country',text: 'Country'}
]

    return (
        <div >
            <div className='user_form'>
                <form onSubmit={handleInputSubmit} action=''>
                    <label>email:</label>
                    <input type='email' name='email' required='required'
                        value={userInput.email} id='name' onChange={handleInputChange}
                    />
                    <br />
                    <label>password:</label>
                    <input type='password' name='password' required='required'
                        value={userInput.password} id='password' onChange={handleInputChange} />
                    <br />
                    <label>Retype-password:</label>
                    <input type='password' name='retype_password' required='required'
                        value={userInput.retype_password} id='retype_password' onChange={handleInputChange} />
                    <br />

                    <label>Firstname:</label>
                    <input type='text' name='Firstname' required='required'
                        value={userInput.Firstname} id='Firstname' onChange={handleInputChange} />
                    <br />

                    <label>LastName:</label>
                    <input type='text' name='LastName' required='required'
                        value={userInput.LastName} id='LastName' onChange={handleInputChange} />
                    <br />

                    <label>phonenumber:</label>
                    <input type='number' name='phonenumber' required='required'
                        value={userInput.phonenumber} id='phonenumber' onChange={handleInputChange} />
                    <br />
                    <label>Address:</label>
                    <input type='text' name='Address' required='required'
                        value={userInput.Address} id='Address' onChange={handleInputChange} />
                    <br />
                    <label>Town:</label>
                    <input type='text' name='Town' required='required'
                        value={userInput.Town} id='Town' onChange={handleInputChange} />
                    <br />
                    <label>Region:</label>
                    <input type='text' name='Region' required='required'
                        value={userInput.Region} id='Region' onChange={handleInputChange} />
                    <br />
                    <label>Zipcode:</label>
                    <input type='text' name='ZipCode' required='required'
                        value={userInput.ZipCode} id='ZipCode' onChange={handleInputChange} />
                    <br />
                    <b>Country</b>
                    <select name="Country" required='required' id='Country' onChange={handleInputChange}>
                        <option>---slect country----</option>
                        {
                            countryNames.map((user) => (
                                <option>{user.name}</option>
                            ))
                        }
                    </select>
                    <br />

                    <input type='submit' required='required' />
                </form>
            </div>

            <div>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>phonenumber</th>
                        <th>Email</th>
                        <th>country</th>
                    </tr>
                </thead>
                {
 records.map((curElem) => {
     return (
         <div>
         <tbody>
             <tr>
                 <td> <p>{curElem.Firstname}</p></td>
                 <td> <p>{curElem.phonenumber}</p></td>
                 <td> <p>{curElem.email}</p></td>
                 <td> <p>{curElem.Country}</p></td>
             </tr>
          </tbody>
     </div>             )
                    })
                }
            </div>


        </div>
    )

}

export default Register
