<div class="project-full project">
	<div class="images-holder">
		<div class="images"><?php print $images; ?></div>
		<div class="controls">
			<div class="last-item"></div>
			<div class="next-item"></div>
		</div>
	</div>
	<div class="header">
		<h1><?php print $title; ?></h1>
		<h2><?php print $location_date; ?></h2>
	</div>
	<div class="body"><?php print $body; ?></div>
	<?php if(isset($contribs)): ?>
		<div class="cred">Featured Contributors: <?php print $contribs; ?></div>
	<?php endif; ?>
	<?php if(isset($photo_cred)): ?>
		<div class="cred">Photos: <?php print $photo_cred; ?></div>
	<?php endif; ?>
	
	<div class="divider">~</div>
</div>