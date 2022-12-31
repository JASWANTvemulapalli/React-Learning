import React from 'react';
import { useFormik, ErrorMessage } from 'formik';
import * as YUP from 'yup';
function Form() {


    const formik = useFormik(
        {
            initialValues: {
                FirstName: '',
                LastName: '',
                Email: '',
                PhNumber: ''
            },
            validation(values) {
                const error = {};
                if (values.FirstName == null) {
                    error.FirstName = "FirstName is Required";
                }
                if (values.LastName == null) {
                    error.LastName = "LastName is Required";
                }
                if (values.Email == null) {
                    error.Email = "Email is Required";
                }
                if (values.Number == null) {
                    error.Number = "Number is Required";
                }
                if (values.Number.length < 10) {
                    error.Number = "Number should be of 10 digits";
                }
                return (error);

            },
            // validationSchema: YUP.object({
            //     FirstName: YUP.string().required('is required'),
            //     LastName: YUP.string().required('is required'),
            //     Email: YUP.string().required("It is required"),
            //     PhNumber: YUP.string().required("It is required").max(10),
            // }),
            onSubmit: (values) => {
                alert(JSON.stringify(values));
            }
        }
    )


    return (
        <div>
            <h1>Using the </h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor='fname'>FirstName:</label>
                    <input type='text' id='fname' name='FirstName' {...formik.getFieldProps('FirstName')} />
                </div>
                <div>
                    <label htmlFor='lname'>LastName:</label>
                    <input type='text' id='lname' name='LastName' {...formik.getFieldProps('LastName')} />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='Email' {...formik.getFieldProps('Email')} />
                </div>
                <div>
                    <label htmlFor='number'>PhNumber:</label>
                    <input type='number' id='number' name='PhNumber' {...formik.getFieldProps('Number')} />
                </div>
                <div>
                    <button type='submit' >Submit</button>
                </div>
            </form>
        </div>
    )
}


export default Form;