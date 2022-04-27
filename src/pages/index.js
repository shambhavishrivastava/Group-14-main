import React from "react"
import Hero from "../components/Hero/Hero"
import Layout from "../components/Layout/Layout"
import FeaturesHomeTable from "../components/FeaturesHomeTable/FeaturesHomeTable"
import GalleryHomeTable from "../components/GalleryHomeTable/GalleryHomeTable"
const Index = () => {
  return (
    <Layout>
      <Hero/>
      <FeaturesHomeTable/>
      <GalleryHomeTable/>
    </Layout>
  )
}

export default Index
