const ContactUs = () => {
  return (
    <div
      className="bg-white p-8 m-4 my-32 max-w-md mx-auto rounded shadow-lg"
      data-aos="fade-down" 
      data-aos-duration="1000"
    >
      <h1 className="text-4xl text-center font-semibold text-black mb-10">
        <span className="text-secondary">Contact</span> Us
      </h1>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-md bg-transparent text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-md bg-transparent text-black"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-2 border rounded-md bg-transparent text-black"
            rows="4"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="btn btn-secondary text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
