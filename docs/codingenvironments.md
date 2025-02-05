# How to run our code in different coding environments

The code that we provide in this repository can be run in different coding environments but as this requires slight adjustments in path definitions and package imports, we have created different versions of the code for three different environments:

## Running the code in BinderHub

Your first option is to run the code in this repository using **MyBinder**, a temporary environment that is great for testing and teaching.

Before you can use our sample files or your selected sources, you need to **fork** this repository into your own GitHub account.
- Click the **Fork** button in the upper-right corner of this GitHub page.
- This will create a copy of the repository in your GitHub account.

If you do not want to work with our data samples, you can proceed to upload your own `.jpg` and `.txt` files for testing in the 📂 designated folders.
 
- In your **forked repository**, navigate to the folder where you want to upload your files:
   - `user_data_JPG/` → for `.jpg` image files.
   - `user_data_TXT/` → for `.txt` text files.
- Click **Add file → Upload files**.
- Select your `.jpg` or `.txt` files from your computer.
- Click **Commit changes**.

Once you have uploaded your files, you can run this repository in Binder. **Copy the link** and replace `YOUR-GITHUB-USERNAME` with your actual GitHub username:

**https://mybinder.org/v2/gh/YOUR-GITHUB-USERNAME/atr-historical-research/main**

Example: If your GitHub username is `MonikaBarget`, the link would be:
  ```
  https://mybinder.org/v2/gh/MonikaBarget/atr-historical-research/main
  ```

Paste the modified link into your **web browser** and press **Enter**. Binder will start setting up the environment for you. This may take a few minutes. Once Binder loads, click on the **notebooks folder** and open the relevant Jupyter Notebooks in the **binder-notebooks** folder. Once Binder is running, your uploaded files will be available in the **user_data_JPG/** and **user_data_TXT/** folders.

## Running the code in Google Colab

If **BinderHub** is not available, you can run the notebooks using **Google Colab**. Google Colab allows you to run Jupyter notebooks in the cloud using your **Google account**, but you should be aware that this is proprietary service. Uploading sensitive data to Google is not recommended.

- To launch Google Colab from GitHub, first fork the repository and add your own data to the relevant folders. Then open the **colab-notebooks** folder in your forked repository.
- Click on the notebook (`.ipynb` file) you want to run.
- Click the **Open in Colab** button at the top of the file, or **manually open it** using the following link:
```
https://colab.research.google.com/github/YOUR-GITHUB-USERNAME/REPO-NAME/blob/main/notebooks/YOUR_NOTEBOOK.ipynb
 ```

- Replace `YOUR-GITHUB-USERNAME` with your GitHub username.
- Replace `REPO-NAME` with the repository name.
- Replace `YOUR_NOTEBOOK.ipynb` with the actual notebook filename.

## Running the code in Kaggle

As a third alternative, you can use the [Kaggle](https://www.kaggle.com) environment, where you can easily create a user account and store smaller amounts of data on a free license. For larger data sets, you will have to pay, and you should also check Kaggle's terms and conditions before uploading any sensitive data. The advantage of the Kaggle Python 3 environment is that it already comes with many helpful analytics libraries installed. You can write up to 20GB to the **current directory (/kaggle/working/)** that gets preserved as output when you create a version using "Save & Run All". You can also write temporary files to **/kaggle/temp/**, but they won't be saved outside of the current session.

After having signed in to the Kaggle website, you can click on **New Notebook** to start a new project. In the top menu, go to File → Upload Notebook. Here you can upload the .ipynb notebooks from the **kaggle-notebooks** folder in this repository.

To upload your own `.jpg` or `.txt` files, click **Add Data** in the right panel. Select **Upload Data** and add your files. Our Kaggle code should automatically capture the data if you use the same folder names. 

