import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useAuthContext } from "../../context/AuthContext";
import { validateEmail, validateFirstName, validateLastName, validatePhoneNumber } from "../../service/validateForm";

function Profile({ button }) {
  const { state: { user: { id: userId } } } = useAuthContext();
  const [user, setUser] = useState({})
  const [showSpinner, setShowSpinner] = useState(false)
  const history = useHistory();
  useEffect(() => {
    const run = async () => {
      const { data: { user } } = await axios.get(`/users/${userId}`)
      setUser(user)
      setProfileData(cur => ({
        ...cur,
        firstName: user ? user.firstName : '',
        lastName: user ? user.lastName : '',
        email: user ? user.email : '',
        phoneNumber: user?.phoneNumber ? user.phoneNumber : '',
      }))
    }
    run();
  }, [])
  const [profileData, setProfileData] = useState({
    firstName: user ? user.firstName : '',
    lastName: user ? user.lastName : '',
    email: user ? user.email : '',
    phoneNumber: user?.phoneNumber ? user.phoneNumber : '',
    imageUrl: '',
    imageShow: ''
  })
  const [error, setError] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  })
  console.log(`user`, user)

  const handleOnchange = e => {
    if (e.target.id === 'imageUrl') {
      let fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = () => setProfileData(cur => ({ ...cur, imageShow: fileReader.result }));
      setProfileData(cur => ({ ...cur, [e.target.id]: e.target.files[0] }))
    }
    else {
      setProfileData(cur => ({ ...cur, [e.target.id]: e.target.value }))
    }
  }

  const handleClickSubmit = async () => {
    setShowSpinner(true)
    const errorFirstName = validateFirstName(profileData.firstName);
    const errorLastName = validateLastName(profileData.lastName);
    const errorEmail = validateEmail(profileData.email);
    const errorPhoneNumber = profileData.phoneNumber ? validatePhoneNumber(profileData.phoneNumber) : '';

    setError({
      ...error,
      firstName: errorFirstName,
      lastName: errorLastName,
      email: errorEmail,
      phoneNumber: errorPhoneNumber,
    });

    if (errorFirstName || errorLastName || errorEmail || errorPhoneNumber) {
      return;
    }

    const formData = new FormData();
    formData.append('firstName', profileData.firstName)
    formData.append('lastName', profileData.lastName)
    formData.append('email', profileData.email)
    formData.append('phoneNumber', profileData.phoneNumber)
    formData.append('imageUrl', profileData.imageUrl)
    await axios.put('/users', formData)
    setShowSpinner(false)
    alert('Editing Profile Successful')
    history.push('/')
  }
  return (
    <>
      <div className="container">
        <div className="row my-5 mx-1 p-0">
          <div className="col-5" style={{ width: "175px", height: "175px" }}>
            <input onChange={handleOnchange} type="file" id='imageUrl' hidden />
            <label htmlFor="imageUrl">
              <h6
                className="ms-4 my-3"
                style={{ width: "120px", cursor: "pointer" }}
              >
                <div className='d-flex flex-column justify-content-center align-items-center p-0 m-0'>
                  {(profileData?.imageShow || user?.imageUrl) ? <img className='m-0 p-0' style={{ width: "120px", height: "120px", cursor: "pointer" }} src={profileData.imageShow ? profileData.imageShow : user.imageUrl} alt="avartar" className="rounded-circle ms-1" /> : <i style={{ fontSize: '40px' }} class="bi bi-plus-circle"></i>}
                  {(profileData?.imageShow || user?.imageUrl) ? <p className='m-0 p-0 text-middle'>Change picture</p> : <p className='m-0 p-0 text-middle'>Add picture</p>}
                </div>
              </h6>
            </label>


          </div>
          <div className="col-5 col mt-2 ms-5">
            <div className="row mb-3">
              <label className="col fw-bold">FISRTNAME</label>
              <input
                className={`col rounded form-control ${error.firstName ? ' is-invalid' : ''}`}
                style={{
                  backgroundColor: "#FEF3F5",
                  border: "1px solid #FFD6DC",
                  width: "500px",
                  height: "35px",
                }}
                value={profileData.firstName}
                onChange={handleOnchange}
                id='firstName'
              />
              {error.firstName ? <div className=' p-0 invalid-feedback text-end'>{error.firstName}</div> : null}
            </div>
            <div className="row mb-3">
              <label className="col fw-bold">LASTNAME</label>
              <input
                className={`col rounded form-control ${error.lastName ? ' is-invalid' : ''}`}
                style={{
                  backgroundColor: "#FEF3F5",
                  border: "1px solid #FFD6DC",
                  width: "500px",
                  height: "35px",
                }}
                value={profileData.lastName}
                onChange={handleOnchange}
                id='lastName'
              />
              {error.lastName ? <div className='invalid-feedback text-end'>{error.lastName}</div> : null}
            </div>
            <div className="row mb-3">
              <label className="col fw-bold">PHONE</label>
              <input
                className={`col rounded form-control ${error.phoneNumber ? ' is-invalid' : ''}`}
                style={{
                  backgroundColor: "#FEF3F5",
                  border: "1px solid #FFD6DC",
                  width: "500px",
                  height: "35px",
                }}
                value={profileData.phoneNumber}
                onChange={handleOnchange}
                id='phoneNumber'
              />
              {error.phoneNumber ? <div className='invalid-feedback text-end'>{error.phoneNumber}</div> : null}
            </div>
            <div className="row mb-3">
              <label className="col fw-bold">EMAIL</label>
              <input
                className={`col rounded form-control ${error.email ? ' is-invalid' : ''}`}
                style={{
                  backgroundColor: "#FEF3F5",
                  border: "1px solid #FFD6DC",
                  width: "500px",
                  height: "35px",
                }}
                value={profileData.email}
                onChange={handleOnchange}
                id='email'
              />
              {error.email ? <div className='invalid-feedback text-end'>{error.email}</div> : null}
            </div>
            {/* <div className="row mb-3 ">
              <label className="col fw-bold">BIRTHDATE</label>
              <input
                className="col rounded"
                style={{
                  backgroundColor: "#FEF3F5",
                  border: "1px solid #FFD6DC",
                  width: "500px",
                  height: "35px",
                }}
              />
            </div>
            <div className="row mb-3">
              <label className="col fw-bold">GENDER</label>
              <input
                className="col rounded"
                style={{
                  backgroundColor: "#FEF3F5",
                  border: "1px solid #FFD6DC",
                  width: "500px",
                  height: "35px",
                }}
              />
            </div> */}
            <div className="d-flex  align-items-center mt-5">
              <div className="col-4"></div>
              <div className="col-4 d-flex justify-content-center">
                <button
                  className="btn btn-dark"
                  style={{ cursor: "pointer" }}
                  onClick={handleClickSubmit}
                >
                  {button}
                </button>
              </div>
              <div className="col-4">
                {showSpinner &&
                  <div class="spinner-border text-info ms-3" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                }
              </div>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
