"use client"

import React from 'react'
import Hero from '../ServiceDetailPage/Hero'

import "@/styles/services/services.css";
import StickySec from './StickySec';
import Experts from './Experts';
import MoreServices from './MoreServices';

const ServiceDetailPage = () => {
  return (
    <>
      <Hero />
      <StickySec />
      <Experts />
      <MoreServices />

    </>
  )
}

export default ServiceDetailPage