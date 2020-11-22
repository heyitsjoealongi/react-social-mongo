/* Frameworks */
import React, { useState } from "react";
import Link from "next/link";

/* Components */
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Social from "../functional-components/Social";

/* SVG */
import Brand from "../../public/archtyped.svg";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className="navigation navigation-one">
        <Link href="/">
          <NavbarBrand>
            <Brand />
          </NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link href="/">
                <NavLink>Get Started</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/">
                <NavLink>Community</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/">
                <NavLink>Pricing</NavLink>
              </Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Profile
              </DropdownToggle>
              <DropdownMenu left>
                <Link href="/">
                  <DropdownItem>View Profile</DropdownItem>
                </Link>
                <DropdownItem divider />
                <Link href="/">
                  <DropdownItem>Update Profile</DropdownItem>
                </Link>
                <DropdownItem divider />
                <Link href="/">
                  <DropdownItem>Settings</DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Social />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
