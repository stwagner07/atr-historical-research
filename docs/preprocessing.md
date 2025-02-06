# Challenges of image processing before OCR/HWR

The first step for any form of computational text analysis is to create high-quality machine-readable text, but even the most advanced tools for handwriting or optical character recognition struggle with low-quality scans or scans of materials that are damaged, low in contrast, or visually complex. Automated image processing can improve the final results, but there also is a danger of over-engineering the process. 

For the BYODL workshop in February 2025, we prepared two scripts to test different image enhancement options with Python:

- Test-case 1: human-written script for basic noise reduction and contrast enhancement
- Test-case 2: script including GenAI recommendations for complex image processing

While both scripts make use of similar Python packages, the AI-recommended workflow manipulates the image more, including a conversion of the colour scan to grayscale. Both scripts for image manipulation are available in the **notebooks** folders of this repository to be run in Kaggle, Google Colab, or BinderHub. Please check the [coding environments](/docs/codingenvironments.html) information page for detailed explanations.

The most important library in both scripts is the [OpenCV (Open Source Computer Vision)](https://docs.opencv.org/4.x/index.html) library is an open source computer vision and machine learning software library. To better understand its possibilities for image manipulation, it is important to read the documentation. Not all options may be useful for preparing document scans for OCR. 

GPT4-Vision recommended the following manipulations when asked to enhance a blurred scan of early modern German print:

- [denoising](https://docs.opencv.org/3.4/d1/d79/group__photo__denoise.html), more specifically ```fastNlMeansDenoising()```
- [CLAHE (Contrast Limited Adaptive Histogram Equalization)](https://docs.opencv.org/4.x/d5/daf/tutorial_py_histogram_equalization.html)

  The OpenCV documentation includes an example of a black-and-white photograph before and after CLAHE transformation and states:

*"The first histogram equalization we just saw, considers the global contrast of the image. In many cases, it is not a good idea. For example, below image shows an input image and its result after global histogram equalization."*

- [image filtering](https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html), more specifically ```filter2D()```
