import ContactForm from "./ContactForm";

const FormContainer = () => {
    return (
        <div className="flex lg:justify-center lg:items-center min-h-screen">
            <div className="flex flex-col lg:flex-row w-full max-w-6xl">
                {/* Left Side */}
                <div className="flex-1 px-6 lg:px-12">
                    <div className="mb-8">
                        <h1 className="text-3xl font-semibold">Get in touch</h1>
                        <h3 className="text-lg text-gray-600">Our team would love to hear from you</h3>
                    </div>
                    <ContactForm/>
                </div>
                {/* Right Side */}
                <div
                    className=" w-[30rem] h-[34rem] m-4 hidden lg:flex bg-cover bg-center justify-center items-center rounded-[3rem]"
                    style={{backgroundImage: "url('contactUs.jpg')"}}
                >

                </div>
            </div>
        </div>
    );
};

export default FormContainer;
