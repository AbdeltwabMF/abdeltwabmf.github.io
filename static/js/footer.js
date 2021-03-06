document.write(`
		<!-- live 2d widget -->
		<script src="/static/js/lib2dw/device.min.js"></script>
		<script src="/static/js/lib2dw/bundle.js"></script>

		<div class="container">
			<div class="row justify-content-start">
				<div class="row justify-content-center col-xxl-3 col-lg-4 col-md-5 col-8">
					<!-- Social Media -->
					<div class="col-12 mt-2">
						<ul class="list-unstyled navbar">
							<li>
								<a href="mailto:abdeltwab.m.fakhry@protonmail.com" target="_blank">
									<i class="fas fa-envelope fs-2 text-dark"></i>
								</a>
							</li>
							<li>
								<a href="https://github.com/AbdeltwabMF" target="_blank">
									<i class="fab fa-github fs-2 text-dark"></i>
								</a>
							</li>
							<li>
								<a href="https://twitter.com/AbdeltwabMF" target="_blank">
									<i class="fab fa-twitter fs-2 text-dark"></i>
								</a>
							</li>
							<li>
								<a href="https://linkedin.com/in/AbdeltwabMF" target="_blank">
									<i class="fab fa-linkedin fs-2 text-dark"></i>
								</a>
							</li>
							<li>
								<a href="https://t.me/AbdeltwabMF" target="_blank">
									<i class="fab fa-telegram fs-2 text-dark"></i>
								</a>
							</li>
						</ul>
						<hr>
					</div>

					<!-- Made with Love and Faith -->
					<div class="col-12 text-center fw-light">
						Created in
						<a href="https://www.gnu.org/"><img style="width: 24px;" src="/assets/images/uses/os/gnu.svg" alt="GNU" class="sm-icon-img"></a>
						&sol;
						<a href="https://github.com/torvalds/linux"><img style="width: 24px;" src="/assets/images/uses/os/linux.svg" alt="Linux" class="sm-icon-img"></a>
						&amp;
						<a href="https://github.com/neovim/neovim"><img style="width: 24px;" src="/assets/images/uses/app/vim.svg" alt="Vim Icon" class="sm-icon-img"></a>
						with
						<i class="fas fa-heart fa-beat fa-lg text-danger" style="--fa-animation-duration: 0.5s;" > </i>
					</div>

					<!-- Inspiration -->
					<div class="col-12 text-center mt-2 fw-light">
						The theme is inspired by <a class="fs-5 text-decoration-none" href="https://github.com/morhetz/gruvbox">gruvbox</a>
					</div>

					<!-- Copyleft -->
					<div class="col-12 text-center fw-light">
						<hr>
						&copy;
						<span>2021, 2022</span>
						<span>Abd El-Twab M. Fakhry</span>
					</div>
				</div>
			</div>
		</div>

		<!-- live 2d widget -->
		<canvas
			id="live2dcanvas"
			height="250"
			width="150"
			class="position-fixed bottom-0 start-0"
			>
		</canvas>

		<script>loadlive2d("live2dcanvas", "/assets/lib2dw/haru02/haru02.model.json");</script>`);
