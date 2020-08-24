import React, { useState, useEffect, FormEvent } from 'react';
import './App.css';
import {} from 'redux';

function App() {

  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    date: ''
  });

  const [firstErrors, setFirstErrors] = useState('');
  const [lastErrors, setLastErrors] = useState('');
  const [emailErrors, setEmailErrors] = useState('');
  const [dateErrors, setDateErrors] = useState('');
  const [hasErrors, setHasErrors] = useState(false);

  const handleFirstName = (e: FormEvent<HTMLInputElement>) => {
    setState({
        ...state,
        first_name: e.currentTarget.value
    });
  }

  const handleLastName = (e: FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      last_name: e.currentTarget.value
    });
  }

  const handleEmail = (e: FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      email: e.currentTarget.value
    });
  }

  const handleDate = (e: FormEvent<HTMLInputElement>) => {
    setState({
      ...state,
      date: e.currentTarget.value
    });
  }

  const validateFields = () => {
    /* eslint-disable */
    const r = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    /* eslint-enable */
    Object.keys(state).map(k => {
      let msg = "";
      switch(k){
        case 'first_name':
          msg = !state.first_name && state.first_name === "" ? "Required field." : '';
          setFirstErrors(msg)
           break;

        case 'last_name':
          msg = !state.last_name && state.last_name === "" ? "Required field." : '';
          setLastErrors(msg)
          break;

        case 'email':
          console.log(r.test(state.email))
          msg = !state.email && state.email === "" ? "Required field." : r.test(state.email) !== true ? 'Invalid email.' : '';
          setEmailErrors(msg)
          break;

        case 'date':
          msg = !state.date && state.date === "" ? "Required field." : '';
          setDateErrors(msg)
          break;

        default:
          break;
      }
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateFields();

    if (hasErrors){
      return;
    }

    const result = await fetch('http://localhost:3300/', {body: JSON.stringify(state), method: 'POST', headers: {'Content-Type': 'application/json'}});
    console.log(result);
    if (result.status !== 201) {

    } else {  

    }
  }

  useEffect(() => {
    setHasErrors(firstErrors !== '')
  }, [firstErrors]);

  useEffect(() => {
    setHasErrors(lastErrors !== '')
  }, [lastErrors]);

  useEffect(() => {
    setHasErrors(emailErrors !== '')
  }, [emailErrors]);

  useEffect(() => {
    setHasErrors(dateErrors !== '')
  }, [dateErrors]);

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input className={`${firstErrors !== '' ? 'errors' : ''}`} type="text" onChange={handleFirstName}/>
        {firstErrors !== '' ? <div className="error-message">{firstErrors}</div> : null}
        <label>Last Name</label>
        <input className={`${lastErrors !== '' ? 'errors' : ''}`} type="text" onChange={handleLastName}/>
        {lastErrors !== '' ? <div className="error-message">{lastErrors}</div> : null}
        <label>Email</label>
        <input className={`${emailErrors !== '' ? 'errors' : ''}`} type="text" onChange={handleEmail}/>
        {emailErrors !== '' ? <div className="error-message">{emailErrors}</div> : null}
        <label>Date</label>
        <input className={`${dateErrors !== '' ? 'errors' : ''}`} type="date" onChange={handleDate}/>
        {dateErrors !== '' ? <div className="error-message">{dateErrors}</div> : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
