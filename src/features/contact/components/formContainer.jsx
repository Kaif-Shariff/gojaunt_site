import ContactForm from './ContactForm';

const FormContainer = () => {
    return (
        <div className="flex flex-col lg:flex-row">
            <div className="flex-1 px-4">
                <div className="mb-8">
                    <h1 className="text-2xl font-semibold">Get in touch</h1>
                    <h3 className="text-md lg:text-lg">Our team would love to hear from you</h3>
                </div>
                <ContactForm/>
            </div>
            <div className="bg-purple-500 hidden w-[28rem] h-[30rem] m-4 lg:flex"></div>
        </div>
    );
};

export default FormContainer;
