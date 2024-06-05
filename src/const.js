import { __ } from '@wordpress/i18n';

const availableAnimations = {
	bounce: __( 'Bounce', 'animated-block' ),
	flash: __( 'Flash', 'animated-block' ),
	pulse: __( 'Pulse', 'animated-block' ),
	rubberBand: __( 'Rubber band', 'animated-block' ),
	shake: __( 'Shake', 'animated-block' ),
	headShake: __( 'Head shake', 'animated-block' ),
	swing: __( 'Swing', 'animated-block' ),
	tada: __( 'Tada', 'animated-block' ),
	wobble: __( 'Wobble', 'animated-block' ),
	jello: __( 'Jello', 'animated-block' ),
	bounceIn: __( 'Bounce in', 'animated-block' ),
	bounceInDown: __( 'Bounce in down', 'animated-block' ),
	bounceInLeft: __( 'Bounce in left', 'animated-block' ),
	bounceInRight: __( 'Bounce in right', 'animated-block' ),
	bounceInUp: __( 'Bounce in up', 'animated-block' ),
	bounceOut: __( 'Bounce out', 'animated-block' ),
	bounceOutDown: __( 'Bounce out down', 'animated-block' ),
	bounceOutLeft: __( 'Bounce out left', 'animated-block' ),
	bounceOutRight: __( 'Bounce out right', 'animated-block' ),
	bounceOutUp: __( 'Bounce out up', 'animated-block' ),
	fadeIn: __( 'Fade in', 'animated-block' ),
	fadeInDown: __( 'Fade in down', 'animated-block' ),
	fadeInDownBig: __( 'Fade in down big', 'animated-block' ),
	fadeInLeft: __( 'Fade in left', 'animated-block' ),
	fadeInLeftBig: __( 'Fade in left big', 'animated-block' ),
	fadeInRight: __( 'Fade in right', 'animated-block' ),
	fadeInRightBig: __( 'Fade in right big', 'animated-block' ),
	fadeInUp: __( 'Fade in up', 'animated-block' ),
	fadeInUpBig: __( 'Fade in up big', 'animated-block' ),
	fadeOut: __( 'Fade out', 'animated-block' ),
	fadeOutDown: __( 'Fade out down', 'animated-block' ),
	fadeOutDownBig: __( 'Fade out down big', 'animated-block' ),
	fadeOutLeft: __( 'Fade out left', 'animated-block' ),
	fadeOutLeftBig: __( 'Fade out left big', 'animated-block' ),
	fadeOutRight: __( 'Fade out right', 'animated-block' ),
	fadeOutRightBig: __( 'Fade out right big', 'animated-block' ),
	fadeOutUp: __( 'Fade out up', 'animated-block' ),
	fadeOutUpBig: __( 'Fade out up big', 'animated-block' ),
	flipInX: __( 'Flip in x', 'animated-block' ),
	flipInY: __( 'Flip in y', 'animated-block' ),
	flipOutX: __( 'Flip out x', 'animated-block' ),
	flipOutY: __( 'Flip out y', 'animated-block' ),
	lightSpeedIn: __( 'Light speed in', 'animated-block' ),
	lightSpeedOut: __( 'Light speed out', 'animated-block' ),
	rotateIn: __( 'Rotate in', 'animated-block' ),
	rotateInDownLeft: __( 'Rotate in down left', 'animated-block' ),
	rotateInDownRight: __( 'Rotate in down right', 'animated-block' ),
	rotateInUpLeft: __( 'Rotate in up left', 'animated-block' ),
	rotateInUpRight: __( 'Rotate in up right', 'animated-block' ),
	rotateOut: __( 'Rotate out', 'animated-block' ),
	rotateOutDownLeft: __( 'Rotate out down left', 'animated-block' ),
	rotateOutDownRight: __( 'Rotate out down right', 'animated-block' ),
	rotateOutUpLeft: __( 'Rotate out up left', 'animated-block' ),
	rotateOutUpRight: __( 'Rotate out up right', 'animated-block' ),
	hinge: __( 'Hinge', 'animated-block' ),
	jackInTheBox: __( 'Jack in the box', 'animated-block' ),
	rollIn: __( 'Roll in', 'animated-block' ),
	rollOut: __( 'Roll out', 'animated-block' ),
	zoomIn: __( 'Zoom in', 'animated-block' ),
	zoomInDown: __( 'Zoom in down', 'animated-block' ),
	zoomInLeft: __( 'Zoom in left', 'animated-block' ),
	zoomInRight: __( 'Zoom in right', 'animated-block' ),
	zoomInUp: __( 'Zoom in up', 'animated-block' ),
	zoomOut: __( 'Zoom out', 'animated-block' ),
	zoomOutDown: __( 'Zoom out down', 'animated-block' ),
	zoomOutLeft: __( 'Zoom out left', 'animated-block' ),
	zoomOutRight: __( 'Zoom out right', 'animated-block' ),
	zoomOutUp: __( 'Zoom out up', 'animated-block' ),
	slideInDown: __( 'Slide in down', 'animated-block' ),
	slideInLeft: __( 'Slide in left', 'animated-block' ),
	slideInRight: __( 'Slide in right', 'animated-block' ),
	slideInUp: __( 'Slide in up', 'animated-block' ),
	slideOutDown: __( 'Slide out down', 'animated-block' ),
	slideOutLeft: __( 'Slide out left', 'animated-block' ),
	slideOutRight: __( 'Slide out right', 'animated-block' ),
	slideOutUp: __( 'Slide out up', 'animated-block' ),
	heartBeat: __( 'Heart beat', 'animated-block' ),
};

export const animationsSet = Object.entries( availableAnimations ).map(
	( [ animation, label ] ) => {
		return {
			label,
			value: animation,
		};
	}
);

export const durationsSet = [
	{
		label: __( 'Slow (2s)', 'animated-block' ),
		value: 'animate__slow',
	},
	{
		label: __( 'Slower (3s)', 'animated-block' ),
		value: 'animate__slower',
	},
	{
		label: __( 'Standard', 'animated-block' ),
		value: '',
		default: true,
	},
	{
		label: __( 'Fast (800ms)', 'animated-block' ),
		value: 'animate__fast',
	},
	{
		label: __( 'Faster (500ms)', 'animated-block' ),
		value: 'animate__faster',
	},
];

export const delayList = [ 0, 1, 2, 3, 4, 5 ].map( ( item ) => {
	return item === 0
		? {
				label: __( 'No delay', 'animated-block' ),
				value: '',
				default: true,
		  }
		: {
				label: `${ item }s`,
				value: `animate__delay-${ item }s`,
		  };
} );
