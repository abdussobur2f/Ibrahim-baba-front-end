 import React from 'react'
 
import { Modal, Button } from 'react-bootstrap'
import ModalContent from './ModalContent';
 const ProductDisplay = () => {
  
    const [isOpen, setIsOpen] = React.useState(false);
    const showModal = () => {
        setIsOpen(true);
      };
    
      const hideModal = () => {
        setIsOpen(false);
      };

   return (
     <div>
<button onClick={showModal}>Details</button>
      <Modal show={isOpen} onHide={hideModal}>
     <Modal.Body>
            <ModalContent/>
        </Modal.Body>
    
      </Modal>
     </div>
   )
 }
 
 export default ProductDisplay