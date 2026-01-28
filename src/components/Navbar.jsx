"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logo from "@/assets/logo.webp"
import Image from 'next/image';
import TopSection from './TopSection'

export default function Navbar() {
  const pathname = usePathname();
  
  return (
   <nav className="bg-blue-950 flex items-center justify-between px-4 py-2 text-white">
   
      <p> 9894 Bissonnet st Suite 676 Houston, Tx 77036</p>
      <p> +1 844-257-2926</p>

  
</nav>
  );
}
