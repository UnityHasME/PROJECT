// Выбор формы и добавление обработчика событий для отправки заявки
const form = document.getElementById("contact-form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Остановка отправки формы

  // Получение значений полей формы
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  const message = form.elements["message"].value;

  // Отправка данных на сервер (здесь нужно указать URL сервера для отправки данных)
  fetch("http://example.com/submit-form", {
    method: "POST",
    body: JSON.stringify({ name, email, message }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ошибка отправки данных на сервер");
      }
      alert("Заявка успешно отправлена");
      form.reset(); // Очистка формы
    })
    .catch((error) => {
      alert(error.message);
    });
});