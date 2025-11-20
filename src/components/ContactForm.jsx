import { LuSend } from "react-icons/lu";
import EmailInput from "../ui/form/EmailInput";
import InputLabel from "../ui/form/InputLabel";
import TextArea from "../ui/form/TextArea";
import TextInput from "../ui/form/TextInput";
import { useContext, useState } from "react";
import { FormContext } from "../contexts/formContext";
import InputError from "../ui/form/InputError";
import emailjs from "@emailjs/browser";
import Button from "../ui/Button";
import SentMsgContent from "./SentMsgContent";
import Modal from "../ui/modal/Modal";
import { modalConfig } from "../constants/modalConfig";
import { AnimatePresence } from "motion/react";

const ContactForm = () => {
  const { handleSubmit, errors, reset } = useContext(FormContext);
  const [isSending, setIsSending] = useState(false);
  const [modal, setModal] = useState({
    show: false,
    varient: "success",
  });
  const { title, subtitle, buttonText } = modalConfig[modal.varient];
  const inputCommonStyle =
    "w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg  placeholder:text-gary-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";

  // API Keys
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const onSubmit = async (data) => {
    setIsSending(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        data, //data from RHF
        publicKey
      );
      setModal((prev) => ({ ...prev, show: true }));
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setModal({ show: true, varient: "error" });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <form className="space-y-4 " onSubmit={handleSubmit(onSubmit)}>
        {/* Name Input */}
        <div>
          <InputLabel label="Your Name" htmlFor="userName" />
          <TextInput
            id="userName"
            placeholder="Monojit Sen"
            style={inputCommonStyle}
          />
          {errors.userName && <InputError message={errors.userName.message} />}
        </div>

        {/* Email Input */}
        <div>
          <InputLabel label="Your Email" htmlFor="email" />
          <EmailInput
            id="email"
            placeholder="abc@gmail.com"
            style={inputCommonStyle}
          />
          {errors.email && <InputError message={errors.email.message} />}
        </div>

        {/* Subject Input */}
        <div>
          <InputLabel label="Subject" htmlFor="subject" />
          <TextInput
            id="subject"
            placeholder="Project Inquery"
            style={inputCommonStyle}
            minLength={5}
          />
          {errors.subject && <InputError message={errors.subject.message} />}
        </div>

        {/* Message Textarea */}
        <div>
          <InputLabel label="Message" htmlFor="message" />
          <TextArea
            id="message"
            placeholder="Hi! I'd love to discuss..."
            style={inputCommonStyle}
          />
          {errors.message && <InputError message={errors.message.message} />}
        </div>

        {/* Submit Button */}
        <Button
          width="w-full"
          disabled={isSending ? true : false}
          type="submit"
        >
          {isSending ? (
            <span>Your message is taking off... 🚀</span>
          ) : (
            <div className="flex items-center gap-2">
              <LuSend /> <span>Send Message</span>
            </div>
          )}
        </Button>

        <p className="text-sm 450px:text-[16px] text-textSecondary text-center">
          I'll get back to you within 24-48 hours 🚀
        </p>
      </form>

      <AnimatePresence>
        {modal.show && (
          <Modal>
            <SentMsgContent
              varient={modal.varient}
              title={title}
              subtitle={subtitle}
            >
              <Button
                width="w-full"
                varient={modal.varient}
                onClick={() => setModal((prev) => ({ ...prev, show: false }))}
              >
                {buttonText}
              </Button>
            </SentMsgContent>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactForm;
