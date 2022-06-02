// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import axios from 'axios'
import { MoreVertical, Edit, FileText, Archive, Trash, Check, Eye } from 'react-feather'
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import * as Icons from 'react-feather'
import { useState } from "react"

// ** Vars
const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

const status = {
  1: { title: 'Current', color: 'light-primary' },
  2: { title: 'Professional', color: 'light-success' },
  3: { title: 'Rejected', color: 'light-danger' },
  4: { title: 'Resigned', color: 'light-warning' },
  5: { title: 'Applied', color: 'light-info' }
}

export let data

// ** Get initial Data
axios.get('/api/datatables/initial-data').then(response => {
  data = response.data
})

// ** Table Zero Config Column
export const basicColumns = [
  {
    ID: 1,
    name: 'Serial.no',
    selector: 'id',
    sortable: true,
    maxWidth: '100px'
  },
  {
    name: 'Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '225px'
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '310px'
  },
  {
    name: 'Contact no.',
    selector: 'contact',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Age',
    selector: 'age',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Salary',
    selector: 'salary',
    sortable: true,
    minWidth: '175px'
  }
]

// ** Expandable table component
const ExpandableTable = ({ data }) => {
  
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='font-weight-bold'>City:</span> {data.city}
      </p>
      <p>
        <span className='font-weight-bold'>Experience:</span> {data.experience}
      </p>
      <p className='m-0'>
        <span className='font-weight-bold'>Post:</span> {data.post}
      </p>
    </div>
  )
}

// ** Table Common Column
export const columns = [
  {
    name: 'Name',
    selector: 'full_name',
    sortable: true,
    minWidth: '250px',
    cell: row => (
      <div className='d-flex align-items-center'>
        {row.avatar === '' ? (
          <Avatar color={`light-${states[row.status]}`} content={row.full_name} initials />
        ) : (
          <Avatar img={require(`@src/assets/images/portrait/small/avatar-s-${row.avatar}`).default} />
        )}
        <div className='user-info text-truncate ml-1'>
          <span className='d-block font-weight-bold text-truncate'>{row.full_name}</span>
          <small>{row.post}</small>
        </div>
      </div>
    )
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '250px'
  },
  {
    name: 'Date',
    selector: 'start_date',
    sortable: true,
    minWidth: '150px'
  },

  {
    name: 'Salary',
    selector: 'salary',
    sortable: true,
    minWidth: '150px'
  },
  {
    name: 'Age',
    selector: 'age',
    sortable: true,
    minWidth: '100px'
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    minWidth: '150px',
    cell: row => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
        </Badge>
      )
    }
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: row => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pr-1' tag='span'>
              <MoreVertical size={20} />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <FileText size={15} />
                <span className='align-middle ml-50'>Detailssss</span>
              </DropdownItem>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Archive size={15} />
                <span className='align-middle ml-50'>Archive</span>
              </DropdownItem>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Trash size={15} />
                <span className='align-middle ml-50'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Edit size={15} />
        </div>
      )
    }
  }
]

// ** Table Intl Column
export const multiLingColumns = [
  {
    name: 'Sl. no.',
    selector: 'id',
    sortable: true,
    maxWidth: '100px'
  },
  {
    name: 'Name',
    selector: 'full_name',
    sortable: true,
    maxWidth: '150px'
   
  },
  // {
  //   name: 'Position',
  //   selector: 'post',
  //   sortable: true,
  //   minWidth: '250px'
  // },
  {
    name: 'Stall.no.',
    selector: 'stall_no',
    sortable: true,
    maxWidth: '15px'
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    minWidth: '100px'
  },
  // {
  //   name: 'Date',
  //   selector: 'start_date',
  //   sortable: true,
  //   minWidth: '150px'
  // },

  // {
  //   name: 'Salary',
  //   selector: 'salary',
  //   sortable: true,
  //   minWidth: '150px'
  // },
  {
    name: 'Password',
    selector: 'password',
    sortable: true,
    minWidth: '10px'
  },

  {
    name: 'Contact No.',
    selector: 'contact',
    sortable: true,
    minWidth: '200px'
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    minWidth: '150px'
    // cell: row => {
    //   return (
    //     <Badge color={status[row.status].color} pill>
    //       {status[row.status].title}
    //     </Badge>
    //   )
    // }
  },
  // {
  //   name: 'Status',
  //   selector: 'status',
  //   sortable: true,
  //   minWidth: '150px',
  //   cell: row => {
  //     return (
  //       <Badge color={status[row.status].color} pill>
  //         {status[row.status].title}
  //       </Badge>
  //     )
  //   }
  // },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: row => {
      const [basicModal, setBasicModal] = useState(false)
      return (
        <>
        <div className='d-flex'>
        {/* <div><a className='btn' style={{color:"white", backgroundColor:"red"}} onClick={() => setBasicModal(!basicModal)}>Delete</a></div> */}
        <UncontrolledDropdown>
            <DropdownToggle className='pr-1' tag='span'>
              {/* <MoreVertical onClick={() => setBasicModal(!basicModal)} size={15} /> */}
              <Edit onClick={() => setBasicModal(!basicModal)}  size={20}  />
            </DropdownToggle>
           
          </UncontrolledDropdown>
          {/* <Edit  size={15} /> */}
          <Eye  size={20} />
        </div>
        <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
          <ModalHeader toggle={() => setBasicModal(!basicModal)}>Member List</ModalHeader>
          <ModalBody className='d-flex justify-content-center'>
          <div><Icons.AlertCircle size={70}/></div> <br /> <br /> 
          </ModalBody>
          <div className='d-flex justify-content-center'><h2>Are You Sure</h2></div>
          <div className='d-flex justify-content-center'><p>You won't be able to revert this!</p></div>
          
          <ModalFooter>
          <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
            
          <Button.Ripple className='d-flex justify-content-center' style={{color:"white", backgroundColor:"red"}} outline onClick={() => setBasicModal(!basicModal)}>
            Yes, Approved it!
          </Button.Ripple>
          <Button.Ripple className='d-flex justify-content-center' color='primary' outline onClick={() => setBasicModal(!basicModal)} >
            Cancle
          </Button.Ripple>
          </div>  
          </ModalFooter>
        </Modal> 
        </>
      )
    }
  }
]

// ** Table Server Side Column
// export const serverSideColumns = [
//   {
//     name: 'Full Name',
//     selector: 'full_name',
//     sortable: true,
//     minWidth: '225px'
//   },
//   {
//     name: 'Email',
//     selector: 'email',
//     sortable: true,
//     minWidth: '250px'
//   },
//   {
//     name: 'Position',
//     selector: 'post',
//     sortable: true,
//     minWidth: '250px'
//   },
//   {
//     name: 'Office',
//     selector: 'city',
//     sortable: true,
//     minWidth: '150px'
//   },
//   {
//     name: 'Start Date',
//     selector: 'start_date',
//     sortable: true,
//     minWidth: '150px'
//   },
//   {
//     name: 'Salary',
//     selector: 'salary',
//     sortable: true,
//     minWidth: '150px'
//   }
// ]

// ** Table Adv Search Column
// export const advSearchColumns = [
//   {
//     name: 'Name',
//     selector: 'full_name',
//     sortable: true,
//     minWidth: '200px'
//   },
//   {
//     name: 'Email',
//     selector: 'email',
//     sortable: true,
//     minWidth: '250px'
//   },
//   {
//     name: 'Post',
//     selector: 'post',
//     sortable: true,
//     minWidth: '250px'
//   },
//   {
//     name: 'City',
//     selector: 'city',
//     sortable: true,
//     minWidth: '150px'
//   },
//   {
//     name: 'Date',
//     selector: 'start_date',
//     sortable: true,
//     minWidth: '150px'
//   },

//   {
//     name: 'Salary',
//     selector: 'salary',
//     sortable: true,
//     minWidth: '100px'
//   }
// ]

export default ExpandableTable
