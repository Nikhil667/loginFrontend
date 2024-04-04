import React from 'react'
import Header from './Header';
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
      <>
        <Header />
        <main className='h-full bg-white px-8 pt-8'>
          <Outlet/>
        </main>
      </>
  )
}
