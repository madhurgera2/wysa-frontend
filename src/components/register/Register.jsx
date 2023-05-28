import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { Image } from "cloudinary-react";
import axios from "axios";
import { register } from "../../services/api"; // Import the register API function
function ImageUploadForm({ uploadedImageUrl, setUploadedImageUrl }) {
  console.log(uploadedImageUrl, "hfdsjgcb.");
  const handleDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];

    // Upload the file to Cloudinary
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my-upload-preset");
    formData.append("cloud_name", "dntrcfj5j");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dntrcfj5j/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);
      // Set the uploaded image URL
      setUploadedImageUrl(data.secure_url);
    } catch (error) {
      console.log("Error uploading image: ", error);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
    accept: "image/*",
    multiple: false,
  });

  return (
    <div>
      <div {...getRootProps()}>
        
      <p>Upload Your profile Image Here</p>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here...</p>
        ) : (
          <p>Drag and drop an image here, or click to select an image</p>
        )}
      </div>
      {uploadedImageUrl && typeof uploadedImageUrl != Boolean && (
        <div>
          <img src={uploadedImageUrl} alt="#" />
        </div>
      )}
    </div>
  );
}

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const handleRegister = async () => {
    try {
        const response =  await register(name, password, uploadedImageUrl);// Call the register API function
        console.log(response)
     if (response) {
        // If a token is present in the response, redirect to the chat page
        // toast.success("Registered Successfully");
        navigate("/chat");
      }
    } catch (error) {
      console.error(error);
      // Handle any errors that occur during the API call
      // toast.error("An error occurred during registration. Please try again.");
    }
  };

  return (
    <Box className="flex justify-center">
      <Box className="border-2 p-2 m-0 w-96 ">
        <TextField
          className=""
          label="Name"
          variant="outlined"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <TextField
          className=""
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        {/* <input type="file" accept="image/*" onChange={handleImageUpload} /> */}
        <ImageUploadForm
          uploadedImageUrl={uploadedImageUrl}
          setUploadedImageUrl={setUploadedImageUrl}
        />
        <br />
        <Button
          className=""
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleRegister}
        >
          Register
        </Button>
        <Link to="/" className="">
          Already have an account? Login here.
        </Link>
      </Box>
    </Box>
  );
};

export default Register;
