import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const spring = {
  type: "spring",
  stiffness: 120,
  damping: 18,
};

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone Number is required"),
  message: Yup.string().required("Message is required"),
});

const InputField = ({ label, name, type, as = Input }) => (
    <div className="flex flex-col space-y-2 group">
      <Label
          htmlFor={name}
          className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold"
      >
        {label}
      </Label>

      <Field name={name}>
        {({ field, meta }) => (
            <>
              <motion.div
                  layout
                  className={`border-b pb-3 transition-colors duration-300 ${
                      meta.touched && meta.error
                          ? "border-red-500"
                          : "border-gray-200 focus-within:border-[#3A74FF]"
                  }`}
              >
                <input
                    {...field}
                    type={type}
                    as={as === "textarea" ? undefined : undefined}
                    className="w-full bg-transparent outline-none text-base placeholder:text-gray-300"
                />
              </motion.div>

              <AnimatePresence>
                {meta.touched && meta.error && (
                    <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs text-red-500 mt-1"
                    >
                      {meta.error}
                    </motion.div>
                )}
              </AnimatePresence>
            </>
        )}
      </Field>
    </div>
);

const TextAreaField = ({ label, name }) => (
    <div className="flex flex-col space-y-2">
      <Label
          htmlFor={name}
          className="text-[11px] uppercase tracking-widest text-gray-400 font-semibold"
      >
        {label}
      </Label>

      <Field name={name}>
        {({ field, meta }) => (
            <>
              <motion.div
                  layout
                  className={`border rounded-2xl p-4 transition-colors duration-300 ${
                      meta.touched && meta.error
                          ? "border-red-500"
                          : "border-gray-200 focus-within:border-[#3A74FF]"
                  }`}
              >
            <textarea
                {...field}
                rows="4"
                className="w-full bg-transparent outline-none resize-none text-base placeholder:text-gray-300"
            />
              </motion.div>

              <AnimatePresence>
                {meta.touched && meta.error && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-red-500 mt-1"
                    >
                      {meta.error}
                    </motion.div>
                )}
              </AnimatePresence>
            </>
        )}
      </Field>
    </div>
);

const ContactPage = () => {
  return (
      <div className="bg-white min-h-screen px-6 pt-[120px] pb-24 text-[#111]">
        <div className="max-w-[1300px] mx-auto">

          {/* HEADER */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={spring}
              className="mb-20 max-w-3xl"
          >
            <p className="text-[#3A74FF] text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Get In Touch
            </p>

            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
              Contact <span className="text-[#3A74FF]">Our Team</span>
            </h1>

            <p className="text-gray-400 mt-6 text-sm sm:text-base max-w-xl">
              For general inquiries, partnership discussions, or support requests,
              please submit the form below. Our team will respond within standard
              business hours.
            </p>
          </motion.div>

          {/* CONTENT GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* FORM */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={spring}
            >
              <Card className="border border-gray-100 rounded-3xl p-8 lg:p-10">

                <Formik
                    initialValues={{
                      firstName: "",
                      lastName: "",
                      email: "",
                      phoneNumber: "",
                      message: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                      setTimeout(() => {
                        setSubmitting(false);
                        resetForm();
                      }, 1200);
                    }}
                >
                  {({ isSubmitting }) => (
                      <Form className="space-y-8">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <InputField label="First Name" name="firstName" type="text" />
                          <InputField label="Last Name" name="lastName" type="text" />
                        </div>

                        <InputField label="Email Address" name="email" type="email" />
                        <InputField label="Phone Number" name="phoneNumber" type="tel" />
                        <TextAreaField label="Message" name="message" />

                        <motion.div layout>
                          <motion.button
                              type="submit"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              transition={spring}
                              disabled={isSubmitting}
                              className="w-full h-[56px] bg-[#3A74FF] text-white text-xs font-bold tracking-widest uppercase rounded-xl hover:bg-black transition-colors duration-300 disabled:opacity-60"
                          >
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </motion.button>
                        </motion.div>

                      </Form>
                  )}
                </Formik>

              </Card>
            </motion.div>

            {/* MAP */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={spring}
                className="rounded-3xl overflow-hidden border border-gray-100 h-[350px] lg:h-full"
            >
              <iframe
                  title="Our Office Location"
                  src="https://www.google.com/maps?q=Surthiwala+building%2C+Mumbai+-+400003&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
              />
            </motion.div>

          </div>
        </div>
      </div>
  );
};

export default ContactPage;