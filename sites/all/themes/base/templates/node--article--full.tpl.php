<div class="article full">
	<div class="meta-data">
		<div class="post-date"><?php print $post_date; ?></div>
		<span class="bull">&bull;</span>
		<div class="author">by <?php print $author_link; ?></div>
		<div class="comment-count"><?php echo $comment_count; ?></div>
	</div>

	<div class="body"><?php print $body; ?></div>

	<div class="end-article">~</div>
	
	<div class="about-author">
		<h2>About the author</h2>
		<div class="author">
			<div class="profile teaser">
				<div class="profile-image"><?php print $author_profile_image; ?></div>
				<h3><?php print $author_link; ?></h3>
				<div class="short-bio"><?php print $author_short_bio; ?></div>
		</div>
		</div>
	</div>

	<div class="sections-tags">
		<div class="sections">
			<h2>As seen in : </h2>
			<?php print $sections; ?>
			
		</div>
		<div class="tags">
			<h2>Tags : </h2>
			<?php print $tags; ?>
		</div>
	</div>

	

	<div class="share-post">
		<h2>Share this post</h2>
		<h3>{ you know you want to }</h3>
		<?php print $service_links; ?>
	</div>

	
</div>
