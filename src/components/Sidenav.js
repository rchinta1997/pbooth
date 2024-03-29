import React from "react";
import "./sidenav.css";
import Link from "next/link";
export default function Sidenav() {
  return (
    <nav className="d-flex align-items-center">
      <ul>
        <Link href="/Dashboard" className="">
          <li>Home</li>
        </Link>
        <Link href="/Dashboard/myspace">
          <li>Space</li>
        </Link>
        <Link href="#">Logout</Link>
      </ul>
    </nav>
  );
}
