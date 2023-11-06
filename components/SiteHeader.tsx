"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { cn } from "lib/utils"
import {
  Collapse,
  Container,
  Fade,
  Image,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

interface SiteHeaderProps {
  [key: string]: boolean
}

function SiteHeader() {
  const pathName = usePathname()
  const [show, setShow] = React.useState<SiteHeaderProps>({
    "/product": false,
    "/plan": false,
  })

  const handleShow = (key: string) => {
    setShow((prev) => ({
      "/product": false,
      "/plan": false,
      [key]: true,
    }))
  }
  const handleHide = () => {
    setShow({
      "/product": false,
      "/plan": false,
    })
  }
  return (
    <header id="header">
      <Navbar expand="lg" className="py-3">
        <Container style={{ flexWrap: "wrap" }} className="2xl container">
          <Navbar.Brand href="/" className="block p-0">
            <Image src="/images/logo.jpg" alt="logo" className="w-45 h-10" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2" />

          <Navbar.Collapse id="basic-navbar-nav" className="mt-2 w-full">
            <Nav>
              {siteConfig.mainNav.map((item) => {
                if (item.children) {
                  return (
                    <NavDropdown
                      show={show[item.href]}
                      onMouseEnter={() => handleShow(item.href)}
                      title={item.title}
                      key={item.title}
                      id="basic-nav-dropdown"
                      className={cn([
                        "mr-20 text-lg hover:text-primary",
                        pathName === item.href && "text-primary",
                      ])}
                    >
                      <Collapse in={show[item.href]}>
                        <div onMouseLeave={handleHide}>
                          {item.children.map((child) => {
                            return (
                              <NavDropdown.Item
                                href={child.href}
                                key={child.href}
                                className={cn([
                                  "py-3 text-lg hover:text-primary",
                                  pathName === item.href && "text-primary",
                                ])}
                              >
                                {child.title}
                              </NavDropdown.Item>
                            )
                          })}
                        </div>
                      </Collapse>
                    </NavDropdown>
                  )
                } else {
                  return (
                    <Nav.Link
                      onMouseEnter={handleHide}
                      onMouseLeave={handleHide}
                      key={item.href}
                      href={item.href}
                      className={cn([
                        "mr-20  text-lg hover:text-primary",
                        pathName === item.href && "text-primary",
                      ])}
                    >
                      {item.title}
                      {item.children && <Icons.down className="ml-1" />}
                    </Nav.Link>
                  )
                }
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}
export default SiteHeader
