import Link from 'next/link'

export const ProductCard = () => {
  return (
    <Link href="/product">
      <a className="card shadow-sm overflow-hidden text-decoration-none text-dark">
        <img src="https://fakeimg.pl/440x320/282828/eae0d0/?retina=1" />

        <div className="card-body">
          <p className="card-text">This is a wider card with supporting</p>
          <strong className="">$ 11.00</strong>
        </div>
      </a>
    </Link>
  )
}
