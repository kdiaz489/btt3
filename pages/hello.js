import { useState } from 'react';
import Modal from '../components/Modal';
const hello = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <h1>Hello from web app</h1>
      <p style={{ backgroundColor: 'blue', color: 'white' }}>etc etc etc</p>
      <button style={{ backgroundColor: 'red', color: 'white' }}>Submit</button>
      <button onClick={toggleModal}>Open</button>
      <Modal open={open} toggleModal={toggleModal} />
    </>
  );
};

export default hello;
