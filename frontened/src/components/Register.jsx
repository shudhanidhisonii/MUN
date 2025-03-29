import React, { useState } from "react";
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://gzesnriebmpgnwvzrvyd.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6ZXNucmllYm1wZ253dnpydnlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyMTgzNjAsImV4cCI6MjA1ODc5NDM2MH0.EPA7uGjOvg8vzEMin71wSEJ9ssAk9tarSELknmXxVEk')

const Register = () => {
  const initialFormData = {
    name: "",
    year: "",
    phone: "",
    institute: "",
    email: "",
    branch: "",
    committee1: "",
    portfolio1_1: "",
    portfolio1_2: "",
    portfolio1_3: "",
    committee2: "",
    portfolio2_1: "",
    portfolio2_2: "",
    portfolio2_3: "",
    experience: "",
    referral: "",
    transaction: "",
    paymentScreenshot: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    // Validate required fields (except branch and referral)
    Object.entries(formData).forEach(([key, value]) => {
      if (
        !value &&
        key !== "branch" &&
        key !== "referral" &&
        key !== "paymentScreenshot"
      ) {
        newErrors[key] = "This field is required";
      }
    });

    if (!formData.paymentScreenshot) {
      newErrors.paymentScreenshot = "Payment screenshot is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      // Process the form here
      try {
        let paymentScreenshotUrl = null;

        // Upload file to Supabase Storage
        if (formData.paymentScreenshot) {
            const file = formData.paymentScreenshot;
            const filePath = `screenshots/${Date.now()}_${formData.name}_${formData.phone}_${file.name}`;
            const { data, error } = await supabase.storage
                .from("screenshots") // Bucket name
                .upload(filePath, file);

            if (error) throw error;

            const res = await supabase
            .storage
            .from('screenshots')
            .getPublicUrl(filePath)

            console.log(res);

            paymentScreenshotUrl = res.data.publicUrl; // File path in storage
        }

        // Insert data into Supabase
        const { data, error } = await supabase.from("registrations").insert([
            {
                ...formData,
                paymentScreenshot: paymentScreenshotUrl,
            },
        ]);

        if (error){
          
          if(error.code == "23505"){
            //Duplicate key
            alert("User already exists.")
            return;
          }
          console.log(error);
        
        } 
          
        alert("User Registered Successfully!");
    } catch (error) {
        console.error("Error inserting data:", error.message);
        alert("Registration Failed");
    }

    } else {
      alert("Please fill in all required fields.");
    }
  };

  const inputStyles = (field) =>
    `w-full px-4 py-3 border rounded-md focus:ring-2 focus:outline-none ${
      errors[field]
        ? "border-red-500 focus:ring-red-500"
        : "border-gray-300 focus:ring-[#9a7e2f]"
    }`;

  const labelStyles = "block text-gray-700 font-medium mb-2";

  return (
    <div className="bg-white py-36 px-6 md:px-20 flex justify-center">
      <div className="max-w-4xl w-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] border-t-8 border-[#9a7e2f] rounded-lg p-10 md:p-14 relative overflow-hidden">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#062045] drop-shadow-md text-center mb-8">
          Delegate Registration
        </h2>

        {/* Membership Fee Info */}
        <p className="text-lg md:text-xl text-gray-700 text-center mb-8">
          External Delegate Fee:{" "}
          <span className="font-semibold text-[#9a7e2f]">Rs 1600</span>
          <br />
          Internal Delegate Fee:{" "}
          <span className="font-semibold text-[#9a7e2f]">Rs 500</span>
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className={labelStyles}>Name 📝</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className={inputStyles("name")}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Year */}
          <div>
            <label className={labelStyles}>Year 🎓</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className={inputStyles("year")}
            >
              <option value="">Select Year</option>
              <option>1st</option>
              <option>2nd</option>
              <option>3rd</option>
              <option>4th</option>
            </select>
            {errors.year && <p className="text-red-500 text-sm mt-1">{errors.year}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className={labelStyles}>Phone No. 📞</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className={inputStyles("phone")}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Institute */}
          <div>
            <label className={labelStyles}>Institute 🏫</label>
            <input
              type="text"
              name="institute"
              placeholder="Enter your institute name"
              value={formData.institute}
              onChange={handleChange}
              className={inputStyles("institute")}
            />
            {errors.institute && <p className="text-red-500 text-sm mt-1">{errors.institute}</p>}
          </div>

          {/* Email */}
          <div>
            <label className={labelStyles}>Email 📧</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className={inputStyles("email")}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Branch */}
          <div>
            <label className={labelStyles}>Branch 🏢</label>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className={inputStyles("branch")}
            >
              <option value="">Select Branch</option>
              <option>CSE</option>
              <option>CS</option>
              <option>CS IT</option>
              <option>CSE AI</option>
              <option>AIML</option>
              <option>IT</option>
              <option>ECE</option>
              <option>ME</option>
            </select>
          </div>

          {/* 1st Committee Preference */}
          <div className="md:col-span-2">
            <label className={labelStyles}>1st Committee Preference 🏛️</label>
            <select
              name="committee1"
              value={formData.committee1}
              onChange={handleChange}
              className={inputStyles("committee1")}
            >
              <option value="">Select Committee</option>
              <option>UNGA</option>
              <option>UNHRC</option>
              <option>UNEP</option>
              <option>AIPPM</option>
            </select>
            {errors.committee1 && (
              <p className="text-red-500 text-sm mt-1">{errors.committee1}</p>
            )}
          </div>

          {/* Portfolio 1st Committee */}
          {["portfolio1_1", "portfolio1_2", "portfolio1_3"].map((field, index) => (
            <div key={field}>
              <label className={labelStyles}>Portfolio {index + 1} 🗂️</label>
              <input
                type="text"
                name={field}
                placeholder={`Enter Portfolio Preference ${index + 1}`}
                value={formData[field]}
                onChange={handleChange}
                className={inputStyles(field)}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          {/* 2nd Committee Preference */}
          <div className="md:col-span-2">
            <label className={labelStyles}>2nd Committee Preference 🏛️</label>
            <select
              name="committee2"
              value={formData.committee2}
              onChange={handleChange}
              className={inputStyles("committee2")}
            >
              <option value="">Select Committee</option>
              <option>UNGA</option>
              <option>UNHRC</option>
              <option>UNEP</option>
              <option>AIPPM</option>
            </select>
            {errors.committee2 && (
              <p className="text-red-500 text-sm mt-1">{errors.committee2}</p>
            )}
          </div>

          {/* Portfolio 2nd Committee */}
          {["portfolio2_1", "portfolio2_2", "portfolio2_3"].map((field, index) => (
            <div key={field}>
              <label className={labelStyles}>Portfolio {index + 1} 🗂️</label>
              <input
                type="text"
                name={field}
                placeholder={`Enter Portfolio Preference ${index + 1}`}
                value={formData[field]}
                onChange={handleChange}
                className={inputStyles(field)}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}
        </form>

        {/* NEW ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Prior MUN Experience */}
          <div>
            <label className={labelStyles}>Prior MUN Experience 📝</label>
            <input
              type="text"
              name="experience"
              placeholder="Your prior MUN experience"
              value={formData.experience}
              onChange={handleChange}
              className={inputStyles("experience")}
            />
            {errors.experience && (
              <p className="text-red-500 text-sm mt-1">{errors.experience}</p>
            )}
          </div>

          {/* Referral ID (Optional) */}
          <div>
            <label className={labelStyles}>
              Referral ID 🆔 <span className="text-sm text-gray-400">(Optional)</span>
            </label>
            <input
              type="text"
              name="referral"
              placeholder="Enter referral ID (if any)"
              value={formData.referral}
              onChange={handleChange}
              className={inputStyles("referral")}
            />
          </div>

          {/* Transaction Number */}
          <div className="md:col-span-2">
            <label className={labelStyles}>Transaction Number 💳</label>
            <input
              type="text"
              name="transaction"
              placeholder="Enter transaction number"
              value={formData.transaction}
              onChange={handleChange}
              className={inputStyles("transaction")}
            />
            {errors.transaction && (
              <p className="text-red-500 text-sm mt-1">{errors.transaction}</p>
            )}
          </div>
        </div>

        {/* QR Code */}
        <div className="flex justify-center mt-12">
          <div className="w-40 h-40 border-2 border-[#9a7e2f] rounded-xl flex justify-center items-center">
            <img
              src="QR.jpeg"
              alt="QR Code"
              className="w-full h-full object-contain p-2"
            />
          </div>
        </div>

        <p className="text-center text-gray-600 mt-4 text-sm">
          Scan to pay Delegate Fee
        </p>

        {/* Payment Screenshot Upload */}
        <div className="mt-12">
          <label className={`${labelStyles} flex items-center gap-2`}>
            Payment Screenshot
          </label>

          <div
            className={`border-2 ${
              errors.paymentScreenshot ? "border-red-500" : "border-gray-300"
            } border-dashed rounded-md p-6 text-center`}
          >
            <label
              htmlFor="payment-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <svg
                className="w-12 h-12 text-[#9a7e2f] mb-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16v-8m0 0l-3 3m3-3l3 3m4 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4"
                />
              </svg>
              <span className="text-[#9a7e2f] font-medium">Upload a file</span>
              <span className="text-xs text-gray-500">
                PNG, JPG, GIF up to 10MB
              </span>
              <input
                id="payment-upload"
                name="paymentScreenshot"
                type="file"
                onChange={handleChange}
                className="hidden"
                accept="image/png, image/jpeg, image/gif"
              />
            </label>
            {errors.paymentScreenshot && (
              <p className="text-red-500 text-sm mt-1">
                {errors.paymentScreenshot}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-10">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#062045] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-[#866c29] transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
