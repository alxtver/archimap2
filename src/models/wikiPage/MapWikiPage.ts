/**
 * вики-страница с карты
 * Created by mamaevd on 22.12.2021
 */

export default class MapWikiPage {
    /** идентификатор */
    public id: UUID = null;

    /** Ссылка на аварию */
    public accident: UUID = null;

    /** Ссылка на пользователя */
    public user: UUID = null;

    /** Содержание страницы, включая теги и ссылки на картинки */
    public content: string = '';

    /** Отступ страницы по вертикали */
    public verticalOffset: number = 0;

    /** Отступ страницы по горизонтали */
    public horizontalOffset: number = 0;

    /** Ширина страницы */
    public width: number = 0;

    /** Высота страницы */
    public height: number = 0;
}
