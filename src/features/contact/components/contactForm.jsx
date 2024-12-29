import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phoneNumber: Yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone Number is required'),
    });

    return (
        <div className="p-4">
            <Formik
                initialValues={{firstName: '', lastName: '', email: '', phoneNumber: ''}}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({handleSubmit}) => (
                    <Form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex flex-col md:flex-row md:space-x-4">
                            <div className="flex flex-col">
                                <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                                <Field name="firstName" type="text" className="border border-gray-300 p-2 rounded-md"/>
                                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm"/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                                <Field name="lastName" type="text" className="border border-gray-300 p-2 rounded-md"/>
                                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm"/>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Field name="email" type="email" className="border border-gray-300 p-2 rounded-md"/>
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm"/>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="phoneNumber" className="text-sm font-medium">Phone Number</label>
                            <Field name="phoneNumber" type="text" className="border border-gray-300 p-2 rounded-md"/>
                            <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm"/>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit"
                                    className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark focus:outline-none">
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ContactForm;
