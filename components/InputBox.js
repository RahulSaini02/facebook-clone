import { useSession } from "next-auth/client";
import { useRef, useState } from "react";
import Image from "next/image";
import firebase from "firebase";

import { db, storage } from "../firebase";

import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import { VideoCameraIcon } from "@heroicons/react/solid";

function InputBox() {
  const [session] = useSession();
  const inputRef = useRef(null);
  const fileRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  var name = session.user.name;
  name = name.split(" ");

  const addImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => setImageToPost(null);

  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          uploadTask.on(
            "state_change",
            null,
            (error) => console.log(error),
            () => {
              storage
                .ref("posts")
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = "";
  };
  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image
          className="rounded-full"
          src={session.user.image}
          height="40"
          width="40"
          laytout="fixed"
        />
        <form className="flex flex-1">
          <input
            type="text"
            placeholder={`What's on your mind, ${name[0]}?`}
            className="rounded-full flex-grow bg-gray-100 h-12 px-5 focus-within:outline-none placeholder-gray-500"
            ref={inputRef}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
          >
            <img
              className="object-contain h-10"
              src={imageToPost}
              alt="Post Image"
            />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>
      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Vedio</p>
        </div>
        <div className="inputIcon" onClick={() => fileRef.current.click()}>
          <PhotographIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Vedio</p>
          <input type="file" hidden onChange={addImage} ref={fileRef} />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
