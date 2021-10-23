import React from "react";

function Profile() {
  return (
    <>
      <div className="container d-flex">
        <div>profile pic</div>
        <div className="">
          <div>
            <label>USERNAME</label>
            <input />
          </div>
          <div>
            <label>FULLNAME</label>
            <input />
          </div>
          <div>
            <label>PHONE</label>
            <input />
          </div>
          <div>
            <label>EMAIL</label>
            <input />
          </div>
          <div>
            <label>BIRTHDATE</label>
            <input />
          </div>
          <div>
            <label>GENDER</label>
            <input />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
