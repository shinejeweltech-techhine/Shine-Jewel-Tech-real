SHINE JEWEL TECH - IMAGES FOLDER INSTRUCTIONS

CRITICAL FOR DEPLOYMENT:

1. Create a folder named 'public' in the root directory of your project (at the same level as index.html).
2. Move your 'images' folder INSIDE the 'public' folder.
   
   Final structure should look like this:
   /public
     /images
       logo.png
       laser-cutting.jpg
       chain-making.jpg
       polishing-tumbler.jpg
       cnc-router.jpg
       induction-casting.jpg
       bangle-turning.jpg

3. Do NOT change the code references. The code refers to '/images/...' which Vite will automatically resolve to 'public/images/...'.

If you do not put the images in the 'public' folder, they will not appear on the live website after deployment.