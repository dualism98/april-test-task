### Задание
Развернуть проект на React Native с использованием TypeScript. Добавить навигацию, сделать таб бар из 2-х скринов с иконками (назвать скрины по желанию, тематика проекта не важна) , подключить redux-toolkit. Далее с помощью компонента flatlist выводить карточки ( https://tyapk.ru/blog/post/rest-api-for-test-purpose ) метод /posts. Использовать RTK Query из reduxToolkit. Выводить title и body с сокращенным текстом в карточках, просто для галочки. При нажатии на карточку проваливаться в скрин, при маунте скрина делать запрос на /posts/id ( /posts/id , где id берется из предыдущего запроса, то есть передавать параметром id карточки во вложенный скрин), выводить полученные из запроса title и body в скрин. На экране списка карточек так же реализовать поиск по title или body, реализовать пагинацию или лэйзи лоадинг по списку. Выложить проект на гитхаб и прислать ссылку.

### Результат
<img width="607" alt="Screenshot 2023-11-26 at 17 26 38" src="https://github.com/dualism98/april-test-task/assets/58901926/a9f7c391-408d-4fa7-92fd-e310e363c894">
<img width="607" alt="Screenshot 2023-11-26 at 17 26 40" src="https://github.com/dualism98/april-test-task/assets/58901926/bcd8934a-a7a1-4791-9886-5f724d731b01">
<img width="607" alt="Screenshot 2023-11-26 at 17 26 52" src="https://github.com/dualism98/april-test-task/assets/58901926/747d91fa-0ef7-4f29-b60f-1727bf914c17">
<img width="607" alt="Screenshot 2023-11-26 at 17 26 56" src="https://github.com/dualism98/april-test-task/assets/58901926/d6d4c3f5-f592-49fd-9bda-d37e0f2e3197">
