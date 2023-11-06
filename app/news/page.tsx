import { Button, Col, Container, Row, Stack } from "react-bootstrap"

import FadeIn from "@/components/spring/FadeIn"

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
      <FadeIn>
        <Row id="aaa">
          <Col lg="2">1 of 3</Col>
          <Col lg="2">3 of 3</Col>
        </Row>
      </FadeIn>
    </Container>
  )
}

export default AutoLayoutVariableExample
