# Strategies for optimising layout recognition

## Digitisation as part of the transcription

As Koen Hufkens explained in his talk at IEG Mainz on 6 February 2025, digitisation is already part of the transcription and those who are making their own photos or scans of sources should pay attention to the following aspects:

- experiment with different (paper) backgrounds, especially when paper is slightly transparent, gray or black backgrounds may work better than white backgrounds
- consider preparing a grid for precise document alignment
- consider creating a frame or passepartout for documents of different sizes

Koen has also collected [best data practices](http://cobecore.org/research/data-best-practices/) from his COBECORE climate data project, which may be useful for researchers from different disciplines.

## Layout recognition with computer vision

When working with tabular data and/or data that were collected in standardised forms (e.g. scientific tables, telegrams, or government reports), you may want to consider using computer vision to identify (handwritten) text within the documents and improve text segmentation. One powerful library for template matching is [OpenCV](https://docs.opencv.org/4.x/d4/dc6/tutorial_py_template_matching.html). In your workflow, you need to list all the documents you want to process and then perform a batch-template matching (e.g. based on a clean template defined with the [GIMP](https://www.gimp.org/) image manipulation software). You can define bespoke text areas in your template and save them to JSON files that can then clearly align found text with metadata (such as archival numbers, dates, names, or places). Then you can use a small Python script (set up to be run in a Docker image for better dependency management and security). Koen Hufkens successfully used this process in working with climate data collected in tabular form and shared the information in his GitHub repository. Koen Hufkens is active on GitHub as [khufkens](https://github.com/khufkens?tab=repositories).

## Simple batch-processing of images

If you want to perform more simple image cropping and rotating to improve layout recognition, you can consider using the [batch mode in GIMP](https://www.gimp.org/tutorials/Basic_Batch/) if your images are similar. There are also options to batch-process images via the computer command line, e.g. for splitting columns or separating pages.
