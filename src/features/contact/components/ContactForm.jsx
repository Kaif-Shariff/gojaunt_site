import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string()
        .matches(/^\d{10}$/, 'Phone number must be 10 digits')
        .required('Phone Number is required'),
});

const InputField = ({label, name, type}) => (
    <div className="flex flex-col">
        <label htmlFor={name} className="text-sm font-medium">{label}</label>
        <Field name={name} type={type} className="border border-gray-300 p-2 rounded-md"/>
        <ErrorMessage name={name} component="div" className="text-red-500 text-sm"/>
    </div>
);

const ContactForm = () => {
    return (
        <Formik
            initialValues={{firstName: '', lastName: '', email: '', phoneNumber: ''}}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({handleSubmit}) => (
                <Form onSubmit={handleSubmit} className="space-y-4 lg:w-[28rem]">
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <InputField label="First Name" name="firstName" type="text"/>
                        <InputField label="Last Name" name="lastName" type="text"/>
                    </div>
                    <InputField label="Email" name="email" type="email"/>
                    <InputField label="Phone Number" name="phoneNumber" type="text"/>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-primary text-white lg:mb-0 py-2 px-4 w-full rounded-lg hover:bg-primary-dark focus:outline-none"
                        >
                            Get in touch
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
