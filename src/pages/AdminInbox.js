import axios from "../config/axios";
import React, { useEffect, useState } from "react";
import AdminHeader from "../component/AdminHeader";
import InboxMessage from "../component/AdminInbox/InboxMessage";
import Pagination from "../component/Pagination";
import Modal from '../component/Modal'

function AdminInbox() {
  const [onPage, setOnPage] = useState(1)
  const [numberOfPage, setnumberOfPage] = useState(0)
  const [contactUs, setContactUs] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [modal, setModal] = useState({
    active: false,
    header: '',
    message: '',
    reload: false,
    redirect: '/'
  })

  useEffect(() => {
    try {
      const run = async () => {
        const { data: { contactUs, numberOfPage } } = await axios.get(`/contactUs?offset=${7 * (onPage - 1)}`)
        console.log(`contactUs`, contactUs)
        console.log(`numberOfPage`, numberOfPage)
        setContactUs(contactUs)
        setnumberOfPage(numberOfPage)
      }
      run()
    }
    catch (err) {
      console.log(err.message)
    }
  }, [onPage, refresh])

  return (
    <>
      <Modal modal={modal} setModal={setModal} />
      <AdminHeader />
      <div className='my-5'>
        <div className='container d-flex justify-content-end' style={{ width: "75%" }}>
          <Pagination countPage={numberOfPage} onPage={onPage} setOnPage={setOnPage} />
        </div>
        {contactUs.map(item => (
          <InboxMessage key={item.id} message={item} setOnPage={setOnPage} setRefresh={setRefresh} />
        ))}
      </div>
    </>
  );
}

export default AdminInbox;
