import { useState } from 'react';
import Modal from './components/Modal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="container">
      <h1>Modal Demo</h1>
      <button onClick={openModal} className="openButton">
        Open Modal
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Title</h2>
        <p>This is the content of the modal.</p>
        <button onClick={closeModal} className="closeButton">
          Close
        </button>
      </Modal>
    </div>
  );
}

export default App;
