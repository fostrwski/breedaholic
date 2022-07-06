import React from "react"

import Head from "next/head"

interface SEOProps {
  title: string
  description: string
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title} | Breedaholic 🐶</title>
      <meta key="description" name="description" content={description} />
    </Head>

  )
}

export default SEO
