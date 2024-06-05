/**
 * Add an intersection observer for each block
 */
const observer = new IntersectionObserver( ( entries ) => {
	// for each block that is visible
	entries.forEach( ( entry ) => {
		if ( entry.isIntersecting ) {
			addAnimation( entry.target );
		} else {
			removeAnimation( entry.target );
		}
	} );
} );

document
	.querySelectorAll( '.animate__animated' )
	.forEach( ( el ) => observer.observe( el ) );

/**
 * Remove the class "animate__animated" from the block and add it to the dataset
 *
 * @param {HTMLElement} el the block element
 * @param {string} animationClass the class to remove
 */
function removeAnimation( el, animationClass = 'animate__animated' ) {
	if ( el.classList.contains( animationClass ) ) {
		/* We add the class back from the dataset */
		el.classList.remove( animationClass );
		el.dataset.animated = 'true';
	}
}

/**
 * Clone the node and add it to the DOM
 * Doing this, we can trigger the animation when the block is visible
 *
 * @param {HTMLElement} el the block element
 * @return {HTMLElement} the cloned node
 */
function cloneNode( el ) {
	const newEl = el.cloneNode( true );
	el.parentNode.replaceChild( newEl, el );
	return newEl;
}

/**
 * Move the class from the dataset to the class of the block
 *
 * @param {HTMLElement} el the block element
 * @param {string} animationClass the class to add
 */
function addAnimation( el, animationClass = 'animate__animated' ) {
	// If the block is visible, we add the class to trigger the animation
	if ( el.dataset.animated === 'true' ) {
		el.classList.add( animationClass );
		// remove the flag from the dataset
		delete el.dataset.animated;
		// We clone the block and add it to the DOM
		observer.observe( cloneNode( el ) );
	}
}
