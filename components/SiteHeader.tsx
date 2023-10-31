"use client"

import * as React from "react"
import { Container, Nav, Navbar } from "react-bootstrap"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

function SiteHeader() {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/" className="flex">
            <Icons.logo className="mr-1 h-6 w-6" />
            <span>{siteConfig.name}</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              {siteConfig.mainNav.map((item, index) => (
                <Nav.Link key={index} href={item.href}>
                  {item.title}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default SiteHeader
