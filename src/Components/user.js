import React from 'react'

import { records } from './Register'
const user = ({ records }) => {
    return (
        <div>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>phonenumber</th>
                    <th>address</th>
                    <th>country</th>
                </tr>
            </thead>
            <tbody></tbody>
        </div>
    )
}

export default user
