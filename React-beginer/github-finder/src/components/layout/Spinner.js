// racf = react react arrow function
import React, {Fragment} from 'react'

// Custom import
import spinner from './spinner.gif'

const Spinner = () =>
    <Fragment>
        <img src={spinner} alt="Loading..." style={{width:'200px', margin:'auto', display:'block'}}/>
    </Fragment>


export default Spinner
