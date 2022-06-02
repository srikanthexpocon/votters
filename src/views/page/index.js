import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import AllPages from './AllPages'
import Categories from './Categories'
import AddPage from './AddPage'

const FormLayouts = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs breadCrumbTitle='Associate Member' breadCrumbParent='Form' breadCrumbActive='Associate Member' /> */}
      <Row>
        <Col sm='12'>
          <AllPages />
          <AddPage />
          <Categories />
        </Col>
      </Row>
    </Fragment>

    
  )
}
export default FormLayouts
