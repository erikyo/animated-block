import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import classNames from 'classnames';

const Save = ( { attributes } ) => {
	const { animation, duration, delay } = attributes;
	const blockProps = useBlockProps.save( {
		className: classNames( [
			'animate__animated',
			`animate__${ animation }`,
			duration,
			delay,
		] ),
		style: {
			display: 'block',
		},
	} );

	return (
		<divs { ...blockProps }>
			<InnerBlocks.Content />
		</divs>
	);
};

export default Save;
