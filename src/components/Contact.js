// import { useEffect, useState } from "react";
import React ,{useState, useEffect} from "react";
import axios from "axios";



function Contact() {
  const [email, setEmail] = useState()
  const [subject, setSubject] = useState()
  const [message, setMessage] = useState()
  const [get, setGet] = useState([]);      

  const API = 'https://6362424b66f75177ea2a9980.mockapi.io/ToDoList';
  const postData = () => {
                axios.post(API , {
                    email,
                    subject,
                    message,
                }).then( (res) =>{
                    console.log(res);
                    setEmail(res.target.value)
                    setSubject(res.target.value)
                    setMessage(res.target.value)
                })
            }


  return (
    <div>
      {get.map((ele) => localStorage.setItem("id", ele.id))}
    </div>
  );
}

export default Contact;
