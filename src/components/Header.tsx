import Link from 'next/link';

export default function Header() {
  return (
    <header id="top-bar" className="top-bar top-bar--style-1">
      <div className="top-bar__bg" style={{ backgroundColor: '#24292c', backgroundImage: 'url(/img/top_bar_bg-1.jpg)', backgroundRepeat: 'no-repeat', backgroundPosition: 'left bottom' }}></div>

      <div className="container-fluid">
        <div className="row align-items-center justify-content-between no-gutters">

          <Link className="top-bar__logo site-logo" href="/">
            <img className="img-fluid" src="/img/site_logo.png" alt="demo" />
          </Link>

          <a id="top-bar__navigation-toggler" className="top-bar__navigation-toggler top-bar__navigation-toggler--light" href="javascript:void(0);"><span></span></a>

          <div id="top-bar__inner" className="top-bar__inner">
            <div>
              <nav id="top-bar__navigation" className="top-bar__navigation navigation" role="navigation">
                <ul>
                  <li className="active ">
                    <Link href="/">Home</Link>
                   
                  </li>

                  <li>
                    {/* <Link href="/about">About</Link> */} <Link href="/">About</Link>
                  </li>

                  <li className="">
                    <a href="javascript:void(0);">Products</a>
                    {/* <ul className="submenu">
                      <li><Link href="/services">Services</Link></li>
                      <li><Link href="/products">Products</Link></li>
                      <li><Link href="/products_details">Product Details</Link></li>
                      <li><Link href="/gallery_1">Gallery 1</Link></li>
                      <li><Link href="/gallery_2">Gallery 2</Link></li>
                      <li><Link href="/typography">Typography</Link></li>
                      <li><Link href="/404">404 page</Link></li>
                    </ul> */}
                  </li>

                  <li className="">
                    <a href="javascript:void(0);">Shop</a>
                    {/* <ul className="submenu">
                      <li><Link href="/shop_catalog">Shop Catalog</Link></li>
                      <li><Link href="/single_product">Single Product</Link></li>
                      <li><Link href="/cart">Cart</Link></li>
                      <li><Link href="/checkout">Checkout</Link></li>
                      <li><Link href="/sign_in">Sign In/Up</Link></li>
                    </ul> */}
                  </li>

                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>

                  <li>
                    <Link href="/contacts">Contacts</Link>
                  </li>

                  <li className="li-btn">
                    <a className="custom-btn custom-btn--small custom-btn--style-4" href="#">Get in Touch</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}
