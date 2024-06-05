# Gutenberg Block Recipe 5 - Animation Block 🍿

## Let's make your content pop with animations!

Welcome to the Animation Extravaganza block recipe, where we sprinkle a bit of magic on your WordPress site by adding eye-catching animations!

🎉 Want to dazzle your visitors with animated elements? You're in the right place!

With this repository, we'll create a Gutenberg block that uses the power of animate.css and inner blocks to bring your content to life.

This README will guide you through the setup and usage of the Animation Extravaganza block.

![animation](https://github.com/erikyo/animated-block/assets/8550908/ece86dca-20d7-4697-8c2a-60b55400776e)

## 🧾 Ingredients

To concoct the Animation Extravaganza block, you'll need the following ingredients:

- **block**: The cornerstone of our Animation Extravaganza block, ensuring seamless integration into the Gutenberg editor.
- **animate.css**: The animation library that adds the sparkle and pizzazz.
- **InnerBlocks**: A Gutenberg component that allows nesting other blocks within our animated container.
- **InspectorControls**: Tools for customizing the block settings within the editor.
- **useBlockProps**: A React hook providing essential props for the block wrapper element.
- **IntersectionObserver**: A nifty API to trigger animations when elements come into view.
- **SelectControl**: A component from `@wordpress/components` used for selecting animation styles, durations, and delays.
- **i18n**: Internationalization utilities from `@wordpress/i18n` for translating text strings.
- **classNames**: A utility for conditionally combining class names.

### 👨‍🍳 Cooking Instructions

Ready to make your content pop with the Animation Extravaganza block? Follow these step-by-step instructions:

1. **Installation**:
	- Begin by cloning this repository to your local machine using the `git clone` command followed by the repository URL.
	- Once cloned, navigate to the repository directory using your preferred command line interface.
	- Upload the `animated-block` folder to the `wp-content/plugins/` directory of your WordPress installation. This can be done via FTP or by directly copying the folder into the directory.
	- Head to your WordPress admin dashboard and navigate to the "Plugins" section. You should see the Animation Extravaganza plugin listed there. Click on "Activate" to bring animations to your site!

2. **Block Registration**:
	- Open the `index.php` file in your code editor. This is where the magic begins! Use the necessary functions to register the Animation Extravaganza block type, ensuring its availability within the Gutenberg editor.

3. **Block Functionality**:
	- Dive into the `edit.js` file where the core functionality of our Animation Extravaganza block resides. This file defines how the block behaves within the editor interface. We’ve implemented `SelectControl` components to let you choose animation styles, durations, and delays, making customization a breeze.

4. **Adding Animations**:
	- The IntersectionObserver API is used to trigger animations when the block comes into view. This ensures that your animations play at just the right moment, capturing your visitors' attention effortlessly.

5. **Customization and Exploration**:
	- Now that you’ve mastered the basics, feel free to explore and customize the Animation Extravaganza block to suit your specific needs. Whether it's tweaking the animation styles or adding new inner blocks, the possibilities are endless!

## Usage

With the Animation Extravaganza block, adding dynamic animations to your WordPress site has never been easier!

Effortlessly enhance your content with stunning animations, and let your creativity run wild by adding any inner blocks you desire.

# Conclusion

Happy animating, and may your WordPress site be filled with a whirlwind of excitement and motion! 🎉
