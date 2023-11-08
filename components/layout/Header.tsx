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
  console.log("👻 ~ pathName:", pathName)
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
      <Navbar expand="lg" className="py-4">
        <Container className="2xl container">
          <Navbar.Brand href="/" className="ml-5 block p-0 md:ml-0">
            <Image
              src="/images/logo.jpg"
              alt="logo"
              className="h-[34px] md:h-[45px]"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-3" />

          <Navbar.Collapse id="basic-navbar-nav" className="pt-3 md:pt-0">
            <Nav className="flex items-start md:items-center">
              {siteConfig.mainNav.map((item) => {
                if (item.children) {
                  return (
                    <NavDropdown
                      title={item.title}
                      key={item.title}
                      id="basic-nav-dropdown"
                      className={cn([
                        "mx-10 py-3 text-xl hover:text-primary md:py-0",
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
                                  "py-3 text-lg  hover:text-primary md:py-4",
                                  pathName === child.href && "text-primary",
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
                        "mx-10 py-3 text-xl text-nornam hover:text-primary md:py-0",
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
