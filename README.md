# @ultramodz/graph-uploader

Upload images or videos and convert them into Graph.org links.

## Installation

You can install this package via npm:

```bash
npm install @ultramodz/graph-uploader
```

***

## Example
Here's an example of how to use
```ts
const { GraphOrg } = require('@ultramodz/graph-uploader');
const path = '/path/to/your/file.jpg'; // Provide the path to your image or video file

GraphOrg(path)
  .then((graphLink) => {
    console.log('Graph.org link:', graphLink);
  })
  .catch((error) => {
    console.error('Upload failed:', error.message);
  });

```

***
