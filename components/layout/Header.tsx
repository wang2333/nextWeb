"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { cn } from "lib/utils"
import {
  Collapse,
  Container,
  Image,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

import Style from "./layout.module.scss"

interface SiteHeaderProps {
  [key: string]: boolean
}
const initDate: SiteHeaderProps = {
  "/product": false,
  "/plan": false,
}

function SiteHeader() {
  const pathName = usePathname()
  const [show, setShow] = React.useState<SiteHeaderProps>(initDate)

  const handleShow = (key: string) => {
    setShow({
      ...initDate,
      [key]: true,
    })
  }
  const handleHide = () => {
    setShow(initDate)
  }
  return (
    <header id="header" className={Style.header}>
      <Navbar expand="lg" className="py-3">
        <Container className="2xl container">
          <Navbar.Brand href="/" className="block p-0">
            <Image
              src="/images/logo.jpg"
              alt="logo"
              className="h-[34px] md:h-[40px]"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-3" />

          <Navbar.Collapse id="basic-navbar-nav" className="mt-2 w-full">
            <Nav>
              {siteConfig.mainNav.map((item) => {
                if (item.children) {
                  return (
                    <NavDropdown
                      title={item.title}
                      key={item.title}
                      id="basic-nav-dropdown"
                      className={cn([
                        "mx-10 text-lg hover:text-primary",
                        pathName === item.href && "text-primary",
                      ])}
                      show={show[item.href]}
                      onMouseEnter={() => handleShow(item.href)}
                      aria-controls="example-collapse-text"
                      aria-expanded={show[item.href]}
                    >
                      <Collapse in={show[item.href]} appear={true}>
                        <div
                          className="lg:shadow-base overflow-hidden"
                          onMouseLeave={handleHide}
                        >
                          {item.children.map((child) => {
                            return (
                              <NavDropdown.Item
                                href={child.href}
                                key={child.href}
                                className={cn([
                                  "text-md py-2 hover:text-primary md:py-3",
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
                      key={item.href}
                      href={item.href}
                      className={cn([
                        "mx-10 text-lg  hover:text-primary",
                        pathName === item.href && "text-primary",
                      ])}
                      onMouseLeave={handleHide}
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
