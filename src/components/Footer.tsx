import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer" className="footer--style-1">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-auto">
            <div className="footer__item">
              <Link className="site-logo" href="/">
                <img className="img-fluid " src="/img/site_logo.png" alt="demo" />
              </Link>
            </div>
          </div>

          <div className="col-12 col-sm">
            <div className="row align-items-md-center no-gutters">
              <div className="col-12 col-md-7 col-lg-9">
                <div className="footer__item">
                  <address>
                    <p>
                      523 Sylvan Ave, 5th Floor Mountain View, CA 94041 USA
                    </p>
                    <p>
                      +1 (234) 56789, +1 987 654 3210 <br />
                      <a href="mailto:support@FieldCropcompany.com">support@FieldCropcompany.com</a>
                    </p>
                  </address>
                </div>
              </div>

              <div className="col-12 col-md-5 col-lg-3">
                <div className="footer__item">
                  <form className="form--horizontal" action="#">
                    <div className="input-wrp">
                      <input className="textfield" name="s" type="text" placeholder="Your E-mail" />
                    </div>
                    <button className="custom-btn custom-btn--medium custom-btn--style-1" type="submit" role="button">subscribe</button>
                  </form>
                </div>
              </div>
            </div>

            <div className="row flex-lg-row-reverse">
              <div className="col-12 col-lg-6">
                <div className="footer__item">
                  <nav id="footer__navigation" className="navigation  text-lg-right">
                    <ul>
                      <li className="active"><Link href="/">Home</Link></li>
                      <li><Link href="/about">About</Link></li>
                      <li><Link href="/services">Pages</Link></li>
                      <li><Link href="/gallery_1">Gallery</Link></li>
                      <li><Link href="/blog">Blog</Link></li>
                      <li><Link href="/contacts">Contacts</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-12 col-lg-6">
                <div className="footer__item">
                  <span className="__copy">© 2019 FieldCrop. All rights reserved. Created by <a className="__dev" href="https://themeforest.net/user/artureanec" target="_blank" rel="noreferrer">Artureanec</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


