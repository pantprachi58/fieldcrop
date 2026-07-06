import styles from "@/app/page.module.css"
export default function Home() {
  return (
    <>
	<div id="start-screen" className="start-screen start-screen--style-1" data-scroll-discover="true">
				<div id="start-screen__bg" className="start-screen__bg">
					<div id="vegas-slider" data-dots="true">
						<div className="vegas-control">
							<span id="vegas-control__prev" className="vegas-control__btn">Prev</span>
							<span id="vegas-control__next" className="vegas-control__btn">Next</span>
						</div>
					</div>					
					<style dangerouslySetInnerHTML={{ __html: `
					
						.vegas-overlay,.vegas-slide,.vegas-slide-inner,.vegas-timer,.vegas-wrapper{position:absolute;top:0;left:0;bottom:0;right:0;overflow:hidden;border:none;padding:0;margin:0}.vegas-overlay{opacity:.5;background:url(overlays/02.html) center center}.vegas-timer{top:auto;bottom:0;height:2px}.vegas-timer-progress{width:0;height:100%;background:#fff;-webkit-transition:width ease-out;transition:width ease-out}.vegas-timer-running .vegas-timer-progress{width:100%}.vegas-slide,.vegas-slide-inner{margin:0;padding:0;background:center center no-repeat;-webkit-transform:translateZ(0);transform:translateZ(0)}body .vegas-container{overflow:hidden!important;position:relative}.vegas-video{min-width:100%;min-height:100%;width:auto;height:auto}body.vegas-container{overflow:auto;position:static;z-index:-2}body.vegas-container>.vegas-overlay,body.vegas-container>.vegas-slide,body.vegas-container>.vegas-timer{position:fixed;z-index:-1}:root body.vegas-container>.vegas-overlay,:root body.vegas-container>.vegas-slide,_::full-page-media,_:future{bottom:-76px}.vegas-transition-blur,.vegas-transition-blur2{opacity:0;-webkit-filter:blur(32px);filter:blur(32px)}.vegas-transition-blur-in,.vegas-transition-blur2-in{opacity:1;-webkit-filter:blur(0);filter:blur(0)}.vegas-transition-blur2-out{opacity:0}.vegas-transition-burn,.vegas-transition-burn2{opacity:0;-webkit-filter:contrast(1000%) saturate(1000%);filter:contrast(1000%) saturate(1000%)}.vegas-transition-burn-in,.vegas-transition-burn2-in{opacity:1;-webkit-filter:contrast(100%) saturate(100%);filter:contrast(100%) saturate(100%)}.vegas-transition-burn2-out{opacity:0;-webkit-filter:contrast(1000%) saturate(1000%);filter:contrast(1000%) saturate(1000%)}.vegas-transition-fade,.vegas-transition-fade2{opacity:0}.vegas-transition-fade-in,.vegas-transition-fade2-in{opacity:1}.vegas-transition-fade2-out{opacity:0}.vegas-transition-flash,.vegas-transition-flash2{opacity:0;-webkit-filter:brightness(25);filter:brightness(25)}.vegas-transition-flash-in,.vegas-transition-flash2-in{opacity:1;-webkit-filter:brightness(1);filter:brightness(1)}.vegas-transition-flash2-out{opacity:0;-webkit-filter:brightness(25);filter:brightness(25)}.vegas-transition-negative,.vegas-transition-negative2{opacity:0;-webkit-filter:invert(100%);filter:invert(100%)}.vegas-transition-negative-in,.vegas-transition-negative2-in{opacity:1;-webkit-filter:invert(0);filter:invert(0)}.vegas-transition-negative2-out{opacity:0;-webkit-filter:invert(100%);filter:invert(100%)}.vegas-transition-slideDown,.vegas-transition-slideDown2{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.vegas-transition-slideDown-in,.vegas-transition-slideDown2-in{-webkit-transform:translateY(0);transform:translateY(0)}.vegas-transition-slideDown2-out{-webkit-transform:translateY(100%);transform:translateY(100%)}.vegas-transition-slideLeft,.vegas-transition-slideLeft2{-webkit-transform:translateX(100%);transform:translateX(100%)}.vegas-transition-slideLeft-in,.vegas-transition-slideLeft2-in{-webkit-transform:translateX(0);transform:translateX(0)}.vegas-transition-slideLeft2-out,.vegas-transition-slideRight,.vegas-transition-slideRight2{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.vegas-transition-slideRight-in,.vegas-transition-slideRight2-in{-webkit-transform:translateX(0);transform:translateX(0)}.vegas-transition-slideRight2-out{-webkit-transform:translateX(100%);transform:translateX(100%)}.vegas-transition-slideUp,.vegas-transition-slideUp2{-webkit-transform:translateY(100%);transform:translateY(100%)}.vegas-transition-slideUp-in,.vegas-transition-slideUp2-in{-webkit-transform:translateY(0);transform:translateY(0)}.vegas-transition-slideUp2-out{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.vegas-transition-swirlLeft,.vegas-transition-swirlLeft2{-webkit-transform:scale(2) rotate(35deg);transform:scale(2) rotate(35deg);opacity:0}.vegas-transition-swirlLeft-in,.vegas-transition-swirlLeft2-in{-webkit-transform:scale(1) rotate(0);transform:scale(1) rotate(0);opacity:1}.vegas-transition-swirlLeft2-out,.vegas-transition-swirlRight,.vegas-transition-swirlRight2{-webkit-transform:scale(2) rotate(-35deg);transform:scale(2) rotate(-35deg);opacity:0}.vegas-transition-swirlRight-in,.vegas-transition-swirlRight2-in{-webkit-transform:scale(1) rotate(0);transform:scale(1) rotate(0);opacity:1}.vegas-transition-swirlRight2-out{-webkit-transform:scale(2) rotate(35deg);transform:scale(2) rotate(35deg);opacity:0}.vegas-transition-zoomIn,.vegas-transition-zoomIn2{-webkit-transform:scale(0);transform:scale(0);opacity:0}.vegas-transition-zoomIn-in,.vegas-transition-zoomIn2-in{-webkit-transform:scale(1);transform:scale(1);opacity:1}.vegas-transition-zoomIn2-out,.vegas-transition-zoomOut,.vegas-transition-zoomOut2{-webkit-transform:scale(2);transform:scale(2);opacity:0}.vegas-transition-zoomOut-in,.vegas-transition-zoomOut2-in{-webkit-transform:scale(1);transform:scale(1);opacity:1}.vegas-transition-zoomOut2-out{-webkit-transform:scale(0);transform:scale(0);opacity:0}.vegas-animation-kenburns{-webkit-animation:kenburns ease-out;animation:kenburns ease-out}@-webkit-keyframes kenburns{0%{-webkit-transform:scale(1.5);transform:scale(1.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes kenburns{0%{-webkit-transform:scale(1.5);transform:scale(1.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}.vegas-animation-kenburnsDownLeft{-webkit-animation:kenburnsDownLeft ease-out;animation:kenburnsDownLeft ease-out}@-webkit-keyframes kenburnsDownLeft{0%{-webkit-transform:scale(1.5) translate(10%,-10%);transform:scale(1.5) translate(10%,-10%)}100%{-webkit-transform:scale(1) translate(0,0);transform:scale(1) translate(0,0)}}@keyframes kenburnsDownLeft{0%{-webkit-transform:scale(1.5) translate(10%,-10%);transform:scale(1.5) translate(10%,-10%)}100%{-webkit-transform:scale(1) translate(0,0);transform:scale(1) translate(0,0)}}.vegas-animation-kenburnsDownRight{-webkit-animation:kenburnsDownRight ease-out;animation:kenburnsDownRight ease-out}@-webkit-keyframes kenburnsDownRight{0%{-webkit-transform:scale(1.5) translate(-10%,-10%);transform:scale(1.5) translate(-10%,-10%)}100%{-webkit-transform:scale(1) translate(0,0);transform:scale(1) translate(0,0)}}@keyframes kenburnsDownRight{0%{-webkit-transform:scale(1.5) translate(-10%,-10%);transform:scale(1.5) translate(-10%,-10%)}100%{-webkit-transform:scale(1) translate(0,0);transform:scale(1) translate(0,0)}}.vegas-animation-kenburnsDown{-webkit-animation:kenburnsDown ease-out;animation:kenburnsDown ease-out}@-webkit-keyframes kenburnsDown{0%{-webkit-transform:scale(1.5) translate(0,-10%);transform:scale(1.5) translate(0,-10%)}100%{-webkit-transform:scale(1) translate(0,0);transform:scale(1) translate(0,0)}}@keyframes kenburnsDown{0%{-webkit-transform:scale(1.5) translate(0,-10%);transform:scale(1.5) translate(0,-10%)}100%{-webkit-transform:scale(1) translate(0,0);transform:scale(1) translate(0,0)}}.vegas-animation-kenburnsLeft{-webkit-animation:kenburnsLeft ease-out;animation:kenburnsLeft ease-out}@-webkit-keyframes kenburnsLeft{0%{-webkit-transform:scale(1.5) translate(10%,0);transform:scale(1.5) translate(10%,0)}100%{-webkit-transform:scale(1) translate(0,0);transform:scale(1) translate(0,0)}}@keyframes kenburnsLeft{0%{-webkit-transform:scale(1.5) translate(10%,0);transform:scale(1.5) translate(10%,0)}100%{-webkit-transform:scale(1) translate(0,0);transform:scale(1) translate(0,0)}}.vegas-animation-kenburnsRight{-webkit-animation:kenburnsRight ease-out;animation:kenburnsRight ease-out}@-webkit-keyframes kenburnsRight{0%{-webkit-transform:scale(1.5) translate(-10%,0);transform:scale(1.5) translate(-10%,0)}100%{-webkit-transform:scale(1) translate(0,0);transform:scale(1) translate(0,0)}}@keyframes kenburnsRight{0%{-webkit-transform:scale(1.5) translate(-10%,0);transform:scale(1.5) translate(-10%,0)}100%{-webkit-transform:scale(1) translate(0,0);transform:scale(1) translate(0,0)}}.vegas-animation-kenburnsUpLeft{-webkit-animation:kenburnsUpLeft ease-out;animation:kenburnsUpLeft ease-out}@-webkit-keyframes kenburnsUpLeft{0%{-webkit-transform:scale(1.5) translate(10%,10%);transform:scale(1.5) translate(10%,10%)}100%{-webkit-transform:scale(1) translate(0,0);transform:scale(1) translate(0,0)}}@keyframes kenburnsUpLeft{0%{-webkit-transform:scale(1.5) translate(10%,10%);transform:scale(1.5) translate(10%,10%)}100%{-webkit-transform:scale(1) translate(0,0);transform:scale(1) translate(0,0)}}.vegas-animation-kenburnsUpRight{-webkit-animation:kenburnsUpRight ease-out;animation:kenburnsUpRight ease-out}@-webkit-keyframes kenburnsUpRight{0%{-webkit-transform:scale(1.5) translate(-10%,10%);transform:scale(1.5) translate(-10%,10%)}100%{-webkit-transform:scale(1) translate(0,0);transform:scale(1) translate(0,0)}}@keyframes kenburnsUpRight{0%{-webkit-transform:scale(1.5) translate(-10%,10%);transform:scale(1.5) translate(-10%,10%)}100%{-webkit-transform:scale(1) translate(0,0);transform:scale(1) translate(0,0)}}.vegas-animation-kenburnsUp{-webkit-animation:kenburnsUp ease-out;animation:kenburnsUp ease-out}@-webkit-keyframes kenburnsUp{0%{-webkit-transform:scale(1.5) translate(0,10%);transform:scale(1.5) translate(0,10%)}100%{-webkit-transform:scale(1) translate(0,0);transform:scale(1) translate(0,0)}}@keyframes kenburnsUp{0%{-webkit-transform:scale(1.5) translate(0,10%);transform:scale(1.5) translate(0,10%)}100%{-webkit-transform:scale(1) translate(0,0);transform:scale(1) translate(0,0)}}
					` }} />					
					<style dangerouslySetInnerHTML={{ __html: `
						#vegas-slider
						{
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100% !important;
						}

						#vegas-slider .vegas-control__btn
						{
							display: none;
							position: absolute;
							top: 50%;
							line-height: 1;
							font-size: 1.5rem;
							font-weight: 700;
							font-family: 'Poppins', sans-serif;
							color: #fff;
							text-transform: uppercase;
							cursor: pointer;
							padding: 5px;
							-webkit-transform: rotate(-90deg);
							-ms-transform: rotate(-90deg);
							-o-transform: rotate(-90deg);
							transform: rotate(-90deg);
							-webkit-transition: color 0.3s ease-in-out;
							-moz-transition: color 0.3s ease-in-out;
							-ms-transition: color 0.3s ease-in-out;
							-o-transition: color 0.3s ease-in-out;
							transition: color 0.3s ease-in-out;
							z-index: 3;
						}

						#vegas-slider .vegas-control__btn:hover { color: #2c1e17; }

						#vegas-control__prev { left: -10px; }
						#vegas-control__next { right: -10px; }

						#vegas-slider .vegas-dots
						{
							position: absolute;
							bottom: 20px;
							right: 10px;
							line-height: 0;
							text-align: center;
							z-index: 3;
						}

						@media (min-width: 576px)
						{
							#vegas-slider .vegas-dots
							{
								top: 50%;
								right: 20px;
								bottom: auto;
							}
						}

						#vegas-slider .vegas-dots a
						{
							display: block;
							width: 12px;
							height: 12px;
							margin: 6px 0 6px auto;
							cursor: pointer;
							background-color: transparent;
							border: 2px solid rgba(255, 255, 255, 0.5);
							border-radius: 50%;
							-webkit-transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, width 0.3s ease-in-out, border-radius 0.3s ease-in-out;
							-moz-transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, width 0.3s ease-in-out, border-radius 0.3s ease-in-out;
							-ms-transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, width 0.3s ease-in-out, border-radius 0.3s ease-in-out;
							-o-transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, width 0.3s ease-in-out, border-radius 0.3s ease-in-out;
							transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out, width 0.3s ease-in-out, border-radius 0.3s ease-in-out;
						}

						#vegas-slider .vegas-dots a:hover,
						#vegas-slider .vegas-dots a.active
						{
							width: 25px;
							border-radius: 30px;
						}

						#vegas-slider .vegas-dots a.active
						{
							background-color: #fff;
							border-color: #fff;
							cursor: default;
						}

						#start-screen_content-container
						{
							position: relative;
							height: 100%
						}

						.start-screen__content
						{
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							height: 100%;
							padding-top: 100px;
							padding-bottom: 50px;
							visibility: hidden;
							opacity: 0;
							text-align: center;
							color: #fff;
							-webkit-transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
							-moz-transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
							-ms-transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
							-o-transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
							transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
						}

						.start-screen__content.active
						{
							position: relative;
							top: auto;
							left: auto;
							right: auto;
							visibility: visible;
							opacity: 1;
							-webkit-transition: opacity .5s ease-in-out .2s,visibility .3s ease-in-out;
							-moz-transition: opacity .5s ease-in-out .2s,visibility .3s ease-in-out;
							-ms-transition: opacity .5s ease-in-out .2s,visibility .3s ease-in-out;
							-o-transition: opacity .5s ease-in-out .2s,visibility .3s ease-in-out;
							transition: opacity .5s ease-in-out .2s,visibility .3s ease-in-out;
						}

						.start-screen__content .title,
						.start-screen__content .subtitle
						{
							font-family: 'Poppins', sans-serif;
							text-transform: uppercase;
						}

						.start-screen__content .title
						{
							line-height: 1;
							font-size: 45px;
							font-weight: 700;
							letter-spacing: 5px;
							margin-bottom: 0;
						}

						.start-screen__content .subtitle
						{
							line-height: 1.2;
							font-size: 18px;
							font-weight: 300;
							letter-spacing: 20px;
							margin-top: 20px;
							margin-bottom: 20px;
						}

						.start-screen__content p
						{
							margin-top: 20px;
							margin-bottom: 20px;
						}

						.start-screen__content p:first-child { margin-top: 0; }
						.start-screen__content p:last-child { margin-bottom: 0; }

						.start-screen__content .custom-btn.primary
						{
							background-color: #2c1e17;
							color: #504935;
						}

						.start-screen__content .custom-btn.primary:hover,
						.start-screen__content .custom-btn.primary:focus
						{
							background-color: #444;
							border-color: #444;
							color: #fff;
						}

						/* first slide */
						.start-screen__content-first { }
						.start-screen__content-first .title { }
						.start-screen__content-first .subtitle {}

						/* second slide */
						.start-screen__content-second { }
						.start-screen__content-second .title { }
						.start-screen__content-second .subtitle {}

						/* third slide */
						.start-screen__content-third { }
						.start-screen__content-third .title { color: #282828; }
						.start-screen__content-third .subtitle {}

						@media only screen and (min-width: 576px)
						{
							#vegas-control__prev { left: 0px; }
							#vegas-control__next { right: 0px; }

							.start-screen__content { text-align: inherit; }

							.start-screen__content .title
							{
								line-height: 0.8;
								font-size: 80px;
								letter-spacing: 10px;
							}

							.start-screen__content .subtitle { font-size: 20px; }

							.start-screen__content p
							{
								margin-top: 20px;
								margin-bottom: 20px;
							}

							.start-screen__content-third .title { line-height: 0.6; }
						}

						@media only screen and (min-width: 768px)
						{
							.start-screen__content
							{
								padding-top: 120px;
								padding-bottom: 80px;
							}

							.start-screen__content .title
							{
								font-size: 110px;
								letter-spacing: 15px;
							}

							.start-screen__content .subtitle { font-size: 25px; }
						}

						@media only screen and (min-width: 992px)
						{
							.start-screen__content
							{
								padding-top: 120px;
								padding-bottom: 120px;
							}

							.start-screen__content .title
							{
								font-size: 130px;
								letter-spacing: 20px;
							}
						}

						@media only screen and (min-width: 1200px)
						{
							.start-screen__content .title
							{
								font-size: 150px;
								letter-spacing: 30px;
							}
						}
					` }} />

					
				</div>

				<div id="start-screen__content-container" className="start-screen__content-container  text-white">
					<div className="start-screen__content__item start-screen__content__item--2  align-items-center">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-12 col-md col-lg-9 col-xl-8">
									{/* <div className="__name">FieldCrop</div> */}

									<h1 className="__title text-white">Organic Products Online Store <br /><span> for Healthy Living</span></h1>
									<p>Healthier Soil, Healthier You</p>

									<p>
										We Support farmers, nurturing the soil, and bringing pure food to your home.
									</p>

									<p className="mt-5 mt-md-10">
										<span className="d-none d-sm-block"><a className="custom-btn custom-btn--big custom-btn--style-3" href="#">Buy Your Health</a></span>

										<span className="d-block d-sm-none"><a className="custom-btn custom-btn--small custom-btn--style-3" href="#">Buy Your Health</a></span>
									</p>
								</div>

								<div className="col-12 my-3 d-md-none"></div>

								<div className="col-12 col-md-auto col-lg-3 col-xl-4  text-center">
									<a className="play-btn" data-fancybox="" href="http://player.vimeo.com/video/44309170">
										<span></span>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="start-screen__content__item start-screen__content__item--1  align-items-center">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-12 col-md-10 col-xl-8">
									{/* <div className="__name">FieldCrop</div> */}

									<h1 className="__title text-white">Organic Products Online Store for Healthy Living </h1>
                                    <p>Healthier Soil, Healthier You .</p>
									<p className="text-center">We Support farmers, nurturing the soil, and bringing pure food to your home.</p>

									<p className="text-center mt-5 mt-md-10">
										<span className="d-none d-sm-block"><a className="custom-btn custom-btn--big custom-btn--style-3" href="#">Buy Your Health</a></span>

										<span className="d-block d-sm-none"><a className="custom-btn custom-btn--small custom-btn--style-3" href="#">Buy Your Health</a></span>
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* <div className="start-screen__content__item start-screen__content__item--3  align-items-center">
						<div className="container">
							<div className="row justify-content-center">
								<div className="col-12 col-md-auto col-xl-8">

									<h2 className="__title text-white">Live<span style={{"color":"#fcdb5a"}}>stock</span></h2>

									<p className="text-center mt-5 mt-md-10">
										<span className="d-none d-sm-block"><a className="custom-btn custom-btn--big custom-btn--style-3" href="#">Discover</a></span>

										<span className="d-block d-sm-none"><a className="custom-btn custom-btn--small custom-btn--style-3" href="#">Discover</a></span>
									</p>
								</div>
							</div>
						</div>
					</div> */}
				</div>

				<span className="scroll-discover"></span>
			</div>
			

			
			<main role="main">
				
				<link rel="stylesheet" href="/css/style.min.css" type="text/css" />
				<section className="section">
					<div className="container">
						<div className="section-heading section-heading--center" data-aos="fade">
							<h2 className="__title">Shop By  <span>Category</span></h2>

							<p>Show main categories with images/icons:</p>
						</div>

						
						<div className="feature feature--style-1">
							<div className="__inner">
								<div className="row">
									
									<div className="col-6 col-sm-4 col-lg-2">
										<div className="__item  text-center" data-aos="fade" data-aos-delay="100" data-aos-offset="100">
											<i className="__ico">
												<img className="img-fluid " src="/img/ico/ico_count_1-1.png" alt="demo" />
											</i>

											<h3 className="__title"> Cold Pressed Oils</h3>
										</div>
									</div>
									

									
									<div className="col-6 col-sm-4 col-lg-2">
										<div className="__item  text-center" data-aos="fade" data-aos-delay="200" data-aos-offset="100">
											<i className="__ico">
												<img className="img-fluid " src="/img/ico/ico_count_1-1.png" alt="demo" />
											</i>

											<h3 className="__title"> Desi Ghee</h3>
										</div>
									</div>
									

									
									<div className="col-6 col-sm-4 col-lg-2">
										<div className="__item  text-center" data-aos="fade" data-aos-delay="300" data-aos-offset="100">
											<i className="__ico">
												<img className="img-fluid " src="/img/ico/ico_count_1-1.png" alt="demo" />
											</i>

											<h3 className="__title">Hand Pounded Spices</h3>
										</div>
									</div>
									

									
									<div className="col-6 col-sm-4 col-lg-2">
										<div className="__item  text-center" data-aos="fade" data-aos-delay="400" data-aos-offset="100">
											<i className="__ico">
												<img className="img-fluid " src="/img/ico/ico_count_1-1.png" alt="demo" />
											</i>

											<h3 className="__title">Atta (Flours)</h3>
										</div>
									</div>
									

									
									<div className="col-6 col-sm-4 col-lg-2">
										<div className="__item  text-center" data-aos="fade" data-aos-delay="500" data-aos-offset="100">
											<i className="__ico">
												<img className="img-fluid " src="/img/ico/ico_count_1-1.png" alt="demo" />
											</i>

											<h3 className="__title">Natural Squashes
</h3>
										</div>
									</div>
									

									
									<div className="col-6 col-sm-4 col-lg-2">
										<div className="__item  text-center" data-aos="fade" data-aos-delay="600" data-aos-offset="100">
											<i className="__ico">
												<img className="img-fluid " src="/img/ico/ico_count_1-1.png" alt="demo" />
											</i>

											<h3 className="__title">Himalayan Herbal Products</h3>
										</div>
									</div>
									
								</div>
							</div>
						</div>
						
					</div>
				</section>
				  
				  {/* Trusted */}
                 <section className="section section--base-bg" style={{backgroundColor: '#ffffff'}}>
					<div className="container">
						<div className="section-heading section-heading--center" data-aos="fade">
							<h2 className="__title"> Trusted Quality<span> You Can Rely On</span></h2>
						</div>
						<div className="advantages">
							<div className="__inner">
								<div className="row">
									
									<div className="col-12 col-sm-6 col-lg">
										<div className="__item">
											<i className="__ico">
												<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#ff9191" viewBox="0 0 512 512"><path d="M133.565 150.261h244.87v22.261h-244.87zM356.174 183.652h22.261v22.261h-22.261zM133.565 183.652h22.261v22.261h-22.261zM244.87 77.913h22.261v22.261H244.87zM278.261 77.913h22.261v22.261h-22.261zM211.478 77.913h22.261v22.261h-22.261zM178.087 77.913h22.261v22.261h-22.261zM311.652 77.913h22.261v22.261h-22.261z"/><path d="M459.458 479.918c-9.766 5.209-18.233 9.708-35.892 9.812l65.603-196.819a11.132 11.132 0 00-5.992-13.669l-60.22-27.098V144.696c0-18.412-14.979-33.391-33.391-33.391H372.87V55.652c0-6.147-4.983-11.13-11.13-11.13h-94.61V0h-22.26v44.522h-94.609c-6.147 0-11.13 4.983-11.13 11.13v55.652h-16.696c-18.412 0-33.391 14.979-33.391 33.391v107.441l-60.221 27.105a11.128 11.128 0 00-5.99 13.669l65.603 196.818c-17.66-.104-26.126-4.602-35.892-9.811-10.933-5.83-23.325-12.439-46.977-12.439v22.261c18.087 0 26.621 4.551 36.501 9.821C53 505.391 65.391 512 89.044 512c6.261 0 11.602-.414 16.322-1.263 13.658-2.149 22.685-6.958 30.651-11.203 9.864-5.256 18.382-9.795 36.398-9.795 18.087 0 26.62 4.551 36.501 9.821 10.932 5.831 23.324 12.44 46.976 12.44s36.044-6.609 46.977-12.439c9.88-5.27 18.414-9.821 36.501-9.821 18.079 0 26.624 4.539 36.518 9.796 7.991 4.244 17.043 9.053 30.75 11.202 4.718.85 10.057 1.263 16.318 1.263 23.652 0 36.044-6.609 46.977-12.439 9.881-5.27 18.414-9.821 36.501-9.821V467.48c-23.651-.002-36.043 6.607-46.976 12.438zm5.411-184.505l-7.981 23.943-189.758-87.187v-25.738l197.739 88.982zM161.391 66.783h189.217v44.522H161.391V66.783zm-50.087 77.913c0-6.137 4.993-11.13 11.13-11.13h267.13c6.137 0 11.13 4.993 11.13 11.13v97.429l-140.129-63.057a11.12 11.12 0 00-9.135 0L111.302 242.12v-97.424zM47.132 295.413l197.738-88.981v25.738L55.112 319.356l-7.98-23.943zm354.004 191.209c-5.407-1.759-9.886-4.132-14.806-6.745-10.938-5.811-23.337-12.398-46.961-12.398-23.652 0-36.044 6.609-46.977 12.439-9.882 5.27-18.414 9.822-36.501 9.822s-26.621-4.551-36.501-9.822c-10.932-5.83-23.325-12.439-46.977-12.439-23.576 0-35.949 6.593-46.865 12.409-4.884 2.602-9.332 4.965-14.689 6.719L62.192 340.6l182.677-83.932v132.897h22.261V256.668l182.677 83.933-48.671 146.021z"/></svg>
											</i>

											<h4 className="__title h6">Free Shipping On Order Over $120</h4>

											<span>Free shipping on all order</span>
										</div>
									</div>
									

									
									<div className="col-12 col-sm-6 col-lg">
										<div className="__item">
											<i className="__ico">
												<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#5e9a4b" viewBox="0 0 512.004 512"><path d="M490.926 213.906l-6.586-4.926a22.073 22.073 0 01-7.082-26.425l3.242-7.559c6.586-15.379 5.566-32.508-2.797-46.992-8.367-14.488-22.687-23.938-39.3-25.918l-8.165-.977a22.068 22.068 0 01-19.347-19.343l-.973-8.168C407.934 56.988 398.484 42.664 384 34.3c-14.488-8.367-31.617-9.387-46.992-2.797l-7.563 3.238a22.068 22.068 0 01-26.425-7.082l-4.926-6.582C288.07 7.684 272.73.004 256 .004s-32.07 7.68-42.094 21.074l-4.93 6.582a22.061 22.061 0 01-26.425 7.082l-7.559-3.238c-15.379-6.586-32.508-5.57-46.992 2.797-14.488 8.363-23.937 22.687-25.918 39.297l-.977 8.164a22.068 22.068 0 01-19.347 19.347l-8.164.977c-16.61 1.98-30.934 11.43-39.297 25.918-8.367 14.484-9.383 31.613-2.797 46.992l3.238 7.559a22.068 22.068 0 01-7.082 26.425l-6.582 4.926C7.684 223.93 0 239.273 0 256c0 16.73 7.684 32.074 21.074 42.098l6.586 4.925a22.073 22.073 0 017.082 26.426l-3.242 7.559c-6.586 15.379-5.566 32.508 2.797 46.992 8.367 14.488 22.687 23.938 39.3 25.918l8.165.977a22.068 22.068 0 0119.347 19.343l.973 8.168c1.984 16.61 11.434 30.934 25.918 39.297 14.488 8.363 31.617 9.383 46.992 2.797l7.563-3.238a22.068 22.068 0 0126.425 7.082l4.926 6.582c10.024 13.394 25.367 21.078 42.098 21.078 16.726 0 32.07-7.684 42.094-21.078l4.925-6.582a22.064 22.064 0 0126.43-7.078l7.559 3.234c15.375 6.586 32.504 5.57 46.992-2.793 14.484-8.367 23.934-22.691 25.918-39.3l.973-8.165a22.068 22.068 0 0119.347-19.347l8.164-.973c16.61-1.984 30.938-11.434 39.301-25.918 8.363-14.488 9.383-31.617 2.793-46.996l-3.234-7.555a22.067 22.067 0 017.082-26.43l6.582-4.925c13.394-10.024 21.074-25.368 21.074-42.094-.004-16.73-7.688-32.074-21.078-42.098zm-11.985 68.18l-6.582 4.926a42.006 42.006 0 00-13.48 50.316l3.234 7.555c4.082 9.527 3.45 20.14-1.73 29.117-5.184 8.98-14.059 14.832-24.352 16.063l-8.164.972a42.009 42.009 0 00-36.832 36.836l-.976 8.164c-1.23 10.293-7.082 19.168-16.059 24.352-8.977 5.18-19.59 5.812-29.117 1.73l-7.559-3.238a42.014 42.014 0 00-50.316 13.484l-4.926 6.582c-6.21 8.297-15.719 13.059-26.082 13.059-10.367 0-19.875-4.762-26.086-13.059l-4.926-6.582c-8.168-10.918-20.73-16.914-33.675-16.914a42.222 42.222 0 00-16.637 3.43l-7.559 3.238c-9.531 4.082-20.14 3.45-29.12-1.73-8.977-5.184-14.829-14.059-16.06-24.352l-.972-8.164a42.012 42.012 0 00-36.836-36.832l-8.164-.977c-10.293-1.23-19.168-7.082-24.352-16.058-5.18-8.977-5.812-19.59-1.73-29.117l3.238-7.559a42.019 42.019 0 00-13.48-50.316l-6.586-4.926C24.758 275.875 20 266.367 20 256c0-10.363 4.758-19.871 13.059-26.082l6.582-4.926c15.62-11.691 21.168-32.383 13.48-50.316l-3.234-7.559c-4.082-9.527-3.45-20.14 1.73-29.117 5.184-8.977 14.059-14.828 24.352-16.059l8.164-.976a42.005 42.005 0 0036.832-36.832l.976-8.164c1.23-10.293 7.082-19.168 16.059-24.352 8.977-5.183 19.59-5.812 29.117-1.73l7.559 3.234a42.014 42.014 0 0050.316-13.48l4.926-6.582C236.128 24.762 245.637 20 256 20s19.871 4.762 26.082 13.059l4.93 6.586a42.008 42.008 0 0050.312 13.48l7.559-3.238c9.527-4.082 20.14-3.45 29.117 1.73 8.977 5.184 14.832 14.059 16.059 24.352l.976 8.164a42.008 42.008 0 0036.832 36.832l8.164.976c10.293 1.23 19.168 7.082 24.352 16.059 5.183 8.977 5.812 19.59 1.734 29.117l-3.238 7.559a42.012 42.012 0 0013.48 50.316l6.582 4.926c8.301 6.21 13.059 15.719 13.059 26.086 0 10.363-4.758 19.871-13.059 26.082zm0 0"/><path d="M256 58.121c-30.168 0-59.137 6.617-86.098 19.668-4.972 2.406-7.05 8.387-4.648 13.356 2.406 4.972 8.39 7.05 13.36 4.644C202.835 84.066 228.87 78.121 256 78.121c98.082 0 177.879 79.797 177.879 177.883 0 98.082-79.797 177.879-177.879 177.879-98.086 0-177.883-79.797-177.883-177.88 0-40.175 13.067-78.081 37.79-109.624 3.406-4.348 2.644-10.633-1.704-14.043-4.348-3.406-10.633-2.64-14.039 1.703-27.504 35.102-42.043 77.274-42.043 121.965 0 109.11 88.77 197.879 197.879 197.879s197.879-88.77 197.879-197.88c0-109.112-88.77-197.882-197.879-197.882zm0 0"/><path d="M109.79 205.086l-7.618 9.71c-3.41 4.349-2.649 10.634 1.695 14.04 4.348 3.41 10.633 2.652 14.04-1.695l4.183-5.328v66.136h-6.695c-5.524 0-10 4.477-10 10 0 5.524 4.476 10 10 10h33.046c5.52 0 10-4.476 10-10 0-5.523-4.48-10-10-10h-6.351v-76.691c0-5.524-4.48-10-10-10h-14.434a9.994 9.994 0 00-7.867 3.828zm0 0M190.148 307.95h5.196c16.515 0 29.949-13.434 29.949-29.95v-48.473c0-16.515-13.438-29.953-29.95-29.953h-5.195c-16.515 0-29.949 13.438-29.949 29.953V278c0 16.516 13.434 29.95 29.95 29.95zm-9.949-78.423c0-5.488 4.465-9.953 9.95-9.953h5.195c5.484 0 9.949 4.465 9.949 9.953V278c0 5.484-4.465 9.95-9.95 9.95h-5.195c-5.484 0-9.949-4.466-9.949-9.95zm0 0M270.738 307.95c16.516 0 29.95-13.434 29.95-29.95v-48.473c0-16.515-13.438-29.953-29.95-29.953h-5.195c-16.516 0-29.95 13.438-29.95 29.953V278c0 16.516 13.434 29.95 29.95 29.95zM255.594 278v-48.473c0-5.488 4.465-9.953 9.949-9.953h5.195c5.485 0 9.95 4.465 9.95 9.953V278c0 5.484-4.465 9.95-9.95 9.95h-5.195c-5.484 0-9.95-4.462-9.95-9.95zm0 0M402.8 198.36c-4.464-3.247-10.718-2.258-13.968 2.206l-63.539 87.38c-3.25 4.468-2.262 10.722 2.207 13.968a9.992 9.992 0 0013.969-2.207l63.539-87.379c3.25-4.465 2.258-10.719-2.207-13.969zm0 0M165.93 160.277a9.967 9.967 0 006.57-2.464 126.905 126.905 0 0183.5-31.305c28.75 0 55.863 9.367 78.41 27.086 4.344 3.414 10.63 2.66 14.043-1.684 3.41-4.34 2.656-10.629-1.683-14.039-26.11-20.52-57.497-31.363-90.77-31.363a146.905 146.905 0 00-96.652 36.238c-4.16 3.633-4.59 9.95-.957 14.11a9.972 9.972 0 007.539 3.421zm0 0M164.09 369.176c26.101 20.515 57.492 31.36 90.765 31.36 23.086 0 45.188-5.204 65.696-15.462 4.937-2.469 6.937-8.476 4.469-13.418-2.473-4.937-8.477-6.937-13.418-4.469-17.704 8.86-36.797 13.348-56.747 13.348-28.746 0-55.863-9.363-78.41-27.086-4.34-3.41-10.629-2.656-14.039 1.684-3.414 4.344-2.66 10.629 1.684 14.043zm0 0M354.2 352.07c-2.212-3.312-6.352-5.03-10.262-4.25-4.149.832-7.415 4.301-7.965 8.5-.54 4.078 1.578 8.184 5.203 10.121 3.64 1.95 8.219 1.414 11.324-1.308 3.734-3.285 4.398-8.934 1.7-13.063zm0 0M337.223 196.45c-12.977 0-23.536 10.554-23.536 23.53 0 12.977 10.56 23.536 23.536 23.536 12.972 0 23.53-10.559 23.53-23.536 0-12.976-10.558-23.53-23.53-23.53zm0 27.066c-1.95 0-3.536-1.586-3.536-3.536s1.586-3.535 3.536-3.535a3.536 3.536 0 010 7.07zm0 0M369.191 280.926c0 12.976 10.559 23.535 23.532 23.535 12.976 0 23.535-10.559 23.535-23.535 0-12.977-10.559-23.535-23.535-23.535-12.973 0-23.532 10.558-23.532 23.535zm27.067 0a3.536 3.536 0 01-3.531 3.535c-1.95 0-3.536-1.586-3.536-3.535s1.586-3.535 3.536-3.535a3.536 3.536 0 013.53 3.535zm0 0M129.473 113.453c1.609 3.863 5.539 6.356 9.718 6.16 4.125-.195 7.75-3.015 9.024-6.93 1.285-3.953-.113-8.468-3.426-10.988-3.379-2.57-8.098-2.718-11.637-.379-3.945 2.606-5.46 7.79-3.68 12.137zm0 0"/></svg>
											</i>

											<h4 className="__title h6">Member Discount</h4>

											<span>Back guarantee under 7 days</span>
										</div>
									</div>
									

									
									<div className="col-12 col-sm-6 col-lg">
										<div className="__item">
											<i className="__ico">
												<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#ffbb4c" viewBox="-29 0 487 487.719"><path d="M220.867 266.176a7.616 7.616 0 00-2.742-.094c-9.16-1.066-16.07-8.816-16.086-18.035a8 8 0 00-16 0c.024 15.394 10.32 28.879 25.164 32.953v8a8 8 0 0016 0v-7.516c17.133-3.586 28.777-19.543 26.977-36.953-1.805-17.41-16.473-30.64-33.977-30.644-10.031 0-18.164-8.133-18.164-18.164s8.133-18.164 18.164-18.164 18.164 8.132 18.164 18.164a8 8 0 0016 0c-.023-16.164-11.347-30.106-27.164-33.442V155a8 8 0 00-16 0v7.77c-16.508 4.507-27.133 20.535-24.86 37.496s16.747 29.62 33.86 29.617c9.899 0 17.973 7.926 18.152 17.82.184 9.895-7.597 18.113-17.488 18.473zm0 0"/><path d="M104.195 222.5c0 64.07 51.938 116.008 116.008 116.008S336.211 286.57 336.211 222.5s-51.938-116.008-116.008-116.008c-64.039.07-115.933 51.969-116.008 116.008zm116.008-100.008c55.234 0 100.008 44.774 100.008 100.008s-44.774 100.008-100.008 100.008S120.195 277.734 120.195 222.5c.063-55.207 44.801-99.945 100.008-100.008zm0 0"/><path d="M375.648 358.23l-62.668 29.61a51.043 51.043 0 00-43.515-26.852l-57.852-1.59a61.1 61.1 0 01-26.293-6.789l-5.886-3.05a103.833 103.833 0 00-96.176.101l.367-13.336a8 8 0 00-7.777-8.219L12.41 326.36a7.997 7.997 0 00-8.215 7.778L.363 473.347a8 8 0 007.778 8.22l63.437 1.746h.219a8 8 0 008-7.782l.183-6.66 16.48-8.824a28.269 28.269 0 0121.099-2.309l98.414 27.621c.172.051.343.09.52.13a105.348 105.348 0 0021.628 2.23 106.739 106.739 0 0044.59-9.73 7.43 7.43 0 00.992-.548l142.692-92.296a8.004 8.004 0 002.62-10.657c-10.593-18.797-34.09-25.957-53.367-16.258zM16.578 465.793l3.39-123.219 47.442 1.305-3.39 123.223zm258.926-2.094a90.704 90.704 0 01-55.469 6.192l-98.148-27.551a44.236 44.236 0 00-32.977 3.605l-8.422 4.512 2.254-81.926a87.938 87.938 0 0189.336-4.765l5.887 3.05a77.267 77.267 0 0033.21 8.579l57.856 1.59c16.25.468 30.051 12.038 33.348 27.96l-86.176-2.379c-4.418-.12-8.094 3.364-8.219 7.778a8.003 8.003 0 007.778 8.219l95.101 2.617h.223a8 8 0 007.992-7.782 50.772 50.772 0 00-.773-10.378l64.277-30.372c.063-.027.125-.058.188-.09a24.443 24.443 0 0127.64 3.872zm0 0M228.203 84V8a8 8 0 00-16 0v76a8 8 0 0016 0zm0 0M288.203 84V48a8 8 0 00-16 0v36a8 8 0 0016 0zm0 0M168.203 84V48a8 8 0 00-16 0v36a8 8 0 0016 0zm0 0"/></svg>
											</i>

											<h4 className="__title h6">Money Return</h4>

											<span>Support online 24 hours a day</span>
										</div>
									</div>
									

									
									<div className="col-12 col-sm-6 col-lg">
										<div className="__item">
											<i className="__ico">
												<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#7fcffc" viewBox="0 0 422.694 422.694"><path d="M333.069 311.067a691.423 691.423 0 005.04-84 52.639 52.639 0 0017.2-15.28c12.88-18.16 13.92-44.08 3.2-77.12a7.997 7.997 0 00-3.2-4.16l-5.36-3.6a120.64 120.64 0 00-28.8-81.76c-24-26.56-60.72-40-109.44-40s-85.52 13.76-109.44 40a120.64 120.64 0 00-28.8 81.76l-5.36 3.6a7.997 7.997 0 00-3.2 4.16c-18.56 57.2 2.16 81.84 19.84 92.24a591.1 591.1 0 004.56 84.4c-43.52 17.04-90.64 47.36-89.28 98.24a8 8 0 008 8h406.64a8 8 0 008-8c1.28-51.12-46.32-81.52-89.6-98.48zM85.007 207.001c-15.928-16.007-12.889-42.764-6.018-65.054l6.8-4.56a8 8 0 003.52-7.44 106.963 106.963 0 0124.64-74.48c20.72-22.72 53.52-34.48 97.36-34.64 43.84-.16 76.64 11.92 97.44 34.88a106.963 106.963 0 0124.64 74.48 8 8 0 003.52 7.44l6.88 4.56c8 26.64 7.6 46.88-1.84 60.24a35.054 35.054 0 01-4.4 5.04c-2.8-60.72-17.04-106.24-42.8-135.6a108.24 108.24 0 00-42.32-29.76h-.72a132.16 132.16 0 00-45.92-8.56 96.96 96.96 0 00-76.88 32.96c-30.498 34.49-41.155 90.65-43.902 140.494zm186.542 73.746l.08-.32a90.65 90.65 0 0012.96-21.36 92.36 92.36 0 004.8-14.56l21.2-8.96a69.277 69.277 0 0011.6-2.08 695.336 695.336 0 01-4.64 72 368.1 368.1 0 00-45.76-12.08v-11.36a7.52 7.52 0 00-.24-1.28zm-34.56-22.88a8.96 8.96 0 11-8.96-8.96 8.959 8.959 0 018.8 9.28l.16-.32zm-9.04-24.64l.08-.32c-13.785-.092-25.034 11.009-25.125 24.793s11.009 25.034 24.793 25.125c13.104.087 24.044-9.974 25.052-23.039l17.2-7.28c-14.08 33.04-48.48 45.68-58.48 48.72-43.84-24-66.56-48-65.68-71.36 1.44-37.28 61.12-64 67.92-67.2a92.322 92.322 0 0036.48-26.4c20.56 37.52 28.8 69.84 24.88 96.64l-26.4 11.12a24.961 24.961 0 00-20.72-10.799zm-127.28-13.28l.32-.24c1.52-50.08 10.4-109.12 40-143.04a80.001 80.001 0 0164.64-27.52 120.014 120.014 0 0134.8 5.44 64.005 64.005 0 002.88 22.16c3.44 13.28 6.96 26.96 0 40v.56a7.957 7.957 0 00-.4.8c0 .72-6.08 17.2-35.44 29.92-12.64 5.44-75.76 35.12-77.52 81.2-.64 16.64 6.8 32.88 22.08 48.72a8 8 0 00-1.04 3.68v11.28a367.515 367.515 0 00-46.56 12.32 609.02 609.02 0 01-3.84-80.48 8.006 8.006 0 00.08-4.8zm208.08-.56a8.004 8.004 0 00-2.88.64l-13.6 5.76c1.28-30.08-9.6-65.44-32.96-105.36a72.004 72.004 0 000-48c-1.04-3.84-2-8-2.56-11.12a92.856 92.856 0 0126.24 20.8c24.56 28.08 37.76 73.12 39.28 134.4a51.433 51.433 0 01-13.52 2.88zm-105.44 181.92H16.269c6.32-60.08 104-85.2 134.56-91.68v14c0 18.16 22.08 32 52.48 34.32v43.36zm-36.48-77.6v-32a263.096 263.096 0 0040 25.36 8.004 8.004 0 003.76.96h1.76a121.275 121.275 0 0043.52-21.76v27.6c0 7.6-17.36 18.56-44.48 18.56-27.12 0-44.56-11.36-44.56-18.72zm52.48 77.6v-43.28c30.4-2.08 52.48-16 52.48-34.32v-14c30.8 6.4 128 31.44 134.56 91.68l-187.04-.08z"/></svg>
											</i>

											<h4 className="__title h6">Online Support</h4>

											<span>Online Support 24/7</span>
										</div>
									</div>
									
								</div>
							</div>
						</div>
						
					</div>
				</section>

				
				{/* Why Choose Fieldcrop Section — Fixed Background Parallax Design */}
				<div className="section-heading section-heading--center" data-aos="fade">
							<h2 className="__title">Why Choose<span> Fieldcrop</span></h2>
							<p>We support farmers to grow healthier crops, waste less, and earn more —<br/>
								using science-backed solutions and farm-fresh quality.</p>
						    </div>
				<section id="why-choose-fieldcrop" className="why-choose-parallax-section">
					{/* <div className="why-choose-overlay"></div> */}
					<div className="container" style={{position: 'relative', zIndex: 2}}>
						{/* Cards Grid */}
						<div className="row why-choose-cards-row">

							{/* Card 1 */}
							<div className="col-12 col-sm-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
								<div className="wc-glass-card">
									<div className="wc-icon-wrap wc-icon-green">
										<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 1 10 10"/><path d="M2 12a10 10 0 0 0 10 10"/><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="3"/></svg>
									</div>
									<h3 className="__title h5">Sustainable &amp; Science-Backed</h3>
									<p>Our methods improve yields, protect soil health, and are built on real field research you can trust.</p>
									<ul className="wc-feature-list">
										<li><span className="wc-check">✓</span> 100% Natural Products</li>
										<li><span className="wc-check">✓</span> No Chemicals or Preservatives</li>
									</ul>
								</div>
							</div>

							{/* Card 2 */}
							<div className="col-12 col-sm-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
								<div className="wc-glass-card">
									<div className="wc-icon-wrap wc-icon-gold">
										<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
									</div>
									<h3 className="__title h5">Premium Farm Fresh Products</h3>
									<p>From crop nutrition to harvest — reliable, consistent quality straight from India's finest farms.</p>
									<ul className="wc-feature-list">
										<li><span className="wc-check">✓</span> Traditional Processing</li>
										<li><span className="wc-check">✓</span> Handcrafted with Care</li>
									</ul>
								</div>
							</div>

							{/* Card 3 */}
							<div className="col-12 col-sm-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
								<div className="wc-glass-card">
									<div className="wc-icon-wrap wc-icon-green">
										<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
									</div>
									<h3 className="__title h5">Easy Ordering for Farmers</h3>
									<p>No middlemen, no hassle. Transparent sourcing, eco-friendly inputs, and direct farm-gate delivery.</p>
									<ul className="wc-feature-list">
										<li><span className="wc-check">✓</span> Farm to Home Delivery</li>
										<li><span className="wc-check">✓</span> Zero Hidden Charges</li>
									</ul>
								</div>
							</div>

							{/* Card 4 */}
							<div className="col-12 col-sm-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="400">
								<div className="wc-glass-card">
									<div className="wc-icon-wrap wc-icon-gold">
										<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
									</div>
									<h3 className="wc-card-title__title h5">A Partner, Not a Supplier</h3>
									<p>We solve real on-ground challenges — water efficiency, crop resilience, sustainable productivity — year after year.</p>
									<ul className="wc-feature-list">
										<li><span className="wc-check">✓</span> Year-Round Support</li>
										<li><span className="wc-check">✓</span> Expert Field Guidance</li>
									</ul>
								</div>
							</div>

						</div>
					</div>

					<style dangerouslySetInnerHTML={{ __html: `
						/* ===== Why Choose – Parallax Fixed BG Section ===== */
						.why-choose-parallax-section {
							position: relative;
							background-image: url('/img/intro_img/11.jpg');
							background-attachment: fixed;
							background-size: cover;
							background-position: center center;
							background-repeat: no-repeat;
							padding: 100px 0 80px;
							overflow: hidden;
						}
						.why-choose-overlay {
							position: absolute;
							inset: 0;
							background: linear-gradient(
								135deg,
								rgba(10, 40, 15, 0.82) 0%,
								rgba(20, 60, 25, 0.75) 50%,
								rgba(44, 30, 23, 0.80) 100%
							);
							z-index: 1;
						}
						/* Header */
						.why-choose-header {
							text-align: center;
							margin-bottom: 60px;
						}
						.why-choose-eyebrow {
							display: inline-block;
							font-size: 0.8rem;
							font-weight: 700;
							letter-spacing: 4px;
							text-transform: uppercase;
							color: #c8e6c9;
							border: 1px solid rgba(200,230,201,0.4);
							border-radius: 30px;
							padding: 6px 20px;
							margin-bottom: 18px;
							background: rgba(255,255,255,0.05);
						}
						.why-choose-title {
							font-size: clamp(2rem, 4vw, 3.2rem);
							font-weight: 800;
							color: #ffffff;
							line-height: 1.15;
							margin-bottom: 18px;
							font-family: 'Raleway', sans-serif;
						}
						.why-choose-title em {
							font-style: normal;
							background: linear-gradient(90deg, #a8e063, #56ab2f);
							-webkit-background-clip: text;
							-webkit-text-fill-color: transparent;
							background-clip: text;
						}
						.why-choose-subtitle {
							color: rgba(255,255,255,0.75);
							font-size: 1.05rem;
							line-height: 1.7;
							max-width: 600px;
							margin: 0 auto 28px;
						}
						.why-choose-divider {
							width: 60px;
							height: 3px;
							background: linear-gradient(90deg, #56ab2f, #a8e063);
							border-radius: 2px;
							margin: 0 auto;
						}
						/* Glass Cards */
						.wc-glass-card {
							background: rgba(255, 255, 255, 0.08);
							backdrop-filter: blur(14px);
							-webkit-backdrop-filter: blur(14px);
							border: 1px solid rgba(255,255,255,0.18);
							border-radius: 20px;
							padding: 36px 28px 30px;
							text-align: center;
							height: 100%;
							transition: transform 0.35s ease, box-shadow 0.35s ease, background 0.35s ease;
							position: relative;
							overflow: hidden;
						}
						.wc-glass-card::before {
							content: '';
							position: absolute;
							top: -60%;
							left: -60%;
							width: 220%;
							height: 220%;
							background: radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 65%);
							pointer-events: none;
						}
						.wc-glass-card:hover {
							transform: translateY(-12px) scale(1.02);
							box-shadow: 0 24px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(168,224,99,0.3);
							background: rgba(255,255,255,0.13);
						}
						/* Icon */
						.wc-icon-wrap {
							width: 72px;
							height: 72px;
							border-radius: 50%;
							display: flex;
							align-items: center;
							justify-content: center;
							margin: 0 auto 22px;
							transition: transform 0.3s ease;
						}
						.wc-glass-card:hover .wc-icon-wrap {
							transform: rotate(8deg) scale(1.1);
						}
						.wc-icon-green {
							background: linear-gradient(135deg, rgba(86,171,47,0.35), rgba(168,224,99,0.2));
							border: 1px solid rgba(86,171,47,0.4);
							color: #a8e063;
						}
						.wc-icon-gold {
							background: linear-gradient(135deg, rgba(241,207,105,0.3), rgba(255,180,50,0.2));
							border: 1px solid rgba(241,207,105,0.4);
							color: #f1cf69;
						}
						/* Card Text */
						.wc-card-title {
							font-size: 1.05rem;
							font-weight: 700;
							color: #ffffff;
							font-family: 'Raleway', sans-serif;
							text-transform: uppercase;
							letter-spacing: 0.5px;
							margin-bottom: 12px;
							line-height: 1.3;
						}
						.wc-card-text {
							color: rgba(255,255,255,0.72);
							font-size: 0.92rem;
							line-height: 1.65;
							margin-bottom: 18px;
						}
						.wc-feature-list {
							list-style: none;
							padding: 0;
							margin: 0;
							text-align: left;
						}
						.wc-feature-list li {
							color: rgba(255,255,255,0.8);
							font-size: 0.88rem;
							padding: 5px 0;
							display: flex;
							align-items: center;
							gap: 8px;
							border-top: 1px solid rgba(255,255,255,0.08);
						}
						.wc-feature-list li:first-child {
							border-top: none;
						}
						.wc-check {
							width: 20px;
							height: 20px;
							background: linear-gradient(135deg, #56ab2f, #a8e063);
							border-radius: 50%;
							display: inline-flex;
							align-items: center;
							justify-content: center;
							font-size: 0.65rem;
							font-weight: 900;
							color: #fff;
							flex-shrink: 0;
						}
						/* Stats Bar */
						.wc-stats-bar {
							margin-top: 60px;
							background: rgba(255,255,255,0.07);
							backdrop-filter: blur(12px);
							-webkit-backdrop-filter: blur(12px);
							border: 1px solid rgba(255,255,255,0.15);
							border-radius: 16px;
							padding: 28px 40px;
							display: flex;
							align-items: center;
							justify-content: space-around;
							flex-wrap: wrap;
							gap: 20px;
						}
						.wc-stat {
							display: flex;
							flex-direction: column;
							align-items: center;
							gap: 4px;
						}
						.wc-stat-num {
							font-size: clamp(1.6rem, 3vw, 2.2rem);
							font-weight: 800;
							color: #a8e063;
							font-family: 'Raleway', sans-serif;
							line-height: 1;
						}
						.wc-stat-label {
							font-size: 0.82rem;
							color: rgba(255,255,255,0.65);
							text-transform: uppercase;
							letter-spacing: 1.5px;
							font-weight: 600;
						}
						.wc-stat-sep {
							width: 1px;
							height: 50px;
							background: rgba(255,255,255,0.18);
						}
						/* Mobile */
						@media (max-width: 768px) {
							.why-choose-parallax-section {
								background-attachment: scroll;
								padding: 70px 0 60px;
							}
							.wc-stats-bar {
								padding: 20px;
								gap: 16px;
							}
							.wc-stat-sep { display: none; }
							.wc-glass-card { padding: 28px 20px; }
						}
						@media (max-width: 480px) {
							.wc-stats-bar {
								justify-content: center;
							}
						}
					` }} />
				</section>
				
				{/* What You Gain Section */}
				<section className="section section--base-bg" style={{backgroundColor: '#ffffff'}}>
					<div className="container">
						<div className="section-heading section-heading--center" data-aos="fade">
							<h2 className="__title">What You<span>Gain</span></h2>

							<p>Discover the benefits of choosing FieldCrop for your health, family, and environment.</p>
						</div></div>
				</section>
				<section className="section section--no-pt section--gray-bg">
					<div className="container">
						<div className="recipes">
							<div className="__inner">
								<div className="row no-gutters">
									
									<div className="col-12 col-lg-4">
										<div className="__item">
											<div className="row no-gutters align-items-center">
												<div className="col-12 col-md-6 align-self-md-stretch">
													<figure className="__image">
														<img className="" src="/img/product-preview_img/5.jpg" alt="demo" />
													</figure>
												</div>

												<div className="col-12 col-md-6">
													<div className="__content">
														<h3 className="__title h5"><a href="/blog_details">Good for Your Child</a></h3>
													</div>
												</div>
											</div>
										</div>

										<div className="__item">
											<div className="row flex-md-row-reverse no-gutters align-items-center">
												<div className="col-12 col-md-6 align-self-md-stretch">
													<figure className="__image">
														<img className="" src="/img/product-preview_img/2.jpg" alt="demo" />
													</figure>
												</div>

												<div className="col-12 col-md-6">
													<div className="__content">
														<h3 className="__title h5"><a href="/blog_details">Kind to Your Hormones</a></h3>
													</div>
												</div>
											</div>
										</div>
									</div>
									

									
									<div className="col-12 col-lg-4">
										<div className="__item">
											<div className="row no-gutters align-items-center">
												<div className="col-12 col-md-6 align-self-md-stretch">
													<figure className="__image">
														<img className="" src="/img/product-preview_img/4.jpg" alt="demo" />
													</figure>
												</div>

												<div className="col-12 col-md-6">
													<div className="__content">
														<h3 className="__title h5"><a href="/blog_details">Made for India, by India</a></h3>
													</div>
												</div>
											</div>
										</div>

										<div className="__item">
											<div className="row flex-md-row-reverse no-gutters align-items-center">
												<div className="col-12 col-md-6 align-self-md-stretch">
													<figure className="__image">
														<img className="" src="/img/product-preview_img/6.jpg" alt="demo" />
													</figure>
												</div>

												<div className="col-12 col-md-6">
													<div className="__content">
														<h3 className="__title h5"><a href="/blog_details">Safe for Your Entire Family</a></h3>
														</div>
												</div>
											</div>
										</div>
									</div>
									
									<div className="col-12 col-lg-4">
										<div className="__item">
											<div className="row no-gutters align-items-center">
												<div className="col-12 col-md-6 align-self-md-stretch">
													<figure className="__image">
														<img className="" src="/img/product-preview_img/5.jpg" alt="demo" />
													</figure>
												</div>

												<div className="col-12 col-md-6">
													<div className="__content">
														<h3 className="__title h5"><a href="/blog_details">Healthier Soil, Healthier Crops</a></h3>
													</div>
												</div>
											</div>
										</div>

										<div className="__item">
											<div className="row flex-md-row-reverse no-gutters align-items-center">
												<div className="col-12 col-md-6 align-self-md-stretch">
													<figure className="__image">
														<img className="" src="/img/product-preview_img/2.jpg" alt="demo" />
													</figure>
												</div>

												<div className="col-12 col-md-6">
													<div className="__content">
														<h3 className="__title h5"><a href="/blog_details">Save Time, Save Money</a></h3>
														</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				
				<section className="section section--no-pt section--no-pb">
					<div className="container">
						<div className="special-offer special-offer--style-1" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="70">
							<h2 className="text text-center" style={{backgroundImage: 'url(/img/special_offer_text_bg.jpg)'}}>Special products for most people</h2>
						</div>
					</div>
				</section>
				<section className="section">
					

					<div className="container">
						<div className="row align-items-center">
							<div className="col-12 col-lg-4">
								<div data-aos="fade-left" data-aos-delay="400" data-aos-duration="500" ddata-aos-offset="100">
									<div className="section-heading">
										<h2 className="__title">Our <span>Story</span></h2>
									</div>

									<p className="d-none d-sm-block">
										<a className="custom-btn custom-btn--medium custom-btn--style-1" href="#">More about</a>
									</p>
								</div>
							</div>

							<div className="col-12 my-3 d-lg-none"></div>

							<div className="col-12 col-lg-4  text-center">
								<div data-aos="fade-up" ddata-aos-duration="600" data-aos-offset="100">
									<img className="img-fluid " src="/img/img_1.png" alt="demo" />
								</div>
							</div>

							<div className="col-12 my-3 d-lg-none"></div>

							<div className="col-12 col-lg-4">
								<div data-aos="fade-right" data-aos-delay="400" data-aos-duration="500" ddata-aos-offset="100">
									<p>
										Purity and trustâ€”with this mission, we set out to bring you authentic products from the Himalayas and the fields. 
									</p>

									<p>
										After a long experience in the field of organic products, Shobhit Gupta started Fieldcrop to make premium quality and traditional goodness accessible to everyone. Real quality, straight from the source
									</p>

									<p className="d-sm-none">
										<a className="custom-btn custom-btn--medium custom-btn--style-1" href="#">More about</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				

				
				<section className="section section--gutter section--base-bg">
					<div className="container">
						
						<div className="counter">
							<div className="__inner">
								<div className="row justify-content-sm-center">
									
									<div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-3">
										<div className="__item" data-aos="zoom-in" data-aos-duration="350" data-aos-delay="150">
											<div className="d-table">
												<div className="d-table-cell align-middle">
													<i className="__ico">
														<img className="img-fluid " src="/img/ico/ico_count_1.png" alt="demo" />
													</i>
												</div>

												<div className="d-table-cell align-middle">
													<p className="__count js-count" data-from="0" data-to="19500">200</p>

													<p className="__title">WHEAT</p>
												</div>
											</div>
										</div>
									</div>
									

									
									<div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-3">
										<div className="__item" data-aos="zoom-in" data-aos-duration="350" data-aos-delay="300">
											<div className="d-table">
												<div className="d-table-cell align-middle">
													<i className="__ico">
														<img className="img-fluid " src="/img/ico/ico_count_1.png" alt="demo" />
													</i>
												</div>

												<div className="d-table-cell align-middle">
													<p className="__count js-count" data-from="0" data-to="2720">2000</p>

													<p className="__title">YEAR</p>
												</div>
											</div>
										</div>
									</div>
									

									
									<div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-3">
										<div className="__item" data-aos="zoom-in" data-aos-duration="350" data-aos-delay="450">
											<div className="d-table">
												<div className="d-table-cell align-middle">
													<i className="__ico">
														<img className="img-fluid " src="/img/ico/ico_count_1.png" alt="demo" />
													</i>
												</div>

												<div className="d-table-cell align-middle">
													<p className="__count js-count" data-from="0" data-to="10000">10 000</p>

													<p className="__title">PRODUCTS</p>
												</div>
											</div>
										</div>
									</div>
									

									
									<div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-3">
										<div className="__item" data-aos="zoom-in" data-aos-duration="350" data-aos-delay="600">
											<div className="d-table">
												<div className="d-table-cell align-middle">
													<i className="__ico">
														<img className="img-fluid " src="/img/ico/ico_count_1.png" alt="demo" />
													</i>
												</div>

												<div className="d-table-cell align-middle">
													<p className="__count js-count" data-from="0" data-to="128">128</p>

													<p className="__title">DELIVERY</p>
												</div>
											</div>
										</div>
									</div>
									
								</div>
							</div>
						</div>
						
					</div>
				</section>
				

				
				{/* <section className="section">
					<div className="container">
						<div className="section-heading section-heading--center" data-aos="fade">
							<h2 className="__title">We are <span>on the world</span></h2>

							<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
						</div>

						<div data-aos="slide-up" data-aos-duration="800" data-aos-offset="50">
							<img className="img-fluid " src="/img/img_world_map.png" alt="demo" />
						</div>
					</div>
				</section>
				 */}

				
				<section className="section">
					<div className="container">
						<div className="section-heading section-heading--center" data-aos="fade">
							<h2 className="__title">Best Selling <span>Farm Fresh Products</span></h2>
							<p>Premium quality organic products straight from our farms to your home</p>
						</div>
						<div className="goods goods--style-2">
							<div className="__inner">
								<div className="row justify-content-sm-center">
									
									<div className="col-12 col-md-3 col-sm-6 col-lg-5 col-xl-6">
										<div className="__item">
											<div className="row">
												<div className="col-12 col-md-6">
													<figure className="__image">
														<img className="" width="150" src="/img/goods_img/7.jpg" alt="demo" />
													</figure>
												</div>

												<div className="col-12 col-md-6">
													<div className="__content">
														<h4 className="h6 __title"><a href="/single_product">Coconut Oil</a></h4>

														<div className="rating">
															<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
															<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
															<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
															<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
															<span className="rating__item"><i className="fontello-star"></i></span>
														</div>

														<div className="product-price">
															<span className="product-price__item product-price__item--new">Rs 90</span>
															<span className="product-price__item product-price__item--old">Rs 110</span>
														</div>

														<a className="custom-btn custom-btn--small custom-btn--style-1" href="#"><i className="fontello-shopping-bag"></i>Add to cart</a>
													</div>
												</div>
											</div>

											<span className="product-label product-label--sale">-20%</span>
										</div>
									</div>
									

									
									<div className="col-12 col-md-3 col-sm-6 col-lg-5 col-xl-6">
										<div className="__item">
											<div className="row">
												<div className="col-12 col-md-6">
													<figure className="__image">
														<img className="" width="130" src="/img/goods_img/1.jpg" alt="demo" />
													</figure>
												</div>

												<div className="col-12 col-md-6">
													<div className="__content">
														<h4 className="h6 __title"><a href="/single_product">A2 Ghee</a></h4>

														<div className="rating">
															<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
															<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
															<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
															<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
															<span className="rating__item"><i className="fontello-star"></i></span>
														</div>

														<div className="product-price">
															<span className="product-price__item product-price__item--new">Rs 90</span>
															<span className="product-price__item product-price__item--old">Rs 110</span>
														</div>

														<a className="custom-btn custom-btn--small custom-btn--style-1" href="#"><i className="fontello-shopping-bag"></i>Add to cart</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									

									
									<div className="col-12 col-md-3 col-sm-6 col-lg-5 col-xl-6">
										<div className="__item">
											<div className="row">
												<div className="col-12 col-md-6">
													<figure className="__image">
														<img className="" width="130" src="/img/goods_img/2.jpg" alt="demo" />
													</figure>
												</div>

												<div className="col-12 col-md-6">
													<div className="__content">
														<h4 className="h6 __title"><a href="/single_product">Garam Masala</a></h4>

														<div className="rating">
															<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
															<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
															<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
															<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
															<span className="rating__item"><i className="fontello-star"></i></span>
														</div>

														<div className="product-price">
															<span className="product-price__item product-price__item--new">Rs 90</span>
															<span className="product-price__item product-price__item--old">Rs 110</span>
														</div>

														<a className="custom-btn custom-btn--small custom-btn--style-1" href="#"><i className="fontello-shopping-bag"></i>Add to cart</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									

									
									<div className="col-12 col-md-3 col-sm-6 col-lg-5 col-xl-6">
										<div className="__item">
											<div className="row">
												<div className="col-12 col-md-6">
													<figure className="__image">
														<img className="" width="140" src="/img/goods_img/4.jpg" alt="demo" />
													</figure>
												</div>

												<div className="col-12 col-md-6">
													<div className="__content">
														<h4 className="h6 __title"><a href="/single_product">Seabuckthorn</a></h4>

														<div className="rating">
															<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
															<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
															<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
															<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
															<span className="rating__item"><i className="fontello-star"></i></span>
														</div>

														<div className="product-price">
															<span className="product-price__item product-price__item--new">Rs 90</span>
															<span className="product-price__item product-price__item--old">Rs 110</span>
														</div>

														<a className="custom-btn custom-btn--small custom-btn--style-1" href="#"><i className="fontello-shopping-bag"></i>Add to cart</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									</div>
							</div>
						</div>
					</div>
				</section>
				

				
				<section className="section section--no-pt section--no-pb section--gutter">
					<div className="container-fluid px-md-0">
						
						<div className="product-preview product-preview--style-1">
							<div className="__inner">
								<div className="row">
									
									<div className="col-12 col-md-7 col-xl-6">
										<div className="__item">
											<div className="__intro-text">
												<div className="row">
													<div className="col-md-11">
														<h2>FieldCrop <span>products</span></h2>

														<p>
															Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
														</p>

														<p>
															<a className="custom-btn custom-btn--medium custom-btn--style-1" href="#">all products</a>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
									

									
									<div className="col-12 col-md-5 col-xl-3">
										<div className="__item">
											<figure className="__image">
												<img className="" src="/img/product-preview_img/4.jpg" alt="demo" />
											</figure>

											<div className="__content">
												<h3 className="__title">Wheat</h3>
											</div>

											<a className="__link" href="#"></a>
										</div>
									</div>
									

									
									<div className="col-12 col-md-4 col-xl-3">
										<div className="__item">
											<figure className="__image">
												<img className="" src="/img/product-preview_img/4.jpg" alt="demo" />
											</figure>

											<div className="__content">
												<h3 className="__title">Oil</h3>
											</div>

											<a className="__link" href="#"></a>
										</div>
									</div>
									

									
									<div className="col-12 col-md-4 col-xl-3">
										<div className="__item">
											<figure className="__image">
												<img className="" src="/img/product-preview_img/4.jpg" alt="demo" />
											</figure>

											<div className="__content">
												<h3 className="__title">Wheat</h3>
											</div>

											<a className="__link" href="#"></a>
										</div>
									</div>
									

									
									<div className="col-12 col-md-4 col-xl-3">
										<div className="__item">
											<figure className="__image">
												<img className="" src="/img/product-preview_img/4.jpg" alt="demo" />
											</figure>

											<div className="__content">
												<h3 className="__title">Wheat</h3>
											</div>

											<a className="__link" href="#"></a>
										</div>
									</div>
									

									
									<div className="col-12 col-xl-6">
										<div className="__item">
											<div className="__content">
												<h2 className="__title"><b>12</b>Type of <br />products</h2>
											</div>

											<a className="__link" href="#"></a>
										</div>
									</div>
									

									
									<div className="col-12 col-md-7 col-xl-6 offset-xl-3">
										<div className="__item">
											<figure className="__image">
												<img className="" src="/img/product-preview_img/4.jpg" alt="demo" />
											</figure>

											<div className="__content">
												<h3 className="__title">Wheat</h3>
											</div>

											<a className="__link" href="#"></a>
										</div>
									</div>
									

									
									<div className="col-12 col-md-5 col-xl-3">
										<div className="__item">
											<figure className="__image">
												<img className="" src="/img/product-preview_img/4.jpg"  alt="demo" />
											</figure>

											<div className="__content">
												<h3 className="__title">Spices</h3>
											</div>

											<a className="__link" href="#"></a>
										</div>
									</div>
									
								</div>
							</div>
						</div>
						
					</div>
				</section>
				

				
				<section className="section section--review " data-src="/img/review_bg_1.png">
					<div className="container">
						<div className="section-heading section-heading--center" data-aos="fade">
							<h2 className="__title">People says <span>about FieldCrop</span></h2>

							<p> Very important for trust.</p>
						</div>

						
						<div className="review review--slider">
							<div className="js-slick" data-slick='{"autoplay": true, "arrows": false, "dots": true, "speed": 1000}'>
								
								<div className="review__item">
									<div className="review__item__author  d-table">
										<div className="d-table-cell align-middle">
											<div className="review__item__author-image">
												<img className="circled" src="/img/ava.png" alt="ava" />
											</div>
										</div>

										<div className="d-table-cell align-middle">
											<span className="review__item__author-name"><strong>Terens Smith</strong></span>
											<span className="review__item__author-position">/CEO AntalFieldCrop</span>
										</div>
									</div>
									<div className="review__item__text">
										<p>
											<i>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over</i>
										</p>
									</div>
									</div>
								

								
								<div className="review__item">
									<div className="review__item__author  d-table">
										<div className="d-table-cell align-middle">
											<div className="review__item__author-image">
												<img className="circled" src="/img/ava.png" alt="ava" />
											</div>
										</div>

										<div className="d-table-cell align-middle">
											<span className="review__item__author-name"><strong>Terens Smith</strong></span>
											<span className="review__item__author-position">/CEO AntalFieldCrop</span>
										</div>
									</div>
									<div className="review__item__text">
										<p>
											<i>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over</i>
										</p>
									</div>
									</div>
								
							</div>
						</div>
						
					</div>
				</section>
				

				
				{/* <section className="section section--no-pt section--no-pb section--gutter">
					
					<div className="simple-banner simple-banner--style-1" data-aos="fade" data-aos-offset="50">

						<div className="__label d-none d-md-block">
							<div className="d-table m-auto h-100">
								<div className="d-table-cell align-middle">
									<span className="num-1">1</span>
								</div>

								<div className="d-table-cell align-middle">
									<span className="num-2">50$</span>
									<span>Kg</span>
								</div>
							</div>
						</div>

						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="__inner">
										<img className="img-fluid " src="/img/site_logo.png" alt="demo" />

										<div className="row">
											<div className="col-12 col-lg-7 col-xl-5">
												<div className="banner__text" data-aos="fade-left" data-delay="500">
													<h2 className="__title h1"><b style={{"display":"block","color":"#c6c820"}}>Fresh Apples</b> <span>in Our Store</span></h2>

													<p>
														The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
													</p>

													<p>
														<a className="custom-btn custom-btn--medium custom-btn--style-1" href="#">Buy</a>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
				</section>
				 */}

				
				<section className="section section--no-pb">
					<div className="container">
						<div className="section-heading section-heading--center" data-aos="fade">
							<h2 className="__title">Blog <span>Posts</span></h2>

							<p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
						</div>

						
						<div className="posts posts--style-1">
							<div className="__inner">
								<div className="row">
									
									<div className="col-12 col-sm-6 col-lg-4">
										<div className="__item __item--preview" data-aos="flip-up" data-aos-delay="100" data-aos-offset="0">
											<figure className="__image">
												<img className="" src="/img/posts_img/1.jpg" alt="demo" />
											</figure>

											<div className="__content">
												<p className="__category"><a href="#">ORGANIC FOOD/TIPS & GUIDES</a></p>

												<h3 className="__title h5"><a href="/blog_details">Tips for Ripening your Fruit</a></h3>

												<p>
													The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
												</p>

												<a className="custom-btn custom-btn--medium custom-btn--style-1" href="/blog_details">Read more</a>
											</div>

											<span className="__date-post">
												<strong>07</strong>Nov
											</span>
										</div>
									</div>
									

									
									<div className="col-12 col-sm-6 col-lg-4">
										<div className="__item __item--preview" data-aos="flip-up" data-aos-delay="200" data-aos-offset="0">
											<figure className="__image">
												<img className="" src="/img/posts_img/2.jpg" alt="demo" />
											</figure>

											<div className="__content">
												<p className="__category"><a href="#">DIET/ORGANIC FOOD</a></p>

												<h3 className="__title h5"><a href="/blog_details">Health Benefits of a Raw Food</a></h3>

												<p>
													The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
												</p>

												<a className="custom-btn custom-btn--medium custom-btn--style-1" href="/blog_details">Read more</a>
											</div>

											<span className="__date-post">
												<strong>03</strong>Nov
											</span>
										</div>
									</div>
									

									
									<div className="col-12 col-sm-6 col-lg-4">
										<div className="__item __item--preview" data-aos="flip-up" data-aos-delay="300" data-aos-offset="0">
											<figure className="__image">
												<img className="" src="/img/posts_img/3.jpg" alt="demo" />
											</figure>

											<div className="__content">
												<p className="__category"><a href="#">DIET/ORGANIC FOOD</a></p>

												<h3 className="__title h5"><a href="/blog_details">Superfoods you should be eating</a></h3>

												<p>
													The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
												</p>

												<a className="custom-btn custom-btn--medium custom-btn--style-1" href="/blog_details">Read more</a>
											</div>

											<span className="__date-post">
												<strong>25</strong>oct
											</span>
										</div>
									</div>
									
								</div>
							</div>
						</div>
						
					</div>
				</section>
				

				
				

				
				<section className="section section--no-pt section--no-pb">
					
					<div className="g_map" data-api-key="AIzaSyBXQROV5YMCERGIIuwxrmaZbBl_Wm4Dy5U" data-longitude="44.958309" data-latitude="34.109925" data-marker="img/marker.png" style={{"minHeight":"255px"}}></div>
				</section>
				
			</main>
			

			
			
			
		
    </>
  );
}



