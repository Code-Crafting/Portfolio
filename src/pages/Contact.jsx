import { useState } from "react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import DetailsArea from "../ui/DetailsArea";
import SubHeading from "../ui/SubHeading";
import ContactForm from "../components/ContactForm";
import FormContextProvider from "../contexts/formContext";
import { AnimatePresence } from "motion/react";

const Contact = () => {
  const [showContactDetails, setShowContactDetails] = useState(true);

  return (
    <Section label="contact">
      <SectionHeading
        title="contact"
        emoji="📬"
        setterFnc={setShowContactDetails}
      />

      <AnimatePresence initial={false}>
        {showContactDetails && (
          <DetailsArea>
            <p className="text-gray-600 mb-6">
              Have a question or want to work together? Drop me a message!
            </p>

            {/* Contact form */}
            <div className="bg-linear-to-br from-blue-100 to-purple-100 border border-blue-300 rounded-xl p-6 w-2/3">
              <SubHeading text="Send me a message" />

              <FormContextProvider>
                <ContactForm />
              </FormContextProvider>
            </div>
          </DetailsArea>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Contact;
