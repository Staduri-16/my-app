import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for submitting!");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
        fontFamily: "Arial",
      }}
    >
      <h1>📞 Contact Page</h1>

      <form
        onSubmit={handleSubmit}
        action="javascript:void(0);"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "300px",
        }}
      >
        <input
          type="text"
          placeholder="Your name"
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid gray",
            fontSize: "16px",
          }}
        />
        <input
          type="email"
          placeholder="Your email"
          required
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid gray",
            fontSize: "16px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007BFF",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Submit
        </button>
      </form>

      <br />

      <Link to="/">
        <button
          style={{
            padding: "8px 16px",
            borderRadius: "5px",
            border: "1px solid #007BFF",
            background: "white",
            color: "#007BFF",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Back to Home
        </button>
      </Link>
    </div>
  );
}
