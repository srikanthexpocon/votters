import { Fragment } from 'react'
import { Row, Col } from 'reactstrap'
import BuildForm from './BuildForm'
import Reports from './Reports'
import AllForms from './AllForms'

const FormLayouts = () => {
  return (
    <Fragment>
      {/* <Breadcrumbs breadCrumbTitle='Associate Member' breadCrumbParent='Form' breadCrumbActive='Associate Member' /> */}
      <Row>
        <Col sm='12'>
          <AllForms />
          <BuildForm />
          <Reports />
        </Col>
      </Row>
    </Fragment>

    
  )
}
export default FormLayouts
