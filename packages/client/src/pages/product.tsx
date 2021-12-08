import type { NextPage, NextPageContext } from 'next'
import Head from 'next/head'
import Layout from '../layouts'

type ProductProps = {} & NextPage

const Product = (props: ProductProps) => {
  return (
    <>
      <Head>
        <title>Red Dead Dedemption</title>
      </Head>

      <div className="border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-11 offset-lg-1">
              <nav aria-label="breadcrumb" className="py-3">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="/" className="text-decoration-none">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="/" className="text-decoration-none">
                      Xbox
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Red Dead Redemption
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-5 offset-lg-1">
            <div className="d-flex flex-column">
              <img
                src="https://upload.wikimedia.org/wikipedia/pt/f/f3/Red_Dead_Redemption_capa.png"
                alt="product name"
                className="shadow"
              />
            </div>

            <div className="mt-5 d-flex align-items-center justify-content-center">
              <i
                className="bi bi-chat me-2"
                role="img"
                aria-label="Favorite"
                style={{ fontSize: 24 }}
              />
              <div>
                <small className="d-block">
                  Have questions about buying an use game?
                </small>
                <a href="/" className="text-decoration-none">
                  <small>Chat with a Specialist</small>
                </a>
              </div>
            </div>
          </div>

          <div className="col-4 offset-lg-1">
            <p className="text-sm m-0 text-danger">New</p>
            <h1 className="fw-bold">Red Dead Redemption</h1>
            <p className="mb-0">Get $10 - $30 off when you trade in an Game</p>
            <a href="/" className="text-decoration-none">
              See how trade-in works
            </a>

            <p className="fs-5 mt-4 mb-2">Description</p>
            <p>
              Red Dead Redemption is a 2010 action-adventure game developed by
              Rockstar San Diego and published by Rockstar Games. A spiritual
              successor to 2004's Red Dead Revolver, it is the second game in
              the Red Dead series.
            </p>

            <div className="mt-4 p-4 bg-light">
              <div className="border-bottom mb-4 pb-4">
                <p className="fs-3 m-0">$ 60.00</p>
                <small className="d-block">One-time payment</small>
                <a href="/" className="text-decoration-none">
                  <small>Get 3% Daily Cash with Apple Card</small>
                </a>
              </div>

              <div className="d-flex align-items-center">
                <i
                  className="bi bi-box-seam me-2"
                  role="img"
                  aria-label="Favorite"
                  style={{ fontSize: 24 }}
                />
                <div>
                  <small>3–4 weeks (Free Shipping)</small>
                </div>
              </div>

              <div className="d-flex align-items-center mt-4">
                <a href="/cart" className="btn btn-primary w-100">
                  Continue
                </a>
                <i
                  className="bi bi-heart ms-4"
                  role="img"
                  aria-label="Favorite"
                  style={{ fontSize: 24 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-3 offset-lg-1">
            <div className="d-flex flex-column">
              <img
                height="240"
                style={{ objectFit: 'cover' }}
                src="https://estacaogeek.com.br/wp-content/uploads/2017/11/https-2F2Fblueprint-api-production.s3.amazonaws.com2Fuploads2Fstory2Fthumbnail2F582192Fc9d46dd7-04ac-418e-807c-0fe3d0554107.png"
              />
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex flex-column">
              <img
                height="240"
                style={{ objectFit: 'cover' }}
                src="https://estacaogeek.com.br/wp-content/uploads/2017/11/Red-Dead-Redemption-Gameplay-Series-Weapons-and-Death-Trailer_2.jpg"
              />
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex flex-column">
              <img
                height="240"
                style={{ objectFit: 'cover' }}
                src="https://estacaogeek.com.br/wp-content/uploads/2017/11/landscape-1476815342-deady.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-10 offset-lg-1">
            <div className="px-5 pt-5 mb-4 bg-light rounded-3 d-flex flex-column">
              <h2 className="display-6 mb-4 fw-bold">Reviews</h2>
              <Review />
              <Review />
              <Review />
              <Review />
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link bg-light" href="#">
                      <i
                        className="bi bi-caret-left"
                        role="img"
                        aria-label="Previous"
                        style={{ fontSize: 16 }}
                      />
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link bg-light" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link bg-light" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link bg-light" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link bg-light" href="#">
                      <i
                        className="bi bi-caret-right"
                        role="img"
                        aria-label="Next"
                        style={{ fontSize: 16 }}
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-1" />
        </div>
      </div>
    </>
  )
}

const Review = () => {
  return (
    <div className="mb-5">
      <p className="m-0 fw-bold">John</p>
      <i
        className="bi bi-star-fill me-2"
        role="img"
        aria-label="Star"
        style={{ fontSize: 16 }}
      />
      <i
        className="bi bi-star-fill me-2"
        role="img"
        aria-label="Star"
        style={{ fontSize: 16 }}
      />
      <i
        className="bi bi-star-fill me-2"
        role="img"
        aria-label="Star"
        style={{ fontSize: 16 }}
      />
      <i
        className="bi bi-star-fill me-2"
        role="img"
        aria-label="Star"
        style={{ fontSize: 16 }}
      />
      <i
        className="bi bi-star me-2"
        role="img"
        aria-label="Star"
        style={{ fontSize: 16 }}
      />
      <p className="m-0">
        Using a series of utilities, you can create this jumbotron, just like
        the one in previous versions of Bootstrap. Check out the examples below
        for how you can remix and restyle it to your liking.
      </p>
    </div>
  )
}

Product.getLayout = function getLayout(page: React.ReactElement) {
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

export default Product
