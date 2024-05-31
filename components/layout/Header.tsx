"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "lib/utils"
import { Collapse, Container, Nav, NavDropdown, Navbar } from "react-bootstrap"

import { siteConfig } from "@/config/site"
import Image from "@/components/Image"
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
      <Navbar expand="lg" className="px-4 py-[15px] md:px-0">
        <Container className="2xl container flex-wrap">
          <Navbar.Brand className="mb-0 block w-auto p-0 md:mb-[15px] md:ml-0 md:w-full">
            <Link
              href="/"
              className="relative inline-block h-[34px] w-[180px] md:h-[45px]"
            >
              <Image src="/images/logo.png" alt="logo" fill={true} />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

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
                        "ml-4 mr-8 w-full border-b border-dashed border-b-zinc-400 py-1 text-lg hover:text-primary md:ml-0 md:w-fit md:border-none md:py-0",
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
                                key={child.href}
                                className={cn([
                                  "ml-2 w-full border-b border-dashed border-b-zinc-400 py-3 text-lg last:border-none hover:text-primary  md:m-0 md:border-none md:py-4",
                                  pathName === child.href && "text-primary",
                                ])}
                              >
                                <Link href={child.href}>{child.title}</Link>
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
                      className={cn([
                        "ml-4 mr-8 w-full border-b border-dashed border-b-zinc-400 py-3 text-lg text-nornam hover:text-primary md:ml-0 md:w-fit md:border-none md:py-0",
                        pathName === item.href && "text-primary",
                      ])}
                      onMouseLeave={handleHide}
                    >
                      <Link href={item.href}>
                        {item.title}
                        {item.children && <Icons.down className="ml-1" />}
                      </Link>
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
