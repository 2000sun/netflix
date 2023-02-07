import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactYoutubeExample from '../component/YouTube';
import { useSelector } from 'react-redux';




function ModalWindow() {
    const items = useSelector((state) => state.movie);
    let key = items.key;
    console.log('beatme!!',key);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>


            <Button variant="danger" onClick={handleShow}>
                Watch Trailer
            </Button>


            <Modal className='modal-back' show={show} onHide={handleClose}>
            

             <div className='test'>
             <ReactYoutubeExample videoId={key}/>
                </div>    
           



            </Modal>


        </>
    );
}

export default ModalWindow