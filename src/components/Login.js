import React, {useState} from "react";
import AuthUser from "./AuthUser";

export default function Login() {

    const {http, setToken} =AuthUser();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const submitForm = () =>{
        /* console.log(email + ' ' + contraseña); */
        http.post('/login', {email:email, password:password}).then((res)=>{
            setToken(res.data.user, res.data.access_token);
        })
    }


    return(
        <div className="row justify-content-center pt-5">
            <div className="col-sm-6">
                <div className="card p-4">

                    <div className="form-group">
                        <label>Email:</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        onChange={e=>setEmail(e.target.value)}
                        id="email" />
                    </div>
                    <div className="form-group mt-3">
                        <label>Contraseña:</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password" 
                        onChange={e=>setPassword(e.target.value)}
                        id="password" />
                    </div>
                    <button type="button" onClick={submitForm} className="btn btn-primary mt-4">Login</button>

                </div>
            </div>
        </div>  
    );
}
