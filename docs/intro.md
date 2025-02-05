---
layout: default
title: Introduction
permalink: /docs/intro
---

# Teaching machines how to read - challenges of OCR and HWR technology as bottlenecks in cultural heritage intepretation

The Oxford Dictionary of Computer Science defines optical character recognition (OCR) as a “process in which a machine scans, recognizes, and encodes information printed or typed in alphanumerical characters.” OCR technology has significantly advanced since the first OCR devices recognized only a limited set of characters in machine-optimized fonts. Modern OCR software retrieves good results for printed material using the Latin alphabet in modern fonts. However, problems posed by historical and non-Latin characters, handwriting and complex layouts are areas of ongoing research. A lack of high-quality full text is still the bottleneck in many digital humanities and social sciences projects , especially those working in languages other than English.

Ideally, humanities and social sciences scholars use full text corpora transcribed by humans or generated via OCR technology to code sources for digital editions (most often using XML/TEI) or to generate structured data for network analysis or geographic visualisation. While several repositories of digitised books, including Google Books and HathiTrust, already provide scans with embedded OCR, full-text in languages such as Dutch, German or French often requires extensive cleaning due to scan quality, formatting issues, or the unique features of historical fonts.

Recent initiatives to improve OCR and HWR with *machine learning techniques* have targeted large heritage institutions but not necessarily included the research perspective. At the same time, researchers often lack the infrastructure and technical support to work with open-source OCR software such as Kraken, Tesseract, e-scriptorium and OCR4all. Rather, they resort to commercial alternatives that can make data reuse and sharing transcription models difficult.

It is, therefore, important that academic institutions, ideally in collaboration with each other, provide opportunities to run open-source OCR software in platform-independent academic research environments. Moreover, researchers and heritage professionals need to join forces to improve the pre-processing of source scans, layout recognition, and advanced context detection, including automated metadata identification. Dealing with missing values and false negatives remains challenging in fully automated transcription workflows, e.g. when coding exceptions into models. 

This repository collects challenges and best-practices related to the different strands of **automated text recognition**.
