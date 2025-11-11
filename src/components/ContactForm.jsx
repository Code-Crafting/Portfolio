import { LuSend } from "react-icons/lu";
import EmailInput from "../ui/form/EmailInput";
import InputLabel from "../ui/form/InputLabel";
import TextArea from "../ui/form/TextArea";
import TextInput from "../ui/form/TextInput";
import { useContext } from "react";
import { FormContext } from "../contexts/formContext";
import InputError from "../ui/form/InputError";

const ContactForm = () => {
  const { handleSubmit, errors } = useContext(FormContext);
  const inputCommonStyle =
    "w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg placeholder:text-gary-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all";

  const onSubmit = (data) => console.log(data);

  return (
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
          minLength={10}
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
      <button className="w-full text-lg cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] ">
        <LuSend /> Send Message
      </button>

      <p className="text-sm text-textSecondary text-center">
        I'll get back to you within 24-48 hours 🚀
      </p>
    </form>
  );
};

export default ContactForm;
