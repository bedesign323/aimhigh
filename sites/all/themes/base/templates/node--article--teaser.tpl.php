<div class="article teaser">	
	<div class="header">
		<div class="cover"><?php print $cover_image; ?></div>
		<div class="title">
			<h2><?php print $title; ?></h2>
		</div>
	</div>
	
	<div class="body clearfix">
		<div class="meta-data clearfix">
			<div class="post-date"><?php print $post_date; ?></div>
			<div class="author">by <?php print $author_link; ?></div>
			<div class="comment-count"><?php echo $comment_count; ?></div>
		</div>
		<div class="summary clearfix">
			<?php print $summary; ?>
		</div>
	</div>
	<div class="footer clearfix">
		<div class="share-post">
		<?php print $service_links; ?>
	</div>
		<div class="sections">
			<?php print $sections; ?>
			<?php print $tags; ?>
		</div>
	</div>
</div>