import React from 'react'

function EmployeeInfo() {
return (
    <React.Fragment>
        <h1>Jack Smith</h1>
        <ul style={{listStyleType: "none", textAlign: "left"}}>
            <li>From: CITY/STATE</li>
            <li>Position: POSITION</li>
            <li>Favorite Food: FOOD</li>
        </ul>
    </React.Fragment>
)
}

export default EmployeeInfo