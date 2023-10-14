import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="text-black container mx-auto my-32">
      <h1 className="text-4xl text-center">Testimonials</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="border p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5 mb-2">
                <div className="avatar">
                  <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://i.pinimg.com/originals/7d/34/d9/7d34d9d53640af5cfd2614c57dfa7f13.png" />
                  </div>
                </div>
                <h4 className="text-xl font-medium">
                  {testimonial.customer_name}
                </h4>
              </div>
              <p className="flex text-yellow-500">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </p>
            </div>
            <p className="text-justify">{testimonial.testimonial_text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
