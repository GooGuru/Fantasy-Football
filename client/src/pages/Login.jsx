import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useMutation } from '@apollo/client';
// import { LoggedIn_User } from "../utils/mutations";
// import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ username: '', password: ''});
    // const [login, { data }] = useMutation(LoggedIn_User);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState  ({
            ...formState,
            [name]: value,
        });
    };


const handleFormSubmit = async (event) => {
  event.preventDefault();
  console.log(formState);
//   try{
//     const { data } = await login({
//         variables: { ...formState },
//     });

//     Auth.login(data.login.token);
//   } catch (e) {
//     console.error(e);
//   }

  setFormState({
    username: '',
    password: '',
  });
};

  return (
    <div>
      <h1>Login</h1>
      <div>
        {/* {data ? (
          <p>
            <Link to="/team">Link to team page </Link>
          </p>
        ) : ( */}
          <form onSubmit={handleFormSubmit}>
            <input
              className="form-input"
              placeholder="Your Username"
              name="username"
              type="username"
              value={formState.username}
              onChange={handleChange}
            />
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              value={formState.password}
              onChange={handleChange}
            />
            {/* <Link to="/team" > */}
            <button
              className="btn btn-block btn-info"
              style={{ cursor: "pointer" }}
              type="submit"
            >
              Submit
            </button>
            {/* </Link> */}
          </form>
        {/* )} */}
      </div>
    </div>
 );
};

export default Login;
