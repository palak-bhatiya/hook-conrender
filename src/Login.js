// import React, { useState } from 'react';
import React from 'react';
import './App.css';
import {useState} from 'react';
import Sign from './Sign';
function Login(){
    const[sign,setsign] = useState(false);
    if(sign == true){
        return(
            <Sign/>
        )
    }
    return(
        
        <>
        <form>
          <h2>login</h2>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                  <i class="fas fa-user"></i>
                  </span>
                </div>
                <input type="text" class="form-control" name="username" placeholder="Username" required="required" />
              </div>
            </div>
            <div class="form-group">
              <div class="input-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fa fa-paper-plane"></i>
                  </span>
                </div>
                <input type="email" class="form-control" name="email" placeholder="Email Address" required="required" />
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
              <button type="submit" class="btn btn-primary btn-lg" onClick={()=>setsign(true)}>Login</button>
            </div>
        </form>
        </>
    )
}
export default Login;