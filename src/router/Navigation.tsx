import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashboardPage, LoginPage, RegisterPage } from '../pages'

export const Navigation:FC = () => {
  return (
    <Routes>
        <Route path='/auth/login' element={<LoginPage/>}/>
        <Route path='/auth/register' element={<RegisterPage/>}/>

        <Route path='/' element={<DashboardPage/>}/>
    </Routes>
  )
}
