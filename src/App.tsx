import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { GlobalStyle } from './styles/global'
import { Analytics } from "@vercel/analytics/react"
import { HomePage } from './pages/HomePage/HomePage'
import { ProjectDetails } from './pages/ProjectDetails/ProjectDetails'
import { Login } from './pages/Login/Login'
import { ManageUsers } from './pages/ManageUsers/ManageUsers'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import { RequireAuth } from './components/RequireAuth/RequireAuth'

import 'react-toastify/dist/ReactToastify.css'

function Layout({ children }: { children: React.ReactNode }) {
  // Now Header and Footer are always visible (except maybe on Login page, we can hide them there but for now we'll just show them or hide conditionally if we want).
  // Let's hide Header and Footer on Login page based on location later if needed, but for now we render Header/Footer for everyone on the home page.
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Analytics />
      <Footer />
    </>
  );
}

function RoleGuard({ children, allowedRoles }: { children: React.ReactNode, allowedRoles: string[] }) {
  const { user } = useAuth();
  if (user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* Public Route */}
            <Route path="/" element={<HomePage />} />
            
            {/* Login Route */}
            <Route path="/login" element={<Login />} />

            {/* Protected Routes */}
            <Route 
              path="/projects/:slug" 
              element={
                <RequireAuth>
                  <ProjectDetails />
                </RequireAuth>
              } 
            />
            <Route 
              path="/manage-users" 
              element={
                <RequireAuth>
                  <RoleGuard allowedRoles={['Super Admin']}>
                    <ManageUsers />
                  </RoleGuard>
                </RequireAuth>
              } 
            />
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
