import { Transform } from 'class-transformer';

/**
 * гисовый тип объекта
 * Created by mamaevd on 31.10.2022
 */

export default class GisObjectType {
    /** идентификатор */
    public id: NullOr<string> = null;

    /** наименование */
    public name: NullOr<string> = null;
    /** типы объектов (на бэке по-другому не получается поэтому преобр-м строку формата "[123cde-asda..., 123asd-asd]" в массив строк для таблицы*/
    @Transform(
        (value: any): string[] => {
            // регулярка чтобы заменил все пробелы
            const regex = new RegExp(' ', 'gi');
            // обрезаем кавычки и скобочки и убираем пробелы
            value = value.slice(1, value.length - 1).replace(regex, '');
            // разбиваем на массив (проверка чтобы не было массива с пустой строкой)
            return value.length ? value.split(',') : [];
        }
    )
    public objectTypes: string[] = [];

    /** является ли объект подвижным */
    public isMobile: boolean = false;
}
