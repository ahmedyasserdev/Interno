"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./Logo";
import { NavLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "react-bootstrap/Navbar";
const Header = () => {
  const pathname = usePathname();
  return (
    <AnimatedNavbar
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      expand="lg"
      className="bg-body-tertiary py-4"
    >
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <Logo />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <Image
            src="/icons/menu.svg"
            alt="menu"
            width={25}
            height={25}
            className="text-2 object-fit-contain"
          />
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-4 align-items-center header text-2">
            {NavLinks.map((link, index) => {
              if (link.dropdownItems) {
                return (
                  <NavDropdown
                    key={index}
                    title={link.label}
                    id={`nav-dropdown-${index}`}
                    className="text-2 links__dropdown"
                  >
                    {link.dropdownItems.map((item, subIndex) => (
                      <NavDropdown.Item
                        key={subIndex}
                        className={`  ${
                          link.route === pathname &&
                          "bg-primary rounded-4 text-white  p-2"
                        } dropdown_link`}
                      >
                        <Link
                          className={` text-dark text-2 `}
                          href={item.route}
                        >
                          {item.label}
                        </Link>
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                );
              } else {
                return (
                  <Link
                    key={index}
                    className={` ${
                      link.route === pathname &&
                      "bg-primary rounded-4 text-white  p-2"
                    } text-dark text-capitalize nav__link`}
                    href={link.route}
                  >
                    {link.label}
                  </Link>
                );
              }
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </AnimatedNavbar>
  );
};

export default Header;

const AnimatedNavbar = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) => {
  const MotionNavbar = motion(Navbar);

  return <MotionNavbar {...rest}>{children}</MotionNavbar>;
};
