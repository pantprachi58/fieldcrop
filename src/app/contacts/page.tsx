export default function Contacts() {
  return (
    <>
      
		
			
			
			

			
			<div id="hero" className="jarallax" data-speed="0.7" data-img-position="50% 55%" style={{"backgroundImage":"url(img/intro_img/7.jpg)"}}>
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-7">
							<h1 className="__title"><span>FieldCrop</span> Contact Us</h1>

							<p>
								The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
							</p>
						</div>
					</div>
				</div>
			</div>
			

			
			<main role="main">
				
				<link rel="stylesheet" href="/css/style.min.css" type="text/css" />

				
				

				
				<section className="section">
					<div className="container">
						
						<div className="company-contacts  text-center">
							<div className="__inner">
								<div className="row justify-content-around">
									
									<div className="col-12 col-md-4 col-lg-3">
										<div className="__item">
											<i className="__ico fontello-location"></i>

											<h4 className="__title">adress</h4>

											<p>
												523 Sylvan Ave, 5th Floor Mountain View, CA 94041USA
											</p>
										</div>
									</div>
									

									
									<div className="col-12 col-md-4 col-lg-3">
										<div className="__item">
											<i className="__ico fontello-phone"></i>

											<h4 className="__title">phone</h4>

											<p>
												+1 (234) 56789,<br />+1 987 654 3210
											</p>
										</div>
									</div>
									

									
									<div className="col-12 col-md-4 col-lg-3">
										<div className="__item">
											<i className="__ico fontello-mail-1"></i>

											<h4 className="__title">e-mail</h4>

											<p><a href="mailto:support@FieldCropcompany.com">support@FieldCropcompany.com</a></p>
										</div>
									</div>
									
								</div>
							</div>
						</div>
						
					</div>
				</section>
				

				
				<section className="section section--dark-bg  section--contacts">
					<div className="container">
						<div className="row justify-content-end">
							<div className="col-12 col-md-6">

								<div className="row justify-content-end">
									<div className="col-md-11">
										<div className="section-heading section-heading--white">
											<h2 className="__title">Get <span>in touch</span></h2>

											<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
										</div>

										<form className="contact-form js-contact-form" action="#">
											<div className="input-wrp">
												<input className="textfield" name="name" type="text" placeholder="Name" />
											</div>

											<div className="input-wrp">
												<input className="textfield" name="email" type="text" placeholder="E-mail" />
											</div>

											<div className="input-wrp">
												<textarea className="textfield" name="message" placeholder="Comments"></textarea>
											</div>

											<button className="custom-btn custom-btn--medium custom-btn--style-3 wide" type="submit" role="button">Send</button>

											<div className="form__note"></div>
										</form>
									</div>
								</div>

							</div>
						</div>
					</div>

					<div className="row no-gutters">
						<div className="col-md-6  map-container map-container--left">
							
							<div className="g_map" data-api-key="AIzaSyBXQROV5YMCERGIIuwxrmaZbBl_Wm4Dy5U" data-longitude="44.958309" data-latitude="34.109925" data-marker="img/marker.png" style={{"minHeight":"255px"}}></div>
						</div>
					</div>
				</section>
				
			</main>
			

			
			
			
		
    </>
  );
}
