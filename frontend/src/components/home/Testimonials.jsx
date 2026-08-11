import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState(3);

  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: 5,
    review: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const API_URL = "http://127.0.0.1:8000";

  // Load Reviews
  useEffect(() => {
    async function loadReviews() {
      try {
        const res = await axios.get(`${API_URL}/reviews`);
        setReviews(res.data);
      } catch (error) {
        console.error(error);
      }
    }

    loadReviews();
  }, []);

  // Form Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Review
  const submitReview = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setSuccess("");

      await axios.post(`${API_URL}/reviews`, {
        name: form.name,
        email: form.email,
        rating: Number(form.rating),
        review: form.review,
      });

      const res = await axios.get(`${API_URL}/reviews`);

      setReviews(res.data);

      // New review submit झाल्यावर first 3 reviews दाखव
      setVisibleReviews(3);

      setForm({
        name: "",
        email: "",
        rating: 5,
        review: "",
      });

      setSuccess("Thank you for your valuable review!");

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // Load More
  const handleLoadMore = () => {
    setVisibleReviews((prev) => prev + 3);
  };

  return (
    <section className="bg-[#0B1220] py-10">

      {/* ================================= */}
      {/* HEADING */}
      {/* ================================= */}

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          What Our{" "}
          <span className="text-blue-500">
            Clients Say
          </span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
          Trusted by businesses worldwide for AI, Cloud, ERP and
          Digital Transformation solutions.
        </p>
      </motion.div>


      {/* ================================= */}
      {/* REVIEW FORM */}
      {/* ================================= */}

      <div className="bg-[#111827] border border-gray-700 rounded-2xl p-6 mt-8 mx-6">

        <h3 className="text-2xl font-bold text-white mb-5">
          Write a Review
        </h3>

        <form onSubmit={submitReview}>

          {/* NAME + EMAIL */}

          <div className="grid md:grid-cols-2 gap-5">

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="
                bg-[#0B1220]
                border border-gray-700
                rounded-lg
                px-4
                py-3
                text-white
                w-full
                focus:outline-none
                focus:border-blue-500
              "
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="
                bg-[#0B1220]
                border border-gray-700
                rounded-lg
                px-4
                py-3
                text-white
                w-full
                focus:outline-none
                focus:border-blue-500
              "
            />

            {/* RATING */}

            <select
              name="rating"
              value={form.rating}
              onChange={handleChange}
              className="
                bg-[#0B1220]
                border border-gray-700
                rounded-lg
                px-4
                py-3
                text-white
                w-full
                focus:outline-none
                focus:border-blue-500
              "
            >
              <option value={5}>
                ⭐⭐⭐⭐⭐ Excellent
              </option>

              <option value={4}>
                ⭐⭐⭐⭐ Very Good
              </option>

              <option value={3}>
                ⭐⭐⭐ Good
              </option>

              <option value={2}>
                ⭐⭐ Fair
              </option>

              <option value={1}>
                ⭐ Poor
              </option>
            </select>

            <div></div>

          </div>


          {/* REVIEW TEXT */}

          <textarea
            name="review"
            value={form.review}
            onChange={handleChange}
            placeholder="Write your review..."
            required
            rows={4}
            className="
              bg-[#0B1220]
              border border-gray-700
              rounded-lg
              px-4
              py-3
              text-white
              w-full
              mt-5
              focus:outline-none
              focus:border-blue-500
            "
          />


          {/* SUBMIT BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-semibold
              px-8
              py-3
              rounded-lg
              mt-5
              transition
            "
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>


          {/* SUCCESS MESSAGE */}

          {success && (
            <p className="text-green-400 mt-4">
              {success}
            </p>
          )}

        </form>

      </div>


      {/* ================================= */}
      {/* REVIEWS */}
      {/* ================================= */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mx-6">

        {reviews
          .slice(0, visibleReviews)
          .map((item, index) => (

            <motion.div
              key={item.id || index}

              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}

              viewport={{
                once: true,
              }}

              whileHover={{
                y: -8,
                scale: 1.02,
              }}

              className="
                bg-[#111827]
                border border-gray-700
                rounded-2xl
                p-6
                hover:border-blue-500
                transition-all
                duration-300
              "
            >

              {/* STARS */}

              <div className="flex gap-1 text-yellow-400 mb-4">

                {[1, 2, 3, 4, 5].map((star) => (

                  <FaStar
                    key={star}
                    className={
                      star <= Number(item.rating)
                        ? "text-yellow-400"
                        : "text-gray-600"
                    }
                  />

                ))}

              </div>


              {/* REVIEW */}

              <p className="text-gray-300 leading-7 italic">
                "{item.review}"
              </p>


              {/* USER */}

              <div className="mt-6">

                <h3 className="text-white text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-blue-400 mt-1">
                  {item.email
                    ? item.email
                    : "Verified Customer"}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {item.created_at}
                </p>

              </div>

            </motion.div>

          ))}


        {/* NO REVIEWS */}

        {reviews.length === 0 && (

          <div className="col-span-1 md:col-span-3 text-center">

            <p className="text-gray-400">
              No customer reviews yet.
            </p>

          </div>

        )}

      </div>


      {/* ================================= */}
      {/* LOAD MORE */}
      {/* ================================= */}

      {visibleReviews < reviews.length && (

        <div className="flex justify-center mt-8">

          <button
            onClick={handleLoadMore}
            className="
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-semibold
              px-8
              py-3
              rounded-lg
              transition-all
              duration-300
            "
          >
            Load More
          </button>

        </div>

      )}

    </section>
  );
}

export default Testimonials;