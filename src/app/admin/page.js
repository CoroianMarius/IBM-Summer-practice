"use client"

import { AdminSideBarProvider } from '@/context/AdminSideBarContext'
import React from 'react'
import AdminPanel from './AdminPanel'

export default function page() {
  return (
    <AdminSideBarProvider>
        <AdminPanel />
    </AdminSideBarProvider>
  )
}
