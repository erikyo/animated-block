import {
	InnerBlocks,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { media } from '@wordpress/icons';
import { useCallback } from '@wordpress/element';
import classNames from 'classnames';
import { animationsSet, delayList, durationsSet } from './const';

/**
 * The edit function describes the structure of your block in the context of the editor.
 * @param props the properties of the block
 * @param props.attributes The attributes of the block
 * @param props.setAttributes Set the attributes
 * @return {JSX.Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	const { animation, duration, delay } = attributes;
	const blockProps = useBlockProps();

	/**
	 * build the animation class names based on the attributes
	 * used to display the animation in the editor
	 * @return {string} animation class
	 */
	const currentAnimation = useCallback( () => {
		return classNames(
			'animate__animated',
			`animate__${ animation }`,
			duration,
			delay
		);
	}, [ attributes ] );

	return (
		<div { ...blockProps }>
			<InspectorControls key="setting">
				<PanelBody
					title={ __( 'Options', 'animated-block' ) }
					icon={ media }
					initialOpen={ true }
				>
					<SelectControl
						label={ __(
							'Choose an animation style',
							'animated-block'
						) }
						value={ animation }
						options={ animationsSet }
						onChange={ ( newAnimation ) => {
							setAttributes( { animation: newAnimation } );
						} }
					/>
					<SelectControl
						label={ __(
							'Choose an animation duration',
							'animated-block'
						) }
						value={ duration }
						options={ durationsSet }
						onChange={ ( newDuration ) => {
							setAttributes( { duration: newDuration } );
						} }
					/>
					<SelectControl
						label={ __(
							'Choose an animation delay',
							'animated-block'
						) }
						value={ delay }
						options={ delayList }
						onChange={ ( newDelay ) => {
							setAttributes( { delay: newDelay } );
						} }
					/>
				</PanelBody>
			</InspectorControls>

			<div className={ currentAnimation() }>
				<InnerBlocks
					template={ [ [ 'core/group', {} ] ] }
					defaultBlock={ [ 'core/group', {} ] }
					directInsert
				/>
			</div>
		</div>
	);
}
