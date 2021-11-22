/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Menu.
		var $menu = $('#year1');

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#year1"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});
	
	// Year 2 Menu
		var $year2 = $('#year2');

		$year2._locked = false;

		$year2._lock = function() {

			if ($year2._locked)
				return false;

			$year2._locked = true;

			window.setTimeout(function() {
				$year2._locked = false;
			}, 350);

			return true;

		};

		$year2._show = function() {

			if ($year2._lock())
				$body.addClass('is-year2-visible');

		};

		$year2._hide = function() {

			if ($year2._lock())
				$body.removeClass('is-year2-visible');

		};

		$year2._toggle = function() {

			if ($year2._lock())
				$body.toggleClass('is-year2-visible');

		};

		$year2
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$year2._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$year2._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$year2._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#year2"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$year2._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$year2._hide();

			});
	// Year 3 Menu
		var $year3 = $('#year3');

		$year3._locked = false;

		$year3._lock = function() {

			if ($year3._locked)
				return false;

			$year3._locked = true;

			window.setTimeout(function() {
				$year3._locked = false;
			}, 350);

			return true;

		};

		$year3._show = function() {

			if ($year3._lock())
				$body.addClass('is-year3-visible');

		};

		$year3._hide = function() {

			if ($year3._lock())
				$body.removeClass('is-year3-visible');

		};

		$year3._toggle = function() {

			if ($year3._lock())
				$body.toggleClass('is-year3-visible');

		};

		$year3
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$year3._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$year3._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$year3._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#year3"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$year3._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$year3._hide();

			});
	// Year 4 Menu
		var $year4 = $('#year4');

		$year4._locked = false;

		$year4._lock = function() {

			if ($year4._locked)
				return false;

			$year4._locked = true;

			window.setTimeout(function() {
				$year4._locked = false;
			}, 350);

			return true;

		};

		$year4._show = function() {

			if ($year4._lock())
				$body.addClass('is-year4-visible');

		};

		$year4._hide = function() {

			if ($year4._lock())
				$body.removeClass('is-year4-visible');

		};

		$year4._toggle = function() {

			if ($year4._lock())
				$body.toggleClass('is-year4-visible');

		};

		$year4
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$year4._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$year4._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$year4._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#year4"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$year4._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$year4._hide();

			});

})(jQuery);