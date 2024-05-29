import os

def rename_files(directory):
    # Change directory to the specified one
    os.chdir(directory)
    
    # Get a list of all files in the directory
    files = os.listdir()
    
    # Sort files alphabetically
    files.sort()
    
    # Counter for new names
    counter = 1
    
    # Rename each file
    for file in files:
        # Form the new name with the counter
        new_name = str(counter)  # Ensure that the numbers have leading zeros if needed
        # Add file extension to the new name
        file_extension = os.path.splitext(file)[1]  # Get the file extension
        new_name += file_extension
        
        # Rename the file
        os.rename(file, new_name)
        
        # Increment the counter
        counter += 1

# Specify the directory path
directory_path = "/workspaces/foodSuggester/assets/HIIT"

# Call the function to rename files
rename_files(directory_path)
