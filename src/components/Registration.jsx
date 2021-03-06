
import {Button, Form} from 'react-bootstrap'
import { useState} from 'react'


const Registration = () => {

    const [selected, setSelected] = useState(false)

    const [data, setData] = useState({
      name: null,
  surname: null,
  email:null,
  password:null,
  passwordConfirm:null,
})
    
      const handleChange = (property, value) => {
          setData({ ...data,[property] : null })
            setData({...data,[property] : value})
                    
          }

const handleSubmit = (event) => {
    event.preventDefault()
    if(data.name && data.surname&& data.email && data.password && data.passwordConfirm) {
        setSelected(true)
    } else {
        setSelected(false)
    }
console.log(data)

}


    return(
        <>
        <h1 className="text-center text-white mb-3">Registration page</h1>
<div style={{width: '50%', margin: 'auto'}}>
        <Form onSubmit={ handleSubmit }>  
     <Form.Group className="mb-3" controlId="formBasicName">
       <Form.Control type="text" placeholder="Name"  onKeyUp={(e) => e.target.value.length >= 2 ?
                handleChange('name', e.target.value): setData({...data, name:null})} required/>
                                 <label htmlFor="formBasicName" className='text-white'>The name should contain at least 2 chars </label>

     </Form.Group>
   
     <Form.Group className="mb-3" controlId="formBasicSurname">
       <Form.Control type="text" placeholder="Surname" onKeyUp={(e) => e.target.value.length >= 3 ?
                handleChange('surname', e.target.value): setData({...data, surname:null})} required/>
                         <label htmlFor="formBasicSurname" className='text-white'>The surname should contain at least 3 chars </label>

     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Control type="email" placeholder="email"  onKeyUp={(e) =>
                handleChange('email', e.target.value)} required/>
                                         <label htmlFor="formBasicEmail" className='text-white'>Insert a valid email </label>

     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Control type="password" placeholder="password"  onKeyUp={(e) => (e.target.value.length >= 8&&e.target.value.match(/\d+/g) && e.target.value.match(/[a-z]/) ) ?
                handleChange('password', e.target.value): setData({...data, password:null})} required/>
         <label htmlFor="formBasicPassword" className='text-white'>The password should contain at least 8 chars, 1 digit, 1 letter</label>
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
       <Form.Control type="password" placeholder="confirm password"  onKeyUp={(e) => e.target.value === data.password ?
                handleChange('passwordConfirm', e.target.value): (setData({...data, password: null})&& setData({...data, passwordConfirm:null}))} required/>
     </Form.Group>
     <Button variant="success" type="submit" className='mb-3'>
      Register
     </Button>
   </Form>
   {!selected && <div><h1 className='text-danger'>No valid data</h1></div>}

   {selected && <div><h1 className='text-white mb-3'>Inserted data</h1>
   <h4 className='text-white'>Name: {data.name}</h4>
   <h4 className='text-white'>Surname: {data.surname}</h4>
   <h4 className='text-white'>Email: {data.email}</h4>

   </div>}
   </div>
        </>
    )
}

export default Registration