<?

/** 
 * @file
 * template.php for Gallery Base theme.
 * 
 * Implements preprocess and hook alter functions in this file.
 */
 
 
/**
 * Preprocess functions for page.tpl.php.
 */
function base_preprocess_page(&$vars){
	//kpr($vars);	
}
 

/**
 * Preprocess functions for node.tpl.php.
 */
 
function base_preprocess_node(&$vars){
	$node = $vars['node'];
	$options = array('absolute' => true);
	$nid = $vars['vid']; // Node ID
	$url = url('node/' . $nid, $options);
	//kpr($vars);
	
	// Add general theme suggestions for all content types and view modes
	$vars['theme_hook_suggestions'][] = 'node__' . $vars['type'] . '__' . $vars['view_mode'];

	$vars['body'] =  render($vars['content']['body']);
	
	// ARTICLE ====================================================
	if($vars['type'] == 'article'){
		
		$vars['cover_image'] = render_image($vars['field_cover_image'][0]['uri'], 'post_cover', $vars['title']);
		$vars['post_date'] = format_date($vars['created'], 'custom', "F jS Y");
		$vars['sections'] =  render($vars['content']['field_site_section']);
		$vars['tags'] =  render($vars['content']['field_tags']);
		$vars['summary'] =  render($vars['content']['field_summary']);
		$vars['service_links'] =  render($vars['content']['service_links']);
		$vars['comment_count'] = l('Comments ' . $vars['comment_count'], $url . '#comments');
		$vars['author'] =  render($vars['content']['field_author']);
		$vars['credits'] =  render($vars['content']['field_credits']);
		

		// Author Details
		$author_path = drupal_get_path_alias('user/' . $vars['uid']);
		$author = profile2_load_by_user($vars['uid']); 

		$vars['author_first_name'] = $author['main']->field_first_name['und'][0]['value'];
		$vars['author_last_name'] = $author['main']->field_last_name['und'][0]['value'];
		$vars['author_full_name'] = $vars['author_first_name'] . ' ' . $vars['author_last_name'];
		$vars['author_short_bio'] = $author['main']->field_short_bio['und'][0]['value'];
		$profile_image_uri = $author['main']->field_profile_image['und'][0]['uri'];
		$profile_image_render = render_image($profile_image_uri , $style = 'profile_teaser', $vars['author_full_name'] . 'profile image');
		$vars['author_profile_image'] = l($profile_image_render, $author_path, array('html'=>TRUE));

		$vars['author_link'] = l($vars['author_full_name'], $author_path);

		//kpr($author['main']->field_first_name['und'][0]['value']);

		if($vars['view_mode'] == 'teaser'){
			$vars['title'] = l($vars['title'], $url);
			$vars['cover_image'] = l($vars['cover_image'], $url, array('html'=>TRUE));
			$read_more = l(' — read more', $url);
			$summary_text = $vars['field_summary'][0]['value'];
			$vars['summary'] = $summary_text . '  ' . $read_more;

		}
	}

	//kpr($vars);
}

/**
 * Preprocess functions for page.tpl.php.
 */
function base_preprocess_entity(&$vars){
	$vars['theme_hook_suggestions'][] = $vars['entity_type'] . '__' . $vars['view_mode'];

	// ARTICLE ====================================================
	if($vars['entity_type'] == 'profile2'){
		$vars['first_name'] =  render($vars['content']['field_first_name']);
		$vars['last_name'] =  render($vars['content']['field_last_name']);
		$vars['profile_image'] =  render($vars['content']['field_profile_image']);
		$vars['website'] =  render($vars['content']['field_website']);
		$vars['short_bio'] =  render($vars['content']['field_short_bio']);
		$vars['full_bio'] =  render($vars['content']['field_full_bio']);
	}

	//kpr($vars);
}


// COMMENT
function base_preprocess_comment(&$vars){
	$vars['website'] = render($vars['content']['field_comment_website']);
	$vars['body'] = render($vars['content']['comment_body']);
	$vars['links'] = render($vars['content']['links']);
	//kpr($vars);
}

function base_preprocess_search_result(&$vars) {

  	$image_path = $vars['result']['node']->field_cover_image['und'][0]['uri'];
  	$vars['cover_image'] = l(render_image($image_path, 'post_cover_small', ''), $vars['url'], array('html'=>TRUE));
  	$vars['title'] = l($vars['title'], $vars['url']);
	$vars['theme_hook_suggestions'][] = 'search_result';
  //kpr($vars);
}




// FORM ALTER
function base_form_alter(&$form, &$form_state, $form_id) {
  if ($form_id == 'search_block_form') {
    //$form['search_block_form']['#title'] = t('Search'); // Change the text on the label element
    //$form['search_block_form']['#title_display'] = 'invisible'; // Toggle label visibilty
    //$form['search_block_form']['#size'] = 40;  // define size of the textfield
    $form['search_block_form']['#default_value'] = t('Search'); // Set a default value for the textfield
    //$form['actions']['submit']['#value'] = t('GO!'); // Change the text on the submit button
    $form['actions']['submit'] = array('#type' => 'image_button', '#src' => base_path() . path_to_theme() . '/images/search_btn.png');

    // Add extra attributes to the text box
    $form['search_block_form']['#attributes']['onblur'] = "if (this.value == '') {this.value = 'Search';}";
    $form['search_block_form']['#attributes']['onfocus'] = "if (this.value == 'Search') {this.value = '';}";
    // Prevent user from searching the default text
    //$form['#attributes']['onsubmit'] = "if(this.search_block_form.value=='Search'){ alert('Please enter a search'); return false; }";

    // Alternative (HTML5) placeholder attribute instead of using the javascript
    $form['search_block_form']['#attributes']['placeholder'] = t('Search');
  }

  if ($form_id == 'search_form') {
  	$form['basic']['submit'] = array('#type' => 'image_button', '#src' => base_path() . path_to_theme() . '/images/search_btn-accent.png');
    //kpr($form);
  }
} 

// Renders image with a given image style
function render_image($path, $style = 'default', $alt){
	$image_style = array( 'style_name' => $style, 'path' => $path, 'alt' => $alt);
	return theme('image_style', $image_style);
};


