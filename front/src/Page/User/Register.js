import axios from "axios";
import React, { useState, useEffect } from "react";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phonenum, setPhonenum] = useState('');
    const [address, setAdress] = useState('');

    const formData = { email, password, phonenum, address}

    const regiSubmit = (e) => {
        e.preventDefault();

        const onSubmit = () => {

            useEffect( async () => {

                try {
                    const Regi = await axios.post('', {...formData})
                } catch(err) {
                    alert(err)
                }

            },[])

        }

        onSubmit();
    }

    return(
        <div>
            <form>
                <input onChange={(e) => {
                    e.target.setEmail}} />
                <input onChange={(e) => {
                    e.target.setEmail}} />
                <input onChange={(e) => {
                    e.target.setEmail}} />
                <input onChange={(e) => {
                    e.target.setEmail}} />
                <button onClick = {regiSubmit}>회원가입</button>
            </form>
        </div>
    )
}

export default Register;