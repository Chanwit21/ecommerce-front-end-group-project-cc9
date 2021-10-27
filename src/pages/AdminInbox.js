import axios from "../config/axios";
import React, { useEffect, useState } from "react";
import AdminHeader from "../component/AdminHeader";
import InboxMessage from "../component/AdminInbox/InboxMessage";

function AdminInbox() {
  const [onPage, setOnPage] = useState(1)
  useEffect(() => {
    const run = async () => {
      const { data: { contactUs } } = await axios.get(`/contactUs?offset=${7 * (onPage - 1)}`)
      console.log(`contactUs`, contactUs)
    }
    run()
  }, [onPage])
  return (
    <>
      <AdminHeader />
      <div className='my-5'></div>
      <InboxMessage />
      <InboxMessage />
      <InboxMessage />
      <InboxMessage />
      <InboxMessage />
      <InboxMessage />
      <InboxMessage />
      <div className='my-5'></div>
    </>
  );
}

export default AdminInbox;
