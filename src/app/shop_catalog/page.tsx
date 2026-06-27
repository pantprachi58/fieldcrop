export default function ShopCatalog() {
  return (
    <>
      
		
			
			
			

			
			<div id="hero" className="jarallax" data-speed="0.7" data-img-position="50% 80%" style={{"backgroundImage":"url(img/intro_img/12.jpg)","color":"#442a1e"}}>
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-7">
							<h1 className="__title"><span>FieldCrop Shop</span> Catalog</h1>

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

					<div className="decor-el decor-el--2" data-jarallax-element="-70" data-speed="0.2">
						<img className="" width="99" height="88" src="/img/decor-el_2.jpg" alt="demo"/>
					</div>

					<div className="decor-el decor-el--3" data-jarallax-element="-70" data-speed="0.2">
						<img className="" width="115" height="117" src="/img/decor-el_3.jpg" alt="demo"/>
					</div>

					<div className="decor-el decor-el--4" data-jarallax-element="-70" data-speed="0.2">
						<img className="" width="84" height="76" src="/img/decor-el_4.jpg" alt="demo"/>
					</div>

					<div className="decor-el decor-el--5" data-jarallax-element="-70" data-speed="0.2">
						<img className="" width="248" height="309" src="/img/decor-el_5.jpg" alt="demo"/>
					</div>

					<div className="container">

						
						<div className="goods-catalog">
							<div className="row">
								<div className="col-12 col-md-4 col-lg-3">
									<aside className="sidebar goods-filter">
										<span className="goods-filter-btn-close js-toggle-filter"><i className="fontello-cancel"></i></span>

										<div className="goods-filter__inner">
											
											<div className="widget widget--search">
												<form className="form--horizontal" action="#" method="get">
													<div className="input-wrp">
														<input className="textfield" name="s" type="text" placeholder="Search" />
													</div>

													<button className="custom-btn custom-btn--tiny custom-btn--style-1" type="submit" role="button">Find</button>
												</form>
											</div>
											

											
											<div className="widget widget--categories">
												<h4 className="h6 widget-title">CAtegories</h4>

												<ul className="list">
													<li className="list__item">
														<a className="list__item__link" href="#">Apples</a>
														<span>(3)</span>
													</li>

													<li className="list__item">
														<a className="list__item__link" href="#">Oranges</a>
														<span>(5)</span>
													</li>

													<li className="list__item">
														<a className="list__item__link" href="#">Strawbery</a>
														<span>(2)</span>
													</li>

													<li className="list__item">
														<a className="list__item__link" href="#">Banana</a>
														<span>(8)</span>
													</li>

													<li className="list__item">
														<a className="list__item__link" href="#">Pumpkin </a>
														<span>(5)</span>
													</li>
												</ul>
											</div>
											

											
											<div className="widget widget--price">
												<h4 className="h6 widget-title">Price</h4>

												<div>
													<input type="text" className="js-range-slider" name="my_range" value=""
														data-type="double"
														data-min="0"
														data-max="500"
														data-from="48"
														data-to="365"
														data-grid="false"
														data-skin="round"
														data-prefix="$"
														data-hide-from-to="true"
														data-hide-min-max="true"
													/>

													<div className="row">
														<div className="col-6">
															<input className="range-slider-min-value" type="text" value="48" name="min-value" readOnly />
														</div>

														<div className="col-6">
															<input className="range-slider-max-value" type="text" value="365" name="max-value" readOnly />
														</div>
													</div>
												</div>
											</div>
											

											
											<div className="widget widget--additional">
												<h4 className="h6 widget-title">Additional</h4>

												<ul>
													<li>
														<label className="checkfield">
															<input type="checkbox" checked/>
															<i></i>
															Organic
														</label>
													</li>

													<li>
														<label className="checkfield">
															<input type="checkbox" />
															<i></i>
															Fresh
														</label>
													</li>

													<li>
														<label className="checkfield">
															<input type="checkbox" />
															<i></i>
															Sales
														</label>
													</li>

													<li>
														<label className="checkfield">
															<input type="checkbox" />
															<i></i>
															Discount
														</label>
													</li>

													<li>
														<label className="checkfield">
															<input type="checkbox" />
															<i></i>
															Expired
														</label>
													</li>
												</ul>
											</div>
											

											
											<div className="widget widget--tags">
												<h4 className="h6 widget-title">Popular Tags</h4>

												<ul>
													<li><a href="#">Art</a></li>
													<li><a href="#">design</a></li>
													<li><a href="#">concept</a></li>
													<li><a href="#">Media</a></li>
													<li><a href="#">Photography</a></li>
													<li><a href="#">UI</a></li>
												</ul>
											</div>
											

											
											<div className="widget">
												<div className="row no-gutters align-items-center">
													<div className="col">
														<button className="custom-btn custom-btn--medium custom-btn--style-1" role="button">Show Products</button>
													</div>

													<div className="col-auto">
														<a className="clear-filter" href="#">Clear all</a>
													</div>
												</div>
											</div>
											

											
											<div className="widget widget--products">
												<h4 className="h6 widget-title">Featured products</h4>

												<ul>
													<li>
														<div className="row no-gutters">
															<div className="col-auto __image-wrap">
																<figure className="__image">
																	<a href="/single_product">
																		<img className="" src="/img/goods_img/5.jpg" alt="demo" />
																	</a>
																</figure>
															</div>

															<div className="col">
																<h4 className="h6 __title"><a href="/single_product">Big Banana</a></h4>

																<div className="rating">
																	<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
																	<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
																	<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
																	<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
																	<span className="rating__item"><i className="fontello-star"></i></span>
																</div>

																<div className="product-price">
																	<span className="product-price__item product-price__item--new">2.99 $</span>
																	<span className="product-price__item product-price__item--old">4.11 $</span>
																</div>
															</div>
														</div>
													</li>

													<li>
														<div className="row no-gutters">
															<div className="col-auto __image-wrap">
																<figure className="__image">
																	<a href="/single_product">
																		<img className="" src="/img/goods_img/8.jpg" alt="demo" />
																	</a>
																</figure>
															</div>

															<div className="col">
																<h4 className="h6 __title"><a href="/single_product">Awesome Peach </a></h4>

																<div className="rating">
																	<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
																	<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
																	<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
																	<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
																	<span className="rating__item"><i className="fontello-star"></i></span>
																</div>

																<div className="product-price">
																	<span className="product-price__item product-price__item--new">10.99 $</span>
																</div>
															</div>
														</div>
													</li>

													<li>
														<div className="row no-gutters">
															<div className="col-auto __image-wrap">
																<figure className="__image">
																	<a href="/single_product">
																		<img className="" src="/img/goods_img/2.jpg" alt="demo" />
																	</a>
																</figure>
															</div>

															<div className="col">
																<h4 className="h6 __title"><a href="/single_product">Awesome Brocoli</a></h4>

																<div className="rating">
																	<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
																	<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
																	<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
																	<span className="rating__item rating__item--active"><i className="fontello-star"></i></span>
																	<span className="rating__item"><i className="fontello-star"></i></span>
																</div>

																<div className="product-price">
																	<span className="product-price__item product-price__item--new">5.99 $</span>
																</div>
															</div>
														</div>
													</li>
												</ul>
											</div>
											

											
											<div className="widget widget--banner">
												<a href="#"><img className="img-fluid " src="/img/widget_banner_2.jpg" alt="demo" /></a>
											</div>
											
										</div>
									</aside>
								</div>

								<div className="col-12 col-md-8 col-lg-9">
									<div className="spacer py-6 d-md-none"></div>

									<div className="row align-items-center justify-content-between">
										<div className="col-auto">
											<span className="goods-filter-btn-open js-toggle-filter"><i className="fontello-filter"></i>Filter</span>
										</div>

										<div className="col-auto">
											
											<form className="ordering" action="#">
												<div className="input-wrp">
													<select className="textfield wide js-select">
														<option value="1">Default Sorting</option>
														<option value="2">Price. low to high</option>
														<option value="3">Price. high to low</option>
														<option value="3">Sort by latest</option>
													</select>
												</div>
											</form>
											
										</div>
									</div>

									<div className="spacer py-3"></div>

									
									<div className="goods goods--style-1">
										<div className="__inner">
											<div className="row">
												
												<div className="col-12 col-sm-6 col-lg-4">
													<div className="__item">
														<figure className="__image">
															<img className="" width="188" src="/img/goods_img/1.jpg" alt="demo" />
														</figure>

														<div className="__content">
															<h4 className="h6 __title"><a href="/single_product">Oranges</a></h4>

															<div className="__category"><a href="#">Fruits</a></div>

															<div className="product-price">
																<span className="product-price__item product-price__item--new">3,80 $</span>
															</div>

															<a className="custom-btn custom-btn--medium custom-btn--style-1" href="#"><i className="fontello-shopping-bag"></i>Add to cart</a>
														</div>

														<span className="product-label product-label--sale">Sale</span>
													</div>
												</div>
												

												
												<div className="col-12 col-sm-6 col-lg-4">
													<div className="__item">
														<figure className="__image">
															<img className="" width="180" src="/img/goods_img/2.jpg" alt="demo" />
														</figure>

														<div className="__content">
															<h4 className="h6 __title"><a href="/single_product">Brocoli</a></h4>

															<div className="__category"><a href="#">Vegetables</a></div>

															<div className="product-price">
																<span className="product-price__item product-price__item--new">3,35 $</span>
															</div>

															<a className="custom-btn custom-btn--medium custom-btn--style-1" href="#"><i className="fontello-shopping-bag"></i>Add to cart</a>
														</div>

														<span className="product-label product-label--new">New</span>
													</div>
												</div>
												

												
												<div className="col-12 col-sm-6 col-lg-4">
													<div className="__item">
														<figure className="__image">
															<img className="" width="160" src="/img/goods_img/3.jpg" alt="demo" />
														</figure>

														<div className="__content">
															<h4 className="h6 __title"><a href="/single_product">Red Apple</a></h4>

															<div className="__category"><a href="#">Fruits</a></div>

															<div className="product-price">
																<span className="product-price__item product-price__item--new">0,99 $</span>
																<span className="product-price__item product-price__item--old">2200$</span>
															</div>

															<a className="custom-btn custom-btn--medium custom-btn--style-1" href="#"><i className="fontello-shopping-bag"></i>Add to cart</a>
														</div>

														<span className="product-label product-label--hot">hot</span>
													</div>
												</div>
												

												
												<div className="col-12 col-sm-6 col-lg-4">
													<div className="__item">
														<figure className="__image">
															<img className="" width="190" src="/img/goods_img/4.jpg" alt="demo" />
														</figure>

														<div className="__content">
															<h4 className="h6 __title"><a href="/single_product">Strawberry</a></h4>

															<div className="__category"><a href="#">Fruits</a></div>

															<div className="product-price">
																<span className="product-price__item product-price__item--new">2,10 $</span>
															</div>

															<a className="custom-btn custom-btn--medium custom-btn--style-1" href="#"><i className="fontello-shopping-bag"></i>Add to cart</a>
														</div>

														<span className="product-label product-label--sale">Sale</span>
													</div>
												</div>
												

												
												<div className="col-12 col-sm-6 col-lg-4">
													<div className="__item">
														<figure className="__image">
															<img className="" width="180" src="/img/goods_img/5.jpg" alt="demo" />
														</figure>

														<div className="__content">
															<h4 className="h6 __title"><a href="/single_product">Fresh Banana</a></h4>

															<div className="__category"><a href="#">Vegetables</a></div>

															<div className="product-price">
																<span className="product-price__item product-price__item--new">10,99 $</span>
															</div>

															<a className="custom-btn custom-btn--medium custom-btn--style-1" href="#"><i className="fontello-shopping-bag"></i>Add to cart</a>
														</div>

														<span className="product-label product-label--new">New</span>
													</div>
												</div>
												

												
												<div className="col-12 col-sm-6 col-lg-4">
													<div className="__item">
														<figure className="__image">
															<img className="" width="180" src="/img/goods_img/6.jpg" alt="demo" />
														</figure>

														<div className="__content">
															<h4 className="h6 __title"><a href="/single_product">Big Pumpkin</a></h4>

															<div className="__category"><a href="#">Fruits</a></div>

															<div className="product-price">
																<span className="product-price__item product-price__item--new">8,15 $</span>
															</div>

															<a className="custom-btn custom-btn--medium custom-btn--style-1" href="#"><i className="fontello-shopping-bag"></i>Add to cart</a>
														</div>

														<span className="product-label product-label--hot">hot</span>
													</div>
												</div>
												

												
												<div className="col-12 col-sm-6 col-lg-4">
													<div className="__item">
														<figure className="__image">
															<img className="" width="250" src="/img/goods_img/7.jpg" alt="demo" />
														</figure>

														<div className="__content">
															<h4 className="h6 __title"><a href="/single_product">Organic Tomato</a></h4>

															<div className="__category"><a href="#">Vegetables</a></div>

															<div className="product-price">
																<span className="product-price__item product-price__item--old">6,68 $</span>
																<span className="product-price__item product-price__item--new">6,12 $</span>
															</div>

															<a className="custom-btn custom-btn--medium custom-btn--style-1" href="#"><i className="fontello-shopping-bag"></i>Add to cart</a>
														</div>
													</div>
												</div>
												

												
												<div className="col-12 col-sm-6 col-lg-4">
													<div className="__item">
														<figure className="__image">
															<img className="" width="236" src="/img/goods_img/8.jpg" alt="demo" />
														</figure>

														<div className="__content">
															<h4 className="h6 __title"><a href="/single_product">Organic Peach</a></h4>

															<div className="__category"><a href="#">Vegetables</a></div>

															<div className="product-price">
																<span className="product-price__item product-price__item--old">6,68 $</span>
																<span className="product-price__item product-price__item--new">6,12 $</span>
															</div>

															<a className="custom-btn custom-btn--medium custom-btn--style-1" href="#"><i className="fontello-shopping-bag"></i>Add to cart</a>
														</div>
													</div>
												</div>
												

												
												<div className="col-12 col-sm-6 col-lg-4">
													<div className="__item">
														<figure className="__image">
															<img className="" width="188" src="/img/goods_img/1.jpg" alt="demo" />
														</figure>

														<div className="__content">
															<h4 className="h6 __title"><a href="/single_product">Oranges</a></h4>

															<div className="__category"><a href="#">Fruits</a></div>

															<div className="product-price">
																<span className="product-price__item product-price__item--new">3,80 $</span>
															</div>

															<a className="custom-btn custom-btn--medium custom-btn--style-1" href="#"><i className="fontello-shopping-bag"></i>Add to cart</a>
														</div>

														<span className="product-label product-label--sale">Sale</span>
													</div>
												</div>
												

												
												<div className="col-12 col-sm-6 col-lg-4">
													<div className="__item">
														<figure className="__image">
															<img className="" width="180" src="/img/goods_img/2.jpg" alt="demo" />
														</figure>

														<div className="__content">
															<h4 className="h6 __title"><a href="/single_product">Brocoli</a></h4>

															<div className="__category"><a href="#">Vegetables</a></div>

															<div className="product-price">
																<span className="product-price__item product-price__item--new">3,35 $</span>
															</div>

															<a className="custom-btn custom-btn--medium custom-btn--style-1" href="#"><i className="fontello-shopping-bag"></i>Add to cart</a>
														</div>

														<span className="product-label product-label--new">New</span>
													</div>
												</div>
												

												
												<div className="col-12 col-sm-6 col-lg-4">
													<div className="__item">
														<figure className="__image">
															<img className="" width="160" src="/img/goods_img/3.jpg" alt="demo" />
														</figure>

														<div className="__content">
															<h4 className="h6 __title"><a href="/single_product">Red Apple</a></h4>

															<div className="__category"><a href="#">Fruits</a></div>

															<div className="product-price">
																<span className="product-price__item product-price__item--new">0,99 $</span>
																<span className="product-price__item product-price__item--old">2200$</span>
															</div>

															<a className="custom-btn custom-btn--medium custom-btn--style-1" href="#"><i className="fontello-shopping-bag"></i>Add to cart</a>
														</div>

														<span className="product-label product-label--hot">hot</span>
													</div>
												</div>
												

												
												<div className="col-12 col-sm-6 col-lg-4">
													<div className="__item">
														<figure className="__image">
															<img className="" width="190" src="/img/goods_img/4.jpg" alt="demo" />
														</figure>

														<div className="__content">
															<h4 className="h6 __title"><a href="/single_product">Strawberry</a></h4>

															<div className="__category"><a href="#">Fruits</a></div>

															<div className="product-price">
																<span className="product-price__item product-price__item--new">2,10 $</span>
															</div>

															<a className="custom-btn custom-btn--medium custom-btn--style-1" href="#"><i className="fontello-shopping-bag"></i>Add to cart</a>
														</div>

														<span className="product-label product-label--sale">Sale</span>
													</div>
												</div>
												
											</div>
										</div>
									</div>
									

									<div className="spacer py-5"></div>

									
									<nav aria-label="Page navigation example">
										<ul className="pagination justify-content-center">
											<li className="page-item"><a className="page-link" href="#">1</a></li>
											<li className="page-item active"><a className="page-link" href="#">2</a></li>
											<li className="page-item"><a className="page-link" href="#">3</a></li>
											<li className="page-item"><a className="page-link" href="#">4</a></li>
											<li className="page-item"><a className="page-link" href="#"><i className="fontello-angle-right"></i></a></li>
										</ul>
									</nav>
									
								</div>
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


