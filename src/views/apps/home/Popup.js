import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { Plus } from "react-feather"
import { useState } from "react"
import VerticalFormIcons from "./VerticalFormIcons"
import "@styles/base/pages/dashboard-ecommerce.scss"
import CheckDeletePopup from "./CheckDeletePopup"
import alergif from '@src/assets/images/icons8-box-important.gif' 
import cancelpng from '@src/assets/images/cancle.gif'
import checkgif from '@src/assets/images/icons8-ok.gif'
const Popup = () => {
  const [addElection, setAddElection] = useState(false)
  const [areYouSure, setAreYouSure] = useState(false)
  const [cancelModal, setCancelModal] = useState(false)
  const [successModal, setSuccessModal] = useState(false)
  return (
    <>

      <Button className='ml-2' color='primary' onClick={() => setAddElection(!addElection)}>
        <Plus size={15} />
        <span className='align-middle'>Add Event</span>
      </Button>
      {/* <Button
        className="ml-2 d-flex pt-1"
        color="primary"
        onClick={() => setAddElection(!addElection)}
      >
        <Plus size={18} />
        <h6 className="align-middle" style={{color:'white'}}>Add Event</h6>
      </Button> */}
      <Modal isOpen={addElection} toggle={() => setAddElection(!addElection)}>
        <ModalHeader toggle={() => setAddElection(!addElection)}>
          Add Event
        </ModalHeader>
        <ModalBody>
          <VerticalFormIcons />
        </ModalBody>
        <ModalFooter style={{display:'flex', width:'100', justifyContent:'space-between'}}>
          <Button color="success" onClick={() => {
              setAreYouSure(!areYouSure)
            setTimeout(() => {
              setAddElection(!addElection)
            }, 400)
          }}>
            Create New Event
          </Button>
          <Button.Ripple  color="danger" type="reset" onClick={() => {
              setAddElection(!addElection)
          }} >
            Cancel
          </Button.Ripple>
        </ModalFooter>
      </Modal>
      {/* areyousure */}
      <Modal isOpen={areYouSure} toggle={() => setAreYouSure(!areYouSure)}>
        <ModalHeader toggle={() => setAreYouSure(!areYouSure)}>
        </ModalHeader>
        <ModalBody style={{textAlign:'center', display:'flex', flexDirection:'column', gap:'10px'}}>
          <img width={85} height={85} style={{display:'block', margin:'auto'}}  src={alergif}></img>
          <h3>Are you sure?</h3>
          <p>You won't be able to revert this!</p>
        </ModalBody>
        <ModalFooter style={{display:'flex', width:'100%', justifyContent:'space-between'}}>
          <Button color="success" onClick={() => {
            setSuccessModal(!successModal)
            setTimeout(() => {
              setAreYouSure(!areYouSure)
            }, 400)
          }}>
            Yes, Create New Event
          </Button>
          <Button.Ripple outline color="danger" type="reset" onClick={() => {
              setCancelModal(!cancelModal)
              setTimeout(() => {
                setAreYouSure(!areYouSure)
              }, 400)
          }}>
            Cancel
          </Button.Ripple>
        </ModalFooter>
      </Modal>
       {/* are you sure */}
       {/* Cancelmodal */}
       <Modal isOpen={cancelModal} toggle={() => setCancelModal(!cancelModal)}>
        <ModalBody style={{textAlign:'center', display:'flex', flexDirection:'column', gap:'10px'}}>
          <img width={150} height={120}  style={{display:'block', margin:'auto'}}  src={cancelpng}></img>
          <h3>Cancelled</h3>
          <p>Re-Create New Event Next Time</p>
        </ModalBody>
        <ModalFooter>
          <Button style={{display:'block', margin:'auto'}} color="primary" onClick={() => {
            setCancelModal(!cancelModal)
           
            }}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
        {/* Cancelmodal */}
        {/* sucessmodal */}
       <Modal isOpen={successModal} toggle={() => setSuccessModal(!successModal)}>
        <ModalBody style={{textAlign:'center', display:'flex', flexDirection:'column', gap:'10px'}}>
          <img width={85} height={85} style={{display:'block', margin:'auto'}}  src={checkgif}></img>
          <h3>New Event is Created</h3>
          <p>A new event have been created</p>
        </ModalBody>
        <ModalFooter>
          <Button style={{display:'block', margin:'auto'}} color="primary" onClick={() => {
            setSuccessModal(!successModal)
            }}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
        {/* sucessmodal */}
    </>
  )
}

export default Popup
