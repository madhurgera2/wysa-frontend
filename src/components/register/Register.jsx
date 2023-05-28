import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import { Image } from "cloudinary-react";
import axios from "axios";
import { register } from "../../services/api"; 
function ImageUploadForm({ uploadedImageUrl, setUploadedImageUrl }) {
  console.log(uploadedImageUrl, "hfdsjgcb.");
  const handleDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];

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
        const response =  await register(name, password, uploadedImageUrl);
        console.log(response)
     if (response) {
        navigate("/chat");
      }
    } catch (error) {
      console.error(error);
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
