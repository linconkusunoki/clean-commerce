import type { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Layout from '../layouts'
import { Product } from '@commerce/core'
import { ProductCard } from '../components'

type HomeProps = {
  product: Product
} & NextPage

const Home = (props: HomeProps) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <div className="position-relative overflow-hidden text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal">Punny headline</h1>
          <p className="lead fw-normal">
            And an even wittier subheading to boot. Jumpstart your marketing
            efforts with this example based on Apple’s marketing pages.
          </p>
          <a className="btn btn-outline-secondary" href="#">
            Coming soon
          </a>
        </div>
        <div className="product-device shadow-sm d-none d-md-block"></div>
        <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <ProductSection />

      <ProductFeatured />

      <ProductSection />
    </>
  )
}

const ProductFeatured = () => {
  return (
    <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
      <div className="bg-light flex-grow-1 me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 p-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div
          className="bg-body shadow-sm mx-auto"
          style={{
            width: '80%',
            height: '300px',
            borderRadius: '21px 21px 0 0',
          }}
        />
      </div>
      <div className="bg-light flex-grow-1 me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
        <div className="my-3 py-3">
          <h2 className="display-5">Another headline</h2>
          <p className="lead">And an even wittier subheading.</p>
        </div>
        <div
          className="bg-body shadow-sm mx-auto"
          style={{
            width: '80%',
            height: '300px',
            borderRadius: '21px 21px 0 0',
          }}
        />
      </div>
    </div>
  )
}

const ProductSection = () => {
  return (
    <div className="py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
          <div className="col">
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout.Default>{page}</Layout.Default>
}

export async function getStaticProps(context: NextPageContext) {
  const response = await fetch('http://localhost:3000/api/products/1')
  const result = await response.json()
  return {
    props: {
      product: result,
    },
  }
}

export default Home
