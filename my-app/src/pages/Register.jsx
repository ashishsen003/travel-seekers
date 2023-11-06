import {MdGroup, MdEmail, MdLock} from "react-icons/md"
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import {
    Icon,
    Alert,
    AlertIcon,
    AlertTitle,
  } from '@chakra-ui/react'
import { useNavigate, useLocation } from "react-router-dom";
import { store } from "../Redux/store";
import { login } from "../Redux/AuthReducer/action";
import { useDispatch } from "react-redux";

const initialState = {
    firstname:"",
    lastname:"",
    mobile:"",
    address:"",
    email: "",
    password:""
}

export const Register = () => {
   const [action, setAction] =useState("Login");
   const [data, setData] = useState(initialState);
   const navigate = useNavigate();
   const [showSuccess, setShowSuccess] = useState(false);

   const handleSignup = () =>{
        axios
        .post("https://destination-api00.onrender.com/users", data)
        .then((res) => {
            console.log(res.data);
            console.log("Signup successful");
            setShowSuccess(true);
            setTimeout(() => {
              setShowSuccess(false);
              navigate('/login');
            }, 4000); 
        })
        .catch((err) => {
            console.log(err)
        });
    }
  

   const handleChange = (e) => {
    const {name, value} = e.target;
    setData(prev => {
        return {...prev, [name] : value}
    })
   }


    return (
      <DIV>
        {showSuccess && (
        <Alert status="success">
            <AlertIcon />
            <AlertTitle>Registration Successful</AlertTitle>
        </Alert>
        )}
        <div className="login-box">
            <div className="header">
                <div className="text">Register</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                    <div className="signup-wrap">
                      <div className="input-name">
                        <div className="name">
                            <Icon className="Icon" as={MdGroup} />
                            <input type="text" name="firstname" value={data.firstname} placeholder="Firstname" onChange={handleChange} />
                        </div>
                        <div className="name">
                            <Icon className="Icon" as={MdGroup} />
                            <input type="text" name="lastname" value={data.lastname} placeholder="Lastname" onChange={handleChange} />
                        </div>
                      </div>
                        <div className="signup-input">
                            <Icon className="Icon" as={MdGroup} />
                            <input type="text" name="mobile" value={data.mobile} placeholder="Mobile Number" onChange={handleChange} />
                        </div>
                        <div className="signup-input">
                            <Icon className="Icon" as={MdGroup} />
                            <input type="text" name="address" value={data.address} placeholder="Address" onChange={handleChange} />
                        </div>
                    </div>
                   <div className="input">
                    <Icon className="Icon" as={MdEmail} />
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        placeholder="Email"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <div className="input">
                    <Icon className="Icon" as={MdLock} />
                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        placeholder="Password"
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>

            </div>
            <div className="submit-container">
                    <div>
                      <div className="submit" onClick={handleSignup}>Sign up</div>
                      <br/>
                      <span className="link" onClick={() => navigate("/login")}>Already Registered</span>
                    </div>
            </div>          
        </div>
    </DIV>
    )
}

const DIV = styled.div`
     background: #dedeed;
    background-position:top;
    background-size: cover;
    width: 100%;
    margin:auto;
    padding: 70px;

   .login-box {
     display: flex;
     flex-direction: column;
     margin:auto;
     height: 650px;
     /* margin-top:200px; */
     background: #fff;
     padding-bottom: 30px;
     max-width: 500px; 
     width: 100%;
     /* border: 2px solid black; */
     box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
     border-radius: 15px;

   }

   .header {
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
    width: 100%;
    margin-top: 30px;
   }
   .text {
    color:#125ea6;
    font-size: 48px;
    font-weight: 700;
   }

   .underline {
    width:61px;
    height:6px;
    background:#2884da;
    border-radius:9px;
    
   }
   .inputs {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    gap: ${({action}) => action==="Login" ? '25px' : '10px'};
   }

   .input {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 420px;
    height: ${({action}) => action==="Login" ? '60px' : '50px'};
    background: #d0cfcf;
    border-radius: 6px;
    color: #272626;
   }

   .input .Icon {
    margin:0px 25px;
    font-size: 30px;
    font-weight: 700;
    color: gray;
   }
  
   .signup-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
   }

   .input-name {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 420px;
    height: 50px;
    /* background: #d0cfcf; */
    border-radius: 6px;
    gap: 10px;
   }

   .signup-input {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px auto;
    width: 420px;
    height: 50px;
    background: #d0cfcf;
    border-radius: 6px;
    color: #272626;
   }

   .signup-input .Icon {
    margin:0px 25px;
    font-size: 30px;
    font-weight: 700;
    color: gray;
   }

   .input-name .name {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: auto; */
    height: 50px;
    background: #d0cfcf;
    border-radius: 6px;
    color: #272626;
   }

  .name input {
    width: 70%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    color: #2a2828;
    font-size: 19px;  
   }
   .name .Icon {
    width: 30%;
    margin:0px 3px;
    font-size: 30px;
    font-weight: 700;
    color: gray;
   }
   .input input {
    height: 50px;
    width: 400px;
    background: transparent;
    border: none;
    outline: none;
    color: #474444;
    font-size: 19px;   
   }

   .signup-input input {
    height: 50px;
    width: 400px;
    background: transparent;
    border: none;
    outline: none;
    color: #383535;
    font-size: 19px;   
   }

   .forgot-password {
    text-align: left;
    padding-left: 62px;
    margin-top: 27px;
    color: #797979;
    font-size: 18px;
   }

   .forgot-password span {
    color:#125ea6;
    cursor:pointer;
    text-decoration: underline;
   }

   .submit-container {
    display: flex;
    gap:30px;
    width: 70%;
    /* margin: 60px auto; */
    margin: ${({action}) => action==="Login" ? "60px auto 20px auto" : "30px auto"};
   }

   .submit {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    margin-left: 40px;
    height:59px;
    color: #fff;
    background:var(--secondary-color);
    border-radius: 50px;
    font-size: 20px;
    font-weight:600;
    cursor: pointer;
    }
    .link {
        margin-top: 0px;
    color:#2884da;
    cursor:pointer;
    text-decoration: underline;
   }
    .gray {
        background: #c7c7c7;
        color: #494646;
    }
`