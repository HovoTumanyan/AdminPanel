import "./CreateLessons.css";

export default function CreateLessons({
  onSubmit,
  previews,
  handleFileChange,
  register,
  handleSubmit,
  errors,
}) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Название урока:
          <input
            type="text"
            {...register("title", { required: "*" })}
            placeholder="Введите название урока"
          />
        </label>
        {errors.title && (
          <p className="error-message">{errors.title.message}</p>
        )}
      </div>

      {/* Поле для загрузки видео */}
      <div className="custom-file-input">
        <label className="file-input-label">
          Видео урока
          <input
            type="file"
            {...register("video", { required: "*" })}
            accept="video/*" // Ограничение типов файлов (только видео)
            onChange={handleFileChange} // Обработчик для отображения превью
          />
        </label>

        {errors.video && (
          <p className="error-message">{errors.video.message}</p>
        )}
      </div>

      {/* Поле для загрузки фото */}
      <div className="custom-file-input">
        <label>
          Фото урока
          <input
            type="file"
            {...register("photo", { required: "*" })}
            accept="image/*" 
            onChange={handleFileChange} 
          />
        </label>
        {errors.photo && (
          <p className="error-message">{errors.photo.message}</p>
        )}
      </div>

      {/* Контейнер для превью загруженных файлов */}
      <div className="preview-container">
        {/* Превью для загруженного видео */}
        {previews.video && (
          <div className="video-preview">
            <video width="100%" controls>
              <source src={previews.video} type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>
        )}
        {/* Превью для загруженного фото */}
        {previews.photo && (
          <div className="photo-preview">
            <img src={previews.photo} alt="Preview" />
          </div>
        )}
      </div>

      {/* Поле для ввода домашнего задания */}
      <div>
        <label>
          Домашнее задание:
          <textarea
            {...register("homework", { required: "*" })}
            placeholder="Введите домашнее задание"
          ></textarea>
        </label>

        {errors.homework && (
          <p className="error-message">{errors.homework.message}</p>
        )}
      </div>

      <button type="submit">Создать урок</button>
    </form>
  );
}
