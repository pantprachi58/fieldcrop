export default function Custom404() {
  return (
    <>
      
		
			
			
			

			
			<div id="hero" className="jarallax" data-speed="0.7" data-img-position="50% 80%" style={{"backgroundImage":"url(img/intro_img/9.jpg)"}}>
				<div className="container">
					<div className="row">
						<div className="col-12 col-lg-7">
							<h1 className="__title"><span>page</span> 404 not found</h1>
						</div>
					</div>
				</div>
			</div>
			

			
			<main role="main" className="page-404">
				
				<link rel="stylesheet" href="/css/style.min.css" type="text/css" />

				
				

				
				<section className="section">
					<div className="container">
						<div className="text-center">
							<div className="mb-9">
								<img className="img-fluid" src="/img/404.jpg" alt="demo" />
							</div>

							<div className="__text">
								<h3>Oops! <span>That page can’t be found.</span></h3>

								<p>
									<strong>It looks like nothing was found at this location. Maybe try a search?</strong>
								</p>
							</div>

							<div className="center-block" style={{"maxWidth":"700px"}}>
								<form className="form--horizontal" action="#" method="get">
									<div className="input-wrp">
										<input className="textfield" name="s" type="text" placeholder="Search" />
									</div>

									<button className="custom-btn custom-btn--tiny custom-btn--style-1" type="submit" role="button">Find</button>
								</form>
							</div>
						</div>
					</div>
				</section>
				
			</main>
			

			
			
			
		
    </>
  );
}
