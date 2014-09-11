<div id="wrap">
	<div id="extras">
		<div class="inner">
			<h2 class="title">The Extras</h2>
			
			<div id="main-nav">
				<div class="inner-nav">
				<?php echo render($page['nav_main']); ?>
				<div class="search-toggle"><div class="icon-search"></div></div>
				</div>
			</div>
			
			<?php echo render($page['sidebar_first']); ?>
			<div class="plane"><img src="/sites/all/themes/base/images/AH-plane-wt.png" alt="Aim High plane" nopin="nopin"></div>

		</div>
	</div>
	
	<div id="logo"><a href="/"></a></div>
	<div id="side-control"><div class="icon-menu"></div></div>
	
	<div id="main">
		<div id="main-overlay"></div>
		<div class="inner">
			
			
			<?php if ($messages): ?>
	        <div class="messages-holder">
	          <?php echo render($messages); ?>
	        </div>
	      <?php endif; ?>

			<?php if(isset($title)): ?>
				<h1 class="page-title"><?php print $title; ?></h1>
			<?php endif; ?>
			
	      <?php if ($tabs): ?>
	        <div class="tabs">
	          <?php echo render($tabs); ?>
	        </div>
	      <?php endif; ?>

	      <div id="content">
				<?php echo render($page['content']); ?>
			</div>
		</div>
	</div>

	<div id="footer" class="bg-light">
			<div class="inner">
				<div class="copy">&copy; <?php echo date('Y'); ?> Aim High. Don't steal. It's not nice.</div>
			</div>
		</div>
</div>
