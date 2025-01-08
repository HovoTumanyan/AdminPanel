import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CreateLessons from "../CreateLessons/CreateLessons";
import LessonsList from "../LessonsList/LessonsList";
import { useLessons } from "../../contexts/LessonsContext";
import "./AdminPanel.css";

const AdminPanel = () => {
  const { lessons, setLessons } = useLessons();
   // Состояние для превью файлов (видео и фото)
  const [previews, setPreviews] = useState({ video: null, photo: null });
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Формируем объект с превью видео и фото
    const files = ["video", "photo"].reduce((acc, key) => {
      const file = data[key][0];
      acc[key] = file ? URL.createObjectURL(file) : null;
      return acc;
    }, {});

    const newLesson = {
      title: data.title,
      video: files.video,
      photo: files.photo,
      homework: data.homework,
      id: window.crypto.randomUUID().slice(0, 5),
    };

    setLessons([...lessons, newLesson]);
    reset();
    setPreviews({ video: null, photo: null });
  };
  
// Обработчик изменения файлов (для превью)
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files[0]) {
      setPreviews((prev) => ({
        ...prev,
        [name]: URL.createObjectURL(files[0]),
      }));
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
          previews={previews}
          handleFileChange={handleFileChange}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
        <h2>Уроки ({lessons.length})</h2>
        <LessonsList
          lessons={lessons}
          handleDeleteLesson={handleDeleteLesson}
        />
      </div>
    </div>
  );
};

export default AdminPanel;
