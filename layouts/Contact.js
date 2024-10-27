"use client";
import Banner from "./components/Banner";
import ImageFallback from "./components/ImageFallback";
import { useState, useRef } from "react";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title } = frontmatter;

  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(null);

  // Create a reference to the form
  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Collect form data
    const formData = new FormData(event.target);
    const dataToSend = {
      name: formData.get("name"),
      email: formData.get("email"),
      tradingLevel: formData.get("tradingLevel"),
    };

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle success
      setFormSuccess("Registered successfully. Please check your email.");
      setFormError(null);

      // Clear the form fields
      formRef.current.reset();
    } catch (error) {
      // Handle error
      setFormError(
        "There was an error sending your message. Please try again.",
      );
      setFormSuccess(null);
    }
  };

  return (
    <section className="section">
      <Banner title={title} />
      <div className="container">
        <div className="section row items-center justify-center">
          <div className="animate lg:col-5">
            <ImageFallback
              className="mx-auto lg:pr-10"
              src="/images/vectors/contact.png"
              width={497}
              height={397}
              alt=""
            />
          </div>
          <div className="animate lg:col-5">
            <form
              onSubmit={handleSubmit}
              ref={formRef} // Attach the ref here
              className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
            >
              <h2 className="h4 mb-6">Send A Message</h2>
              {formError && <p className="text-red-600 mb-4">{formError}</p>}
              {formSuccess && (
                <p className="text-green-600 mb-4">{formSuccess}</p>
              )}
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="form-input w-full"
                  name="name"
                  placeholder="Full Name"
                  type="text"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="form-input w-full"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="trading-level"
                >
                  Level of Trading
                </label>
                <select
                  className="form-select w-full"
                  name="tradingLevel"
                  required
                >
                  <option value="">Select your level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
              <button className="btn btn-primary block w-full">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
