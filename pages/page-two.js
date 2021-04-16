import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import {Button, Form, Container, Header} from 'semantic-ui-react'

export default function Page() {
  const api = 'https://sheet.best/api/sheets/f3adf14a-e008-4b7e-bb24-aa436d5b751d'

  const [form, setForm] = useState({
    name: '',
    age: '',
    hobby: '',
    profession: ''
  })

  const changeHandler = (e) =>{
    setForm({...form, [e.target.name]: e.target.value})
  }

  const readData = () =>{
    axios.get(api)
    .then(res=>{
      console.log(res);
    })
    .catch(err=>console.log(err))
  }

  useEffect(() => {
    readData();
  })
  const submitHandler = (e) =>{
    e.preventDefault();
    // e.target.reset();
    console.log(form)


    axios.post(api, form)
    .then(res=>{
      console.log(res);

    })
    .then(()=>{

    })
    .catch(err=>console.log(err))

  }



  return (
      <Container className="container">
        <Head>
          <title>Page two</title>
        </Head>
        <Header as='h2'>Next Google Sheets - Page two</Header>

        <Form className='form' onSubmit={submitHandler}> 
          <Form.Field>
            <label>Name - Page two</label>
            <input placeholder='Enter your name' type='text' name='name' value={form.name} onChange={changeHandler} />
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input placeholder='Enter your Age' type='text' name='age' value={form.age} onChange={changeHandler} />
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input placeholder='Enter your Hobby' type='text' name='hobby' value={form.hobby} onChange={changeHandler} />
          </Form.Field>
          <Form.Field>
            <label>Profession</label>
            <input placeholder='Enter your Profession' type='text' name='profession' value={form.profession} onChange={changeHandler} />
          </Form.Field>

          <Button color='green' inverted  type='submit'>Submit</Button>
          

        </Form>
      
      </Container>

  )
}

