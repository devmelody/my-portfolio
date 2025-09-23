import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name) {
      newErrors.name = "Name is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!message) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };
  //submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log({ name, email, message });
      alert("Form submitted successfully!");
      //resetting form
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <section>
      <div className="md:grid grid-cols-2 mt-10">
        <div className="md:text-left text-4xl text-center font-semibold mb-2">
          <h1>Have a project?</h1>
          <h1 className="md:ml-8">Let's talk!</h1>
        </div>

        <form onSubmit={handleSubmit}
        action="https://formspree.io/f/xeorjnye"
  method="POST"
        >
          <div>
            <div className="mb-5">
              <label htmlFor="Name" className="block">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-purple-600 outline-purple-600 bg-black rounded-lg w-full p-2"
              ></input>
              {errors.name && (
                <p className="text-sm text-red-500 text-right">{errors.name}</p>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="text"
                id="Email"
                name="Email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-purple-600 outline-purple-600 bg-black rounded-lg w-full p-2"
              ></input>
              {errors.email && (
                <p className="text-sm text-red-500 text-right">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="block">
                Message
              </label>
              <textarea
                type="text"
                id="message"
                name="message"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border rounded-lg border-purple-600 outline-purple-600 bg-black w-full p-2"
              ></textarea>
              {errors.message && (
                <p className="text-sm text-red-500 text-right">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="hover:bg-purple-500 border-purple-500 transition duration-300 py-2 px-7 border rounded-full "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Contact;
