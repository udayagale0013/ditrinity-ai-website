import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const API_URL = "https://ditrinity-ai-backend.onrender.com";

function Apply() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    position: "",
  });

  const [resume, setResume] = useState(null);
  const [parsing, setParsing] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================================
  // RESUME UPLOAD + AI AUTO FILL
  // =====================================================

  const handleResumeUpload = async (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const fileName = file.name.toLowerCase();

    const validExtension =
      fileName.endsWith(".pdf") ||
      fileName.endsWith(".docx");

    if (!validExtension && !allowedTypes.includes(file.type)) {
      alert("Please upload a PDF or DOCX resume.");
      e.target.value = "";
      return;
    }

    setResume(file);

    const data = new FormData();
    data.append("resume", file);

    try {
      setParsing(true);

      const response = await axios.post(
        `${API_URL}/resume-parse`,
        data,
        {
          timeout: 120000,
        }
      );

      let result = response.data?.result;

      if (!result) {
        throw new Error("No resume data received from AI.");
      }

      // AI sometimes returns JSON inside markdown
      if (typeof result === "string") {
        result = result
          .replace(/```json/gi, "")
          .replace(/```/g, "")
          .trim();

        result = JSON.parse(result);
      }

      setFormData((prev) => ({
        ...prev,
        name: result.name || prev.name,
        email: result.email || prev.email,
        skills: result.skills || prev.skills,
        position: result.position || prev.position,
      }));

      alert("Resume details extracted successfully!");
    } catch (error) {
      console.error("Resume Parsing Error:", error);

      // Do NOT remove the selected resume.
      // User can manually fill the form and submit.

      alert(
        "Resume AI parsing failed. You can still fill the form manually and submit your application."
      );
    } finally {
      setParsing(false);
    }
  };

  // =====================================================
  // SUBMIT APPLICATION
  // =====================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (submitting) return;

    if (!resume) {
      alert("Please upload your resume.");
      return;
    }

    if (!formData.name.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!formData.email.trim()) {
      alert("Please enter your email.");
      return;
    }

    if (!formData.skills.trim()) {
      alert("Please enter your skills.");
      return;
    }

    if (!formData.position.trim()) {
      alert("Please enter the position you are applying for.");
      return;
    }

    const data = new FormData();

    data.append("name", formData.name.trim());
    data.append("email", formData.email.trim());
    data.append("skills", formData.skills.trim());
    data.append("position", formData.position.trim());
    data.append("resume", resume);

    try {
      setSubmitting(true);

      const response = await axios.post(
        `${API_URL}/apply`,
        data,
        {
          timeout: 120000,
        }
      );

      console.log("Application Response:", response.data);

      // Backend application saved successfully
      if (response.data?.success) {
        if (response.data?.email_sent === true) {
          alert(
            "Application Submitted Successfully!\n\nYour application has been received."
          );
        } else {
          alert(
            "Application Submitted Successfully!\n\nYour application was saved, but the email notification could not be sent right now."
          );

          console.warn(
            "Email was not sent:",
            response.data?.email_error
          );
        }

        // Reset form
        setFormData({
          name: "",
          email: "",
          skills: "",
          position: "",
        });

        setResume(null);

        const fileInput =
          document.getElementById("resumeInput");

        if (fileInput) {
          fileInput.value = "";
        }
      } else {
        alert(
          response.data?.message ||
            "Application submission failed."
        );
      }
    } catch (error) {
      console.error(
        "Application Submit Error:",
        error
      );

      if (error.response) {
        console.error(
          "Status:",
          error.response.status
        );

        console.error(
          "Response:",
          error.response.data
        );

        alert(
          error.response.data?.message ||
            "Application submission failed. Please try again."
        );
      } else if (error.request) {
        alert(
          "Unable to connect to the server. Please check your internet connection and try again."
        );
      } else {
        alert(
          "Something went wrong. Please try again."
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#0F172A] pt-6 pb-16 sm:pb-24">

      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Apply{" "}
            <span className="text-blue-500">
              Now
            </span>
          </h1>

          <p className="text-gray-400 mt-4 sm:mt-5 text-sm sm:text-base">
            Join diTrinity Technologies by submitting
            your application.
          </p>
        </motion.div>

        {/* =====================================================
            FORM
        ===================================================== */}

        <form
          onSubmit={handleSubmit}
          className="
            bg-[#111827]
            rounded-2xl
            p-5
            sm:p-8
            md:p-10
            border
            border-gray-700
            space-y-5
            sm:space-y-6
          "
        >

          {/* =================================================
              NAME
          ================================================= */}

          <div>
            <label className="block text-white text-sm mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              className="
                w-full
                p-3.5
                sm:p-4
                rounded-lg
                bg-[#1F2937]
                text-white
                placeholder-gray-500
                outline-none
                border
                border-transparent
                focus:border-blue-500
                transition
              "
              required
            />
          </div>

          {/* =================================================
              EMAIL
          ================================================= */}

          <div>
            <label className="block text-white text-sm mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              className="
                w-full
                p-3.5
                sm:p-4
                rounded-lg
                bg-[#1F2937]
                text-white
                placeholder-gray-500
                outline-none
                border
                border-transparent
                focus:border-blue-500
                transition
              "
              required
            />
          </div>

          {/* =================================================
              SKILLS
          ================================================= */}

          <div>
            <label className="block text-white text-sm mb-2">
              Skills
            </label>

            <textarea
              name="skills"
              placeholder="e.g. Java, Python, React, AI"
              value={formData.skills}
              onChange={handleChange}
              rows={4}
              className="
                w-full
                p-3.5
                sm:p-4
                rounded-lg
                bg-[#1F2937]
                text-white
                placeholder-gray-500
                outline-none
                border
                border-transparent
                focus:border-blue-500
                transition
                resize-none
              "
              required
            />
          </div>

          {/* =================================================
              POSITION
          ================================================= */}

          <div>
            <label className="block text-white text-sm mb-2">
              Position Applying For
            </label>

            <input
              type="text"
              name="position"
              placeholder="e.g. Java Developer"
              value={formData.position}
              onChange={handleChange}
              className="
                w-full
                p-3.5
                sm:p-4
                rounded-lg
                bg-[#1F2937]
                text-white
                placeholder-gray-500
                outline-none
                border
                border-transparent
                focus:border-blue-500
                transition
              "
              required
            />
          </div>

          {/* =================================================
              RESUME
          ================================================= */}

          <div>

            <label className="text-white block mb-2 text-sm">
              Upload Resume
            </label>

            <p className="text-gray-500 text-xs mb-3">
              PDF or DOCX only
            </p>

            <input
              id="resumeInput"
              type="file"
              accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleResumeUpload}
              className="
                w-full
                text-white
                text-sm
                file:mr-3
                file:py-2
                file:px-4
                file:rounded-lg
                file:border-0
                file:bg-blue-600
                file:text-white
                file:cursor-pointer
                cursor-pointer
              "
              required
            />

            {/* Selected resume */}

            {resume && !parsing && (
              <p className="text-green-400 mt-3 text-sm break-all">
                ✓ {resume.name}
              </p>
            )}

            {/* AI parsing */}

            {parsing && (
              <div className="mt-4 rounded-lg bg-blue-500/10 border border-blue-500/20 p-3">

                <p className="text-blue-400 text-sm">
                  🤖 AI is reading your resume...
                </p>

                <p className="text-gray-500 text-xs mt-1">
                  Please wait while we extract your details.
                </p>

              </div>
            )}

          </div>

          {/* =================================================
              SUBMIT
          ================================================= */}

          <button
            type="submit"
            disabled={
              submitting ||
              parsing
            }
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              active:bg-blue-800
              text-white
              py-3.5
              sm:py-4
              rounded-xl
              font-bold
              transition
              disabled:opacity-50
              disabled:cursor-not-allowed
              text-sm
              sm:text-base
            "
          >
            {parsing
              ? "Reading Resume..."
              : submitting
              ? "Submitting Application..."
              : "Submit Application"}
          </button>

          {/* =================================================
              MOBILE NOTE
          ================================================= */}

          <p className="text-center text-gray-500 text-xs">
            You can submit your application from mobile,
            tablet, or desktop.
          </p>

        </form>

      </div>
    </section>
  );
}

export default Apply;