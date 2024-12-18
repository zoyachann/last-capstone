import React from "react";
import { useForm } from "react-hook-form";

function LoginModal({ closeModal }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    alert("Login Successful");
    closeModal();
  };

  return (
    <div className="container" style={{ padding: '20px', background: 'white', borderRadius: '8px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', width: '400px' }}>
      <h2 className="text-center mb-4">PickBazar</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="customer@demo.com"
            className="form-control"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <div className="text-danger">{errors.email.message}</div>}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="******"
            className="form-control"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <div className="text-danger">{errors.password.message}</div>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-success w-100 mb-3">
          Login
        </button>
      </form>

      {/* Alternative Login */}
      <div className="text-center">
        <p>Or</p>
        <button className="btn btn-primary w-100 mb-2">Login with Google</button>
        <button className="btn btn-secondary w-100">Login with Mobile Number</button>
      </div>

      {/* Close Button */}
      <button className="btn btn-danger w-50 justify-content-center mt-3" onClick={closeModal}>
        Close
      </button>
    </div>
  );
}

export default LoginModal;