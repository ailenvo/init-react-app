import React from "react";
import Dropzone from "react-dropzone";
import "./upload-image.scss";

type Props = {
  addFile: (file: File) => void;
  hidden?: boolean;
  id?: string;
  urlImage?: string;
};

// for profile picture
export function UploadAvatar(props: Props) {
  const onDrop = (accepted: any, rejected: any) => {
    if (accepted.length !== 0) {
      if (accepted[0].size < 10485760) {
        handleChangeImage(accepted[0]);
      } else {
        alert("error");
      }
    } else {
      alert("error");
    }
  };

  const handleChangeImage = (file: File) => {
    props.addFile(file);
  };
  const { urlImage: voidCheque } = props;

  const thumbs = <img src={voidCheque} alt="profile" />;

  const render = voidCheque ? (
    <aside>{thumbs}</aside>
  ) : (
    <div>
      <div>Drag & drop</div>
      <div>Your file here or Browse to upload.</div>
      <div>Acceptable Files Types - JPG, PNG.</div>
    </div>
  );

  return (
    <div>
      <Dropzone
        style={{
          objectFit: "cover",
          objectPosition: "center",
          border: "1px solid #e8e8e8 ",
          padding: "20px",
          textAlign: "center",
          borderRadius: "8px",
          cursor: "pointer"
        }}
        multiple={false}
        accept="image/jpeg, image/png,.pdf"
        tabIndex={-1}
        role="application"
        aria-hidden="true"
        onDrop={(accepted, rejected) => onDrop(accepted, rejected)}
      >
        {({ isDragAccept, isDragReject, acceptedFiles, rejectedFiles }) => {
          // for drag and drop warning statement
          if (isDragReject) return "Please submit a valid file";
          return render;
        }}
      </Dropzone>
    </div>
  );
}
