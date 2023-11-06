"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { cn } from "lib/utils"
import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

function SiteHeader() {
  const pathName = usePathname()
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
                      title={item.title}
                      key={item.title}
                      id="basic-nav-dropdown"
                      className={cn([
                        "mr-20 text-lg hover:text-primary",
                        pathName === item.href && "text-primary",
                      ])}
                    >
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
                    </NavDropdown>
                  )
                } else {
                  return (
                    <Nav.Link
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
