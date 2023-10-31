import { Button, Col, Container, Row, Stack } from "react-bootstrap"

function AutoLayoutVariableExample() {
  return (
    <Container>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
      <Row>
        <Col lg="2">1 of 3</Col>
        <Col lg="2">3 of 3</Col>
      </Row>
    </Container>
  )
}

export default AutoLayoutVariableExample
