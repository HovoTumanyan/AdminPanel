import "./LessonsList.css";

export default function LessonsList({ lessons, handleDeleteLesson }) {
  return lessons.length > 0 ? (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Название</th>
          <th>Видео</th>
          <th>Фото</th>
          <th>Домашнее задание</th>
          <th>Действие</th>
        </tr>
      </thead>
      <tbody>
        {/* Перебираем массив уроков для создания строк таблицы */}
        {lessons.map((lesson, index) => (
          <tr key={lesson.id}>
            <td>{index + 1}</td>
            <td>{lesson.title}</td>
            {/* Видео урока */}
            <td>
              <video controls>
                <source src={lesson.video} type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            </td>
            {/* Фото урока */}
            <td>
              <img src={lesson.photo} alt="Фото урока" />
            </td>
            <td>{lesson.homework}</td>
            {/* Удаление урока */}
            <td style={{ padding: "10px" }}>
              <span
                title="Удалить урок"
                onClick={() => handleDeleteLesson(lesson.id)} 
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                ✖
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    
    <p>Уроки пока не добавлены.</p>
  );
}
