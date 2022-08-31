// const UploadPhoto = () => {
//   const [uploadImage, setUploadImage] = useState(false);
//   const [file, setFile] = useState(null);
//   const [avatar, setAvatar] = useState(null);

//   const handleClick = () => {
//     setUploadImage(true);
//   };

//   const handleChange = (e) => {
//     setFile(e.target.avatar);
//   };

//   const handleUploadPhoto = async () => {
//     const formData = new FormData();
//     console.log(formData);

//     formData.append('file', file);
//     formData.append('filename', file.name);

//     const payload = {
//       method: 'POST',
//       body: formData,
//     };

//     try {
//       const response = await fetch(`${BASE_URL}/api/upload/file`, payload);
//       const data = await response.json();
//       setAvatar(data.url);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div className="profile__uploadPhotoContainer">
//       <div className="profile__uploadPhotoDescription">
//         <h1>Upload Photo</h1>
//       </div>
//       <div className="profile__imageContainer">
//         {
//           uploadImage
//           ?<
//           :<img src="" alt="profilePic"
//         }
//         <img src="" alt="profilePic"
//       </div>
//     </div>
//   );
// };
