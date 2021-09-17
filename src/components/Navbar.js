import React from "react";
import  'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar(){
    return(
        <div>
 <nav class="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
  <a class="navbar-brand" href="#">	Slice of Heaven</a>
 
  <div class="collapse navbar-collapse justify-content-end">
    <ul class="navbar-nav ">
      <li class="nav-item ">
        <a class="nav-link" href="#">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Cart</a>
      </li>
      
      
    </ul>
  </div>
</nav>
        </div>
    );
}