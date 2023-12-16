import { useState } from 'react';
export default function FormExample(){
    const [ form, setForm ] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com',
    })
    return(
        <div className='App'>
        <label>First Name:  
        <input type="text" key="1" value={form.firstName} onChange={(e)=> setForm({ ...form, firstName : e.target.value}) }/>
        </label> 
        <br/>
        <label>Last Name:
        <input type="text" key="2" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value})}/>
        </label> 
        <br/> 
        <label>Email:
        <input type="text" key= "3" value={form.email} onChange={(e)=> setForm({ ...form, email: e.target.value})}/>
        </label>  
        <br/>
        <strong>
        {form.firstName}{' '}
        {form.lastName}{' '}
        {form.email}{' '}
        </strong>
        </div>
    )
}