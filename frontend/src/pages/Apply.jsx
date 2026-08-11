
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

function Apply() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skills: "",
    position: "",
  });

  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Resume Upload + AI Auto Fill
  const handleResumeUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setResume(file);

    const data = new FormData();
    data.append("resume", file);

    try {
      setLoading(true);

      const res = await axios.post(
        "http://127.0.0.1:8000/resume-parse",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      let result = res.data.result;

      if (typeof result === "string") {
        result = result
          .replace("```json", "")
          .replace("```", "")
          .trim();

        result = JSON.parse(result);
      }

      setFormData({
        name: result.name || "",
        email: result.email || "",
        skills: result.skills || "",
        position: result.position || "",
      });
    } catch (err) {
      console.log(err);
      alert("Resume Parsing Failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume) {
      alert("Please upload your resume.");
      return;
    }

    const data = new FormData();

    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("skills", formData.skills);
    data.append("position", formData.position);
    data.append("resume", resume);

    try {
      setLoading(true);

      await axios.post(
        "http://127.0.0.1:8000/apply",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Application Submitted Successfully!");

      setFormData({
        name: "",
        email: "",
        skills: "",
        position: "",
      });

      setResume(null);

      const fileInput = document.getElementById("resumeInput");

      if (fileInput) {
        fileInput.value = "";
      }
    } catch (err) {
      console.log(err);
      alert("Submission Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#0F172A] pt-6 pb-24">
      <div className="max-w-4xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white">
            Apply <span className="text-blue-500">Now</span>
          </h1>

          <p className="text-gray-400 mt-5">
            Join diTrinity Technologies by submitting your application.
          </p>
        </motion.div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#111827] rounded-2xl p-10 border border-gray-700 space-y-6"
        >

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-[#1F2937] text-white outline-none"
            required
          />

          {/* Gmail */}
          <input
            type="email"
            name="email"
            placeholder="Gmail Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-[#1F2937] text-white outline-none"
            required
          />

          {/* Skills */}
          <textarea
            name="skills"
            placeholder="Skills (e.g. Java, Python, React, AI)"
            value={formData.skills}
            onChange={handleChange}
            rows="3"
            className="w-full p-4 rounded-lg bg-[#1F2937] text-white outline-none resize-none"
            required
          />

          {/* Position */}
          <input
            type="text"
            name="position"
            placeholder="Position Applying For"
            value={formData.position}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-[#1F2937] text-white outline-none"
            required
          />

          {/* Resume */}
          <div>
            <label className="text-white block mb-2">
              Upload Resume (PDF / DOC / DOCX)
            </label>

            <input
              id="resumeInput"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeUpload}
              className="w-full text-white"
              required
            />

            {resume && (
              <p className="text-green-400 mt-2">
                ✓ {resume.name}
              </p>
            )}

            {loading && (
              <p className="text-blue-400 mt-3">
                🤖 AI is reading your resume...
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold transition disabled:opacity-50"
          >
            {loading ? "Please Wait..." : "Submit Application"}
          </button>

        </form>
      </div>
    </section>
  );
}

export default Apply;
