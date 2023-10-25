/**
 * типы объектов ошс
 * Created by mamaevd on 26.10.2022
 */
export default class ObjectType {
    /** идентификатор */
    public id!: string;

    /** наименование */
    public name!: string;
    /** родитель */
    public parent!: string;
    /** гисовые типы (на бэке по-другому не получается поэтому преобр-м строку формата "[123cde-asda..., 123asd-asd]" в массив строк для таблицы*/
    public gisObjectTypes: string[] = [];

    /** ----поля для фронта----- */

    /** строка с наименованиями гисовых типов привязанных к объектам */
    public gisTypeString: string = '';
    /** подчиненные типы */
    public children: ObjectType[] = [];
}

/** енам с описанием(сериализованный в объект) */
export class EnumWithDescription<T> {
    public value!: T;
    public description!: string;
}
