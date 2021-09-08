(
	function( $ ) {
		'use strict';

		var NussVideoHandler = function( $scope, $ ) {

			$scope.on('click', '.btn-video-play', function(e) {
				if( $scope.find('.elementor-video').length > 0 ) {
					if( $scope.hasClass('nuss-playing') ) {
						$scope.find('.elementor-video')[0].pause();
						$scope.removeClass('nuss-playing');
					}else{
						$scope.find('.elementor-video')[0].play();
						$scope.addClass('nuss-playing');
						$scope.addClass('hidden-overlay');
					}
				}
			});
		};

		$( window ).on( 'elementor/frontend/init', function() {
			elementorFrontend.hooks.addAction( 'frontend/element_ready/nuss-video.default', NussVideoHandler );
		} );
	}
)( jQuery );
