import React from 'react';
import { BrowserRouter, Routes as ReactDomRoutes , Route } from "react-router-dom";
import Layout from '../components/Layout/Layout';
import Hero from "../components/Hero/Hero"
import Destacados from '../components/Destacados/Destacados'
import Tienda from '../components/Tienda/Tienda'
import Nosotros from '../components/Nosotros/Nosotros'
import Contacto from '../components/Contacto/Contacto'

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRoutes>

          <Route path='/' element={
          <> 
          <Hero /> 
          <Destacados /> 
          </>} />

          <Route path='tienda'>
            <Route index element={<Tienda />} />
          </Route>

          <Route path='nosotros'>
            <Route index element={<Nosotros />} />
          </Route>

          <Route path='contacto'>
            <Route index element={<Contacto />} />
          </Route>


        </ReactDomRoutes>
      </Layout>
    </BrowserRouter>
  )
}

export default Routes