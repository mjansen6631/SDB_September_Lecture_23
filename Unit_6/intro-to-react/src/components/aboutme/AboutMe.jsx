import React from 'react'

function AboutMe() {

    const city = "Indianapolis";
    const state = "Indiana";


    let styles = {
        ul: {
            textAlign: 'left',
            color: 'red',
        },
        p: {
            fontSize: '20pt'
        }
    } 

return (
    <div>
        <p style={styles.p}>{city}, {state}</p>
        <ul style={styles.ul}>
            <li>Target</li>
            <li>Kitchen</li>
            <li>Denver, Colorado</li>
        </ul>
    </div>
    )
}

export default AboutMe
