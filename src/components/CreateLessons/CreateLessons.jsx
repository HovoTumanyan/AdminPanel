import "./CreateLessons.css";

export default function CreateLessons({
  onSubmit,
  videoPreview,
  photoPreview,
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

      <div className="custom-file-input">
        <label className="file-input-label">
          Видео урока
          <input
            type="file"
            {...register("video", { required: "*" })}
            accept="video/*"
            onChange={handleFileChange}
          />
        </label>
        {errors.video && (
          <p className="error-message">{errors.video.message}</p>
        )}
        {videoPreview && (
          <div>
            <video width="100%" controls>
              <source src={videoPreview} type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>
          </div>
        )}
      </div>

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
        {photoPreview && (
          <div>
            <img src={photoPreview} alt="Preview" />
          </div>
        )}
      </div>

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
