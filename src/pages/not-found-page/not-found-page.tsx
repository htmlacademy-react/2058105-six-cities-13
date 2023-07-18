import { Helmet } from "react-helmet-async";

function NotFoundPage(): JSX.Element {
    return (
        <section>
            <Helmet>
                <title>Страница не найдена.</title>
            </Helmet>
            <h1>Ошибка 404. Страница не существует.</h1>
        </section>
    )
}

export default NotFoundPage;