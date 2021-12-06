import React, { useEffect, useState } from 'react'
import { countryNames } from './country'
import BootstrapTable from 'react-bootstrap-table-next'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import paginationFactory from 'react-bootstrap-table2-paginator'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'

const getLocalItems = () => {
    let list = localStorage.getItem('lists')
    if (list) {
        return JSON.parse(localStorage.getItem('lists'))
    }
    else {
        return [];
    }
}


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



    const [records, setRecords] = useState(getLocalItems())
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
    const columns = [
        { dataField: 'Firstname', text: 'FirstName', sort: true, filter: textFilter() },
        { dataField: 'email', text: 'Email', sort: true, filter: textFilter() },
        { dataField: 'phonenumber', text: 'Phone-Number', sort: true, filter: textFilter() },
        { dataField: 'Country', text: 'Country', sort: true, filter: textFilter() }
    ]
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(records))

    }, [records])
    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 10,
        lastPageText: ">>",
        firstPageText: "<<",
        nextPageText: ">",
        prePageText: "<",
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        },
        onSizePerPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPage', sizePerPage);
        }
    })
    return (
        <div >
            <div className='user_form'>
                <form onSubmit={handleInputSubmit} action=''>
                    <tr>
                        <th><label>email:</label></th>
                        <th> <input type='email' name='email' required='required'
                            value={userInput.email} id='name' onChange={handleInputChange}
                        /> </th>
                    </tr>
                    <tr>
                        <th> <label>password:</label></th>
                        <th><input type='password' name='password' required='required'
                            value={userInput.password} id='password' onChange={handleInputChange} />
                            </th>
                    </tr>
                    <tr>

                        <th> <label>Retype-password:</label></th>
                        <th><input type='password' name='retype_password' required='required'
                            value={userInput.retype_password} id='retype_password' onChange={handleInputChange} />
                        </th>
                    </tr>
                    <tr>
                        <th><label>Firstname:</label></th>
                        <th>
                            <input type='text' name='Firstname' required='required'
                                value={userInput.Firstname} id='Firstname' onChange={handleInputChange} />
                            </th>
                    </tr>
                    <tr>
                        <th><label>LastName:</label></th>
                        <th><input type='text' name='LastName' required='required'
                            value={userInput.LastName} id='LastName' onChange={handleInputChange} />
                        </th>
                    </tr>
                    <tr>
                        <th><label>phonenumber:</label></th>
                        <th> <input type='number' name='phonenumber' required='required'
                            value={userInput.phonenumber} id='phonenumber' onChange={handleInputChange} /></th>
                    </tr>
                    <tr>
                        <th>  <label>Address:</label></th>
                        <th><input type='text' name='Address' required='required'
                            value={userInput.Address} id='Address' onChange={handleInputChange} />
                            </th>
                    </tr>
                    <tr>
                        <th> <label>Town:</label></th>
                        <th>
                            <input type='text' name='Town' required='required'
                                value={userInput.Town} id='Town' onChange={handleInputChange} />
                            </th>
                    </tr>
                    <tr>
                        <th> <label>Region:</label></th>
                        <th><input type='text' name='Region' required='required'
                            value={userInput.Region} id='Region' onChange={handleInputChange} />
                            </th>
                    </tr>
                    <tr>
                        <th> <label>Zipcode:</label>
                        </th>
                        <th><input type='text' name='ZipCode' required='required'
                            value={userInput.ZipCode} id='ZipCode' onChange={handleInputChange} />
                            </th>
                    </tr>
                    <tr>
                        <th>
                            <b>Country</b></th>
                        <th><select name="Country" required='required' id='Country' onChange={handleInputChange}>
                            <option>---slect country----</option>
                            {
                                countryNames.map((user) => (
                                    <option>{user.name}</option>
                                ))
                            }
                        </select></th>
                    </tr>
                    <input type='submit' required='required' />
                </form>
            </div>

            <div>
            
                <BootstrapTable
                    bootstrap4
                    keyField='id'
                    columns={columns}
                    data={records}
                    pagination={pagination}
                    filter={filterFactory()}
                />
            </div>

        </div>
    )

}

export default Register
