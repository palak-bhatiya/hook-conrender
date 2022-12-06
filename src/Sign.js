import React from 'react';
import './App.css';
import Login from './Login';
import {useState} from 'react';

function Sign(){
    const[log,setlog] = useState(true);
    if(log == false){
        return(
            <Login/>
        )
    }
    return(
        <>
        <form>
          <h2>Sign Up</h2>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                  <i class="fas fa-user"></i>
                  </span>
                </div>
                <input type="text" class="form-control" name="username" placeholder="Username"  />
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-paper-plane"></i>
                  </span>
                </div>
                <input type="email" class="form-control" name="email" placeholder="Email Address" />
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
                <input type="text" class="form-control" name="password" placeholder="Password" required="required" />
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-lock"></i>
                    <i class="fa fa-check"></i>
                  </span>
                </div>
                <input type="text" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
              </div>
            </div>
            
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-lg">Sign Up</button>
              <button type="submit" class="btn btn-primary btn-lg" onClick={()=>setlog(false)}>Login</button>
            </div>
        </form>
        </>
    )
}
export default Sign;