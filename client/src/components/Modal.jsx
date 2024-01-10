import { useState } from "react";
// import axios from 'axios';

const Modal = ({ setOpenModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://poda.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Email sent successfully
        console.log("Your code don work werey!");
        alert("Email sent successfully!")
      } else {
        // Handle the case where the email was not sent successfully
        console.error("Failed to send email:", await response.text());
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="flex items-center justify-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg p-6 mx-auto bg-white rounded-md shadow-lg">
            <form>
              <div className="mt-3 sm:flex">
                <div className="text-center sm:text-left w-full">
                  <h4 className="text-lg font-medium text-gray-800">
                    Join Waitlist
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                    Get notifications on the launch of PodA and stay updated on
                    our podcast activities.
                  </p>
                  <div className="mt-4">
                    <label className="block text-gray-800 text-sm font-semibold">
                      Your Name
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 p-4 w-full border rounded-md focus:outline-none font-normal focus:border-primary"
                        placeholder="Enter your name"
                        required
                      />
                    </label>
                  </div>
                  <div className="mt-4">
                    <label className="block text-gray-800 text-sm font-semibold">
                      Email
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 p-4 w-full border rounded-md focus:outline-none font-normal focus:border-primary"
                        placeholder="Enter your email"
                        required
                      />
                    </label>
                  </div>
                  <div className="mt-6 sm:flex items-center justify-center">
                    <div className="mt-2 text-white font-poppins mr-0 sm:mr-3 bg-black p-3 px-7 rounded hover:bg-secondary transition duration-300 ease-in-out">
                      <button type="button" onClick={sendEmail}>
                        Join Waitlist
                      </button>
                    </div>
                    <button
                      type="button"
                      className="mt-2 w-full sm:w-auto  p-2.5 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                      onClick={() => setOpenModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
