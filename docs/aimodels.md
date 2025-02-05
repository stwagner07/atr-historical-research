# Overview of AI models and (AI-powered) OCR software used for text-processing in humanities research

## Commonly used OCR software

| **AI Model**            | **Pros**                                                                 | **Cons**                                                        |
|-------------------------|-------------------------------------------------------------------------|-----------------------------------------------------------------|
| **OpenAI GPT (e.g., GPT-4)** | Often used for post-processing tasks like spelling correction and named entity recognition (NER).  <br> - Supports multiple languages. | - Not specialized in OCR tasks.  <br> - Usage can be costly. |
| **Tesseract OCR + LSTM** | Open-source and widely accessible.  <br> - Supports numerous languages.  <br> - Customizable for historical texts. | - May struggle with handwritten or degraded documents. |
| **Transkribus (HTR)**    | Tailored for historical and handwritten documents.  <br> - Offers high accuracy with custom-trained models. | - Requires substantial training data.  <br> - Not entirely free to use. |
| **Kraken OCR**          | Flexible and customizable for various scripts, including historical ones.  <br> - Supports right-to-left scripts. | - Needs training for optimal performance. |
| **Google Vision OCR**    | Fast processing.  <br> - Handles multiple languages and complex layouts. | - Not specifically optimized for historical texts. |
| **Azure AI Vision OCR**  | Integrates advanced AI capabilities.  <br> - Scalable for large projects. | - Cloud-based services can incur significant costs. |
| **Amazon Textract**      | Capable of processing (modern) handwritten text.  <br> - Effective with complex document layouts. | - Limited specialization in historical documents. |
| **Meta's Nougat**        | Designed to transcribe (scientific) texts published in PDF format into Markdown format.  <br> - Utilizes Visual Transformer models for accurate text and formula recognition. | - Primarily focused on scientific documents.  <br> - May require adaptation for historical texts. |

## AI-powered OCR tools

| Tool               | Description |
|--------------------|-------------|
| **Transkribus** | Makes use of AI for different analytical tasks and the preparation of digital editions |
| **Azure AI Vision** | Provides computer vision capabilities, including text extraction from images |
| **ABBYY FineReader** | Offers an AI-powered OCR SDK that enables software developers to integrate text recognition into their applications |
| **Rossum** | Utilizes a proprietary AI engine to combine traditional OCR with AI for higher accuracy and scalability for enterprise applications |

## AI models used for OCR cleaning and analytical tasks (experimental)

| AI Model        | Text Processing | Image Processing | OCR/NLP Performance | Access Link |
|----------------|----------------|------------------|----------------------|-------------|
| **GPT-4o (OpenAI)** | Advanced text generation and understanding. | Accepts image inputs; suitable for multimodal tasks. | Excels in NLP tasks; capable of processing text within images. | [GPT-4o](https://openai.com) |
| **CLIP (OpenAI)** | Connects textual and visual concepts; not primarily for text generation. | Strong image classification and understanding. | Effective in linking text and images; can assist in OCR tasks. | [CLIP](https://openai.com) |
| **DALL·E 2 (OpenAI)** | Generates textual descriptions from images. | Creates images from textual descriptions. | Not designed for OCR; useful for generating visual data from text. | [DALL·E 2](https://openai.com) |
| **Llama 3.2 (Meta)** | Proficient in text generation and understanding. | Capable of processing images; suitable for multimodal applications. | Effective in NLP tasks; image processing capabilities can aid OCR. | [Llama 3.2](https://www.meta.ai/) |
| **ChatGPT (OpenAI)** | Advanced conversational AI for text-based interactions. | Limited to text-based interactions; does not process images. | Excels in NLP tasks; not applicable for OCR. | [ChatGPT](https://chat.openai.com/) |
| **Mistral AI** | Specializes in code generation and understanding. | Not designed for image processing. | Effective in programming-related NLP tasks; not suitable for OCR. | [Mistral AI](https://chat.mistral.ai/) |
| **Claude AI** | Advanced conversational AI with reasoning capabilities. | Not designed for image processing. | Excels in NLP tasks; not applicable for OCR. | [Claude AI](https://claude.ai/) |
| **Cohere** | Provides language models for text generation and understanding. | Not designed for image processing. | Effective in various NLP tasks; not suitable for OCR. | [Cohere](https://coral.cohere.com/) |
| **Copilot (Microsoft)** | Assists in code generation and understanding. | Not designed for image processing. | Effective in programming-related NLP tasks; not suitable for OCR. | [Copilot](https://copilot.microsoft.com/) |
| **Perplexity AI** | Provides answers to complex questions using language models. | Not designed for image processing. | Effective in information retrieval and NLP tasks; not suitable for OCR. | [Perplexity AI](https://www.perplexity.ai/) |
| **Inflection Pi AI** | Personal AI assistant for conversational interactions. | Not designed for image processing. | Excels in conversational NLP tasks; not applicable for OCR. | [Inflection Pi AI](https://pi.ai/) |
| **BlackBox AI** | Assists in code generation and debugging. | Not designed for image processing. | Effective in programming-related NLP tasks; not suitable for OCR. | [BlackBox AI](https://www.blackbox.ai/) |
| **Gemini (Google)** | Advanced AI model for text generation and understanding. | Capable of processing images; suitable for multimodal applications. | Effective in NLP tasks; image processing capabilities can aid OCR. | [Gemini](https://gemini.google.com/) |
| **Phind** | Search engine with AI capabilities for code and technical information. | Not designed for image processing. | Effective in information retrieval and NLP tasks; not suitable for OCR. | [Phind](https://www.phind.com/) |
| **You.com** | AI-powered search engine with conversational capabilities. | Not designed for image processing. | Effective in information retrieval and NLP tasks; not suitable for OCR. | [You](https://you.com/) |
| **Julius AI** | AI data analyst for interpreting and visualizing data. | Not designed for image processing. | Effective in data analysis and NLP tasks; not suitable for OCR. | [Julius AI](https://julius.ai/) |
| **WormGPT** | AI model with capabilities in various domains. | Not designed for image processing. | Performance in OCR/NLP tasks is not well-documented. | [WormGPT](https://flowgpt.com/chat/wormgpt-6) |
| **Poe** | Platform providing access to multiple AI chatbots. | Not designed for image processing. | Performance depends on the integrated models; generally effective in NLP tasks. | [Poe](https://poe.com/) |
| **T5 (Google)** | Converts various NLP tasks into a text-to-text format, enabling unified text processing. | Not designed for image processing. | Versatile in NLP tasks like translation, summarization, and question answering. | [Google T5](https://ai.google/research/) |
| **BERT (Google)** | Provides contextualized word embeddings by processing text bidirectionally. | Not designed for image processing. | Strong performance in tasks like sentiment analysis, text classification, and question answering. | [Google BERT](https://ai.google/research/) |
| **RoBERTa (Facebook)** | An optimized version of BERT with improved training methodology for better text understanding. | Not designed for image processing. | Outperforms BERT in various NLP benchmarks. | [Facebook RoBERTa](https://ai.facebook.com/) |
| **ALBERT (Google)** | A lighter and faster version of BERT with parameter reduction techniques. | Not designed for image processing. | Maintains performance while being more efficient. | [Google ALBERT](https://ai.google/research/) |
| **ELMo (AllenNLP)** | Generates contextualized word embeddings considering the entire sentence. | Not designed for image processing. | Effective in tasks like sentiment analysis and question answering. | [AllenNLP ELMo](https://allennlp.org/elmo) |
| **DeepSeek AI** | AI model for code generation and understanding. | Not designed for image processing. | Effective in programming-related NLP tasks; not suitable for OCR. | [DeepSeek AI](https://chat.deepseek.com/coder) |
| **1min AI** | All-in-one AI app for text, writing, image, audio, and video. | Capable of processing images; suitable for multimodal applications. | Performance in OCR/NLP tasks is not well-documented. | [1min AI](https://app.1min.ai/chat-with-ai) |
| **Cody** | AI assistant for code-related tasks. | Not designed for image processing. | Effective in programming-related NLP tasks; not suitable for OCR. | [Cody](https://sourcegraph.com/cody/chat) |
| **Codeium** | AI-powered code completion and generation tool. | Not designed for image processing. | Effective in programming-related NLP tasks; not suitable for OCR. | [Codeium](https://codeium.com/live/general) |
| **AI21 Jamba** | Language model for text generation and understanding. | Not designed for image processing. | Effective in various NLP tasks; not suitable for OCR. | [AI21 Jamba](https://studio.ai21.com/v2/chat) |
| **Hugging Face** | Platform providing access to various AI models. | Offers models for both text and image processing. | Performance depends on the selected model; many are effective in OCR/NLP tasks. | [Hugging Face](https://huggingface.co/chat/) |

## Ethical challenges

Working with AI raises questions of research integrity and ethics, especially when historical and multilingual sources are concerned. AI-powered OCR often performs better on widely used languages such as English and Spanish. In addition, AI-based spelling corrections trained on modern and more widespread language use may alter original meanings and ingest anachronisms in texts. AI would need to be trained on more diverse sources (including historical and regional texts) to perform better. At the moment, AI use still requires a high level of human monitoring. When publishing AI-enhanced text, scholars should flag where AI interventions (e.g. spelling corrections) have altered the original and what has been done to check the quality of the AI output. In many cases, direct AI text manipulation is not recommended. But AI can be used to develop controlled vocabularies or create lists of typical errors.


