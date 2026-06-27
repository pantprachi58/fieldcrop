export default function SignIn() {
  return (
    <>
      
		
			
			
			

			
			<div id="hero" className="jarallax" data-speed="0.7" data-img-position="50% 40%" style={{"backgroundImage":"url(img/intro_img/15.jpg)","color":"#442a1e"}}>
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-7">
							<h1 className="__title"><span>FieldCrop Shop</span> Sign in/up</h1>

							<p>
								The point of using is that it has a more-or-less normal distribution of letters, as opposed to using Content here content here making it look
							</p>
						</div>
					</div>
				</div>
			</div>
			

			
			<main role="main">
				
				<link rel="stylesheet" href="/css/style.min.css" type="text/css" />

				
				

				
				<section className="section">
					<div className="decor-el decor-el--1" data-jarallax-element="-70" data-speed="0.2">
						<img className="" width="286" height="280" src="/img/decor-el_1.jpg" alt="demo"/>
					</div>

					<div className="decor-el decor-el--3" data-jarallax-element="-70" data-speed="0.2">
						<img className="" width="115" height="117" src="/img/decor-el_3.jpg" alt="demo"/>
					</div>

					<div className="decor-el decor-el--4" data-jarallax-element="-70" data-speed="0.2">
						<img className="" width="84" height="76" src="/img/decor-el_4.jpg" alt="demo"/>
					</div>

					<div className="container">
						<div className="row">
							<div className="col-12 col-md-6 col-lg-5 col-xl-4">
								<h2>Sign <span>in</span></h2>

								
								<form className="auth-form" action="#">
									<div className="input-wrp">
										<input className="textfield" type="text" placeholder="Username or email address *" />
									</div>

									<div className="input-wrp">
										<input className="textfield" type="text" placeholder="Password" />
									</div>

									<div className="row align-items-center justify-content-between">
										<div className="col-auto">
											<label className="checkfield align-bottom">
												<input type="checkbox" defaultChecked />
												<i></i>
												Remember me
											</label>
										</div>

										<div className="col-auto">
											<a className="link-forgot" href="#">Lost your password?</a>
										</div>
									</div>

									<div className="d-table mt-8">
										<div className="d-table-cell align-middle">
											<button className="custom-btn custom-btn--medium custom-btn--style-1" type="submit" role="button">Login in</button>
										</div>

										<div className="d-table-cell align-middle">
											<a className="link-to" href="#">Sign up</a>
										</div>
									</div>
								</form>
								

								<div className="spacer py-6 d-md-none"></div>

							</div>

							<div className="col-12 col-md-6 col-lg-5 col-xl-4 offset-lg-1 offset-xl-2">
								<h2>Sign <span>Up</span></h2>

								
								<form className="auth-form" action="#">
									<div className="input-wrp">
										<input className="textfield" type="text" placeholder="Full name *" />
									</div>

									<div className="input-wrp">
										<input className="textfield" type="text" placeholder="Email *" />
									</div>

									<div className="input-wrp">
										<input className="textfield" type="text" placeholder="Password" />
									</div>

									<div className="input-wrp">
										<input className="textfield" type="text" placeholder="Confirm password" />
									</div>

									<div className="d-table mt-8">
										<div className="d-table-cell align-middle">
											<button className="custom-btn custom-btn--medium custom-btn--style-1" type="submit" role="button">Sign up</button>
										</div>

										<div className="d-table-cell align-middle">
											<a className="link-to" href="#">Sign in</a>
										</div>
									</div>
								</form>
								
							</div>
						</div>
					</div>
				</section>
				

				
				<section className="section section--no-pt section--no-pb section--gutter">
					<div className="container-fluid px-md-0">
						
						<div className="simple-banner simple-banner--style-2" data-aos="fade" data-aos-offset="50">
							<div className="d-none d-lg-block">
								<img className="img-logo img-fluid " src="/img/site_logo.png" alt="demo" />
							</div>

							<div className="row no-gutters">
								<div className="col-12 col-lg-6">
									<a href="#"><img className="img-fluid w-100 " src="/img/banner_bg_3.jpg" alt="demo" /></a>
								</div>

								<div className="col-12 col-lg-6">
									<a href="#"><img className="img-fluid w-100 " src="/img/banner_bg_4.jpg" alt="demo" /></a>
								</div>
							</div>
						</div>
						
					</div>
				</section>
				
			</main>
			

			
			
			
		
    </>
  );
}


