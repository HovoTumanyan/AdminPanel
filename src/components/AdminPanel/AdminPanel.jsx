import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./AdminPanel.css";
import CreateLessons from "../CreateLessons/CreateLessons";
import LessonsList from "../LessonsList/LessonsList";
import { useLessons } from "../../contexts/LessonsContext";

const AdminPanel = () => {
  const { lessons, setLessons } = useLessons();
  const [videoPreview, setVideoPreview] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const videoFile = data.video[0];
    const photoFile = data.photo[0];

    const videoUrl = URL.createObjectURL(videoFile);
    const photoUrl = URL.createObjectURL(photoFile);

    const newLesson = {
      title: data.title,
      video: videoUrl,
      photo: photoUrl,
      homework: data.homework,
      id: window.crypto.randomUUID().slice(0, 5),
    };

    setLessons([...lessons, newLesson]);
    reset();
    setVideoPreview(null);
    setPhotoPreview(null);
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    if (name === "video" && file) {
      setVideoPreview(URL.createObjectURL(file));
    }

    if (name === "photo" && file) {
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handleDeleteLesson = (id) => {
    setLessons(lessons.filter((lesson) => lesson.id !== id));
  };

  return (
    <div className="admin-container">
      <div className="admin-panel">
        <h1>Создать урок</h1>
        <button onClick={() => navigate("/")}>Назад</button>
        <CreateLessons
          onSubmit={onSubmit}
          videoPreview={videoPreview}
          photoPreview={photoPreview}
          handleFileChange={handleFileChange}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
        <h2>Уроки {[lessons.length]}</h2>
        <LessonsList
          lessons={lessons}
          handleDeleteLesson={handleDeleteLesson}
        />
      </div>
    </div>
  );
};

export default AdminPanel;
