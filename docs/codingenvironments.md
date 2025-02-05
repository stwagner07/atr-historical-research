# How to run our code in different coding environments

The code that we provide in this repository can be run in different coding environments but as this requires slight adjustments in path definitions and package imports, we have created different versions of the code for three different environments:

## Running the code in BinderHub

Your first option is to run the code in this repository using **MyBinder**, a temporary environment that is great for testing and teaching.

Before you can use our sample files or your personal files, you need to **fork** this repository into your own GitHub account.

1. Click the **Fork** button in the upper-right corner of this GitHub page.
2. This will create a copy of the repository in your GitHub account.

If you do not want to work with our data samples, you can proceed to upload your own `.jpg` and `.txt` files for testing in the 📂 designated folders.
 
1. In your **forked repository**, navigate to the folder where you want to upload your files:
   - `user_data_JPG/` → for `.jpg` image files.
   - `user_data_TXT/` → for `.txt` text files.
2. Click **Add file → Upload files**.
3. Select your `.jpg` or `.txt` files from your computer.
4. Click **Commit changes**.

Once you have uploaded your files, you can **run this repository in Binder**. **Copy the link** and replace `YOUR-GITHUB-USERNAME` with your actual GitHub username:

https://mybinder.org/v2/gh/YOUR-GITHUB-USERNAME/REPO-NAME/main

- Example: If your GitHub username is `johndoe`, the link would be:
  ```
  https://mybinder.org/v2/gh/johndoe/REPO-NAME/main
  ```

Paste the modified link into your **web browser** and press **Enter**. Binder will start setting up the environment. This may take a few minutes. Once Binder loads, click on the **notebooks folder** and open the relevant Jupyter Notebook. Once Binder is running, your uploaded files will be available in the **user_data_JPG/** and **user_data_TXT/** folders.
