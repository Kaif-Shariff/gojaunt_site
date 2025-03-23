import React from "react";
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone Number is required"),
  message: Yup.string().required("Message is required"),
});

const InputField = ({ label, name, type, as }) => (
  <div className="flex flex-col space-y-2">
    <Label htmlFor={name}>{label}</Label>
    <Field name={name} as={as || Input} type={type} className="border rounded p-2 w-full" />
    <ErrorMessage name={name} component="div" className="text-sm text-red-500" />
  </div>
);

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600">Have questions? Fill out the form or find us on the map!</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          <Card className="p-6 md:p-8">
            <Formik
              initialValues={{ firstName: "", lastName: "", email: "", phoneNumber: "", message: "" }}
              validationSchema={validationSchema}
            >
              {({ handleSubmit }) => (
                <Form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="First Name" name="firstName" type="text" />
                    <InputField label="Last Name" name="lastName" type="text" />
                  </div>

                  <InputField label="Email" name="email" type="email" />
                  <InputField label="Phone Number" name="phoneNumber" type="tel" />
                  <InputField label="Message" name="message" type="text" as="textarea" className="h-32" />

                  <Button type="submit" className="w-full mt-4">
                    Send Message
                  </Button>
                </Form>
              )}
            </Formik>
          </Card>

          <motion.div className="w-full h-[300px] md:h-full rounded-lg overflow-hidden " initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <iframe
              title="Our Office Location"
              src="https://www.google.com/maps?q=Surthiwala+building%2C+Mumbai+-+400003&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
