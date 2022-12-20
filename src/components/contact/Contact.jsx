import { HiOutlineMail } from 'react-icons/hi';
import { IoPersonOutline } from 'react-icons/io5';

function Contact() {
  return (
    <div className="w-full h-full bg-primary" id="contact">
      <div className="flex flex-col">
        <h2 className="text-white text-center font-bold text-3xl m-6">
          Get in touch!
        </h2>
        <div className="w-10/11 border border-gray bg-gray-100 rounded-md flex items-center p-2 mb-2 m-6">
          <IoPersonOutline className="mr-2" />
          <input
            type="text"
            className="w-full outline-none"
            placeHolder="Your name"
          ></input>
        </div>

        <div className="w-10/11 border border-gray bg-gray-100 rounded-md flex items-center p-2 mb-2 m-6">
          <HiOutlineMail className="mr-2" />
          <input
            type="email"
            className="w-full outline-none"
            placeHolder="Email"
          ></input>
        </div>

        <div className="w-10/11 border border-gray bg-gray-100 rounded-md flex items-center p-2 mb-2 m-6">
          <input
            type="text"
            className="w-full outline-none"
            placeHolder="Subject"
          ></input>
        </div>

        <div className="w-10/11 h-20 border border-gray bg-gray-100 rounded-md flex items-start p-2 mb-2 m-6">
          <input
            type="text"
            className="w-full outline-none "
         
            placeHolder="Message..."
          ></input>
        </div>
        <div className="w-10/11  m-6 justify-center h-[42px]">
          <button
            type="submit"
            className="bg-btnGreen text-white text-2xl font-bold rounded-md w-full h-full self-center"
            >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
