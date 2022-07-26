import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""})
  const [error, setError] = useState([]);
  let history = useHistory();


  const handleSubmit = async (e)=>{
    e.preventDefault();

    const {name, email, password, cpassword} = credentials;
    if (password !== cpassword) {
      props.showAlert("Password and Confirm Password needs to match.", "danger");
      return;
    }
    const response = await fetch("https://ancient-hamlet-43038.herokuapp.com/api/auth/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, password})
    });
    const json = await response.json()
    console.log(json);
    if (json.success){
      // Save the auth token and redirect
      localStorage.setItem('token', json.authtoken); 
      history.push("/");
      props.showAlert("Account Created Successfully", "success");
    }
    else{
      setError(json.errors);
      props.showAlert("Invalid credentials", "danger");
    }
  }

  const onChange = (e)=>{
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 my-5">
            <label htmlFor="name">Name</label>
            <input type="text" onChange={onChange} className="form-control" id="name" aria-describedby="emailHelp" name="name" placeholder="Enter you name" />
            <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email address</label>
            <input type="text" onChange={onChange} className="form-control" id="email" aria-describedby="emailHelp" name="email" placeholder="name@example.com" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" id="password" placeholder="Create a password" onChange={onChange} minLength={5} required />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" className="form-control" name="cpassword" id="cpassword"  onChange={onChange} minLength={5} required />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <div>
          {error.map((v) => (
            <>
             {v['msg']}
            </>
          ))}
        </div>
    </div>
  )
}

export default Signup