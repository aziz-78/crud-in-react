import React from "react";
import { Link } from "react-router-dom";

const create = ({ handle_submit, password, name, setName, setPassword }) => {
 
    
  return (
    <div>
      
        <div className="mt-5">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            name="submit"
            id="submit"
            value="SEND"
            className="btn btn-outline-primary"
            onClick={handle_submit}
            
          >
            Submit
          </button>
        </div>
      <Link className="btn btn-outline-primary mt-5" to="/">back to home</Link>
    </div>
  );
};

export default create;
