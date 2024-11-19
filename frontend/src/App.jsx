import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignInForm from "./auth/forms/SignInForm"
import SignUpForm from "./auth/forms/SignUpForm"
import Home from "./pages/Home"
import About from "./pages/About"
import Dashboard from "./pages/Dashboard"
import NewsArticles from "./pages/NewsArticles"
import Header from "./components/shared/Header"
import { Toaster } from "./components/ui/toaster"
import Footer from "./components/shared/Footer"
import PrivateRoute from "./components/shared/PrivateRoute"
import CreatePost from "./pages/CreatePost"
import AdminPrivateRoute from "./components/shared/AdminPrivateRoute"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/sign-in" element={<SignInForm />} />
        <Route path="/sign-up" element={<SignUpForm />} />

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<AdminPrivateRoute />}>
          <Route path="/create-post" element={<CreatePost />} />
        </Route>

        <Route path="/news" element={<NewsArticles />} />
      </Routes>

      <Footer />

      <Toaster />
    </BrowserRouter>
  )
}

export default App
