
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import { HomePage, ListPost } from '../page'
import { path } from '../untils/path'

const Routers = () => {
  return (
    <>
      <div className="w-[1100px] m-auto text-[14px]">
        <Header />
        <Navigation />
      </div>
      <Routes>
        <Route path={path.HOME_PAGE} element={<HomePage />} />
        <Route path={path.LIST_POST} element={<ListPost />} />
        <Route path={path.LIST_CATEGORY_POST} element={<ListPost />} />
      </Routes>
      <div className="w-[1100px] m-auto text-[14px]">
        <Navigation check={true} />
        <Footer />
      </div>
    </>

  )
}

export default Routers