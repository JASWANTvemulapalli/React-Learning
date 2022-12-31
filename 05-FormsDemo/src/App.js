import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useFormik, ErrorMessage } from 'formik';
import Form from './FormYup';

function Forms(props) {

  const formik = useFormik(
    {
      initialValues: {
        Name: '',
        Pass: "",
        mail: "",
      },
      validate(values) { //Errors
        const errors = {};
        if (!values.Name) {
          errors.Name = "Name is required";
        }

        if (!values.Pass) {
          errors.Pass = "Name is required";
        }
        if (!values.mail) {
          errors.mail = "Name is required";
        }
        return errors; //For Name Validation},
      },
      onSubmit: (values) => {
        alert(JSON.stringify(values))
      }

    }
  )


  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='Name'>Name:</label>
        <input type="text" id='Name' name='Name' value={formik.values.Name} onChange={formik.handleChange}
          onBlur={formik.handleBlur} />
        {formik.touched.Name && formik.errors.Name ? <strong>{formik.errors.Name}</strong> : null}

        <br /><br />
        <label htmlFor='Pass'>password:</label>
        <input type="password" id='Pass' name='Pass' value={formik.values.Pass} onChange={formik.handleChange} /><br /><br />
        <label htmlFor='mail'>mailid:</label>
        <input type='email' id='mail' name='mail' value={formik.values.mail} onChange={formik.handleChange} /><br /><br />
        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Using Formik</h1>
      <Forms></Forms>
      <hr />
      <Form></Form>
    </div>
  );
}

export default App;
