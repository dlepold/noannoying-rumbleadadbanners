# noannoying-rumbleadadbanners
hide annoying ad banners on rumble using tampermonkey 

# Ad Blocker Script for Tampermonkey

## Introduction
This repository hosts a simple yet effective userscript for the Tampermonkey browser extension. It's designed to hide specific ads on web pages, enhancing your browsing experience. The script targets elements with the class `.media-related-break` and the data attribute `data-section="related"`.

## How It Works
The script uses JavaScript to select specific elements on a webpage and sets their display style to 'none', effectively hiding them from view. It's a client-side solution that runs in your browser, requiring no server-side interactions.

## Installation
To use this script, you'll need Tampermonkey installed in your browser. Follow these steps to set it up:

1. **Install Tampermonkey:**
   - For Chrome: [Tampermonkey on Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/)
   - For Firefox: [Tampermonkey on Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - For other browsers, search for Tampermonkey in your browser's extension store.

2. **Add the Script:**
   - Click on the Tampermonkey icon in your browser toolbar.
   - Select "Create a new script..."
   - Copy and paste the contents of the `ad-block-script.js` file from this repository into the script editor in Tampermonkey.
   - Save the script.

## Usage
Once the script is installed in Tampermonkey, it automatically runs on all web pages. It looks for elements with the specified class and data attribute and hides them. No further action is required from the user.

## Contributing
Contributions to this script are welcome! If you have improvements or bug fixes, feel free to fork this repository, make your changes, and submit a pull request.

## License
This project is released under [MIT License](LICENSE).

