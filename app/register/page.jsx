"use client";
import Banner from "../../layouts/components/Banner";
import ImageFallback from "../../layouts/components/ImageFallback";
import { useState, useRef } from "react";

const Contact = () => {
  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const formRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

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

      setFormSuccess("Registered successfully. Please check your email.");
      setFormError(null);

      // Show toast
      setShowToast(true);
      setTimeout(() => setShowToast(false), 7000);

      formRef.current.reset();
    } catch (error) {
      setFormError(
        "There was an error sending your message. Please try again.",
      );
      setFormSuccess(null);
    }
  };

  return (
    <section className="section">
      <Banner title="Register" />
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
              ref={formRef}
              className="contact-form rounded-xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)]"
            >
              <h2 className="h4 mb-6">Register for Event</h2>
              {formError && <p className="text-red-600 mb-4">{formError}</p>}
              <div className="mb-6">
                <label
                  className="mb-2 block font-medium text-dark"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full text-black"
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
                  className="w-full text-black"
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
                  className="w-full text-black"
                  name="tradingLevel"
                  required
                >
                  <option value="">Select your level</option>
                  <option value="BEGINNER">Beginner</option>
                  <option value="INTERMEDIATE">Intermediate</option>
                  <option value="ADVANCE">Expert</option>
                </select>
              </div>
              <button className="text-white bg-custom-green p-1 rounded block w-full">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast */}
      {showToast && (
        <div
          id="toast-simple"
          className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-white bg-custom-green divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow fixed bottom-4 right-4"
          role="alert"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
            <path d="M3 7l9 6l9 -6" />
          </svg>
          <div className="ps-4 text-sm font-normal">{formSuccess}</div>
        </div>
      )}
    </section>
  );
};

export default Contact;
