import GisObjectType from '../types/GisObjectType';

export enum IconObjectTypeEnum {
    FORMATION = 'FORMATION',
    AIRCRAFT = 'AIRCRAFT',
    SHIP = 'SHIP',
    STATIONARY_OBJECT = 'STATIONARY_OBJECT',
    FLAGS = 'FLAGS',
}

/**
 * ДТО иерархического справочника для автокомплита
 */
export default class VectorIcon {
    /*** Идентификатор */
    public id: string = '';
    /*** Краткое наименование векторного значка */
    public shortName: NullOr<string> = null;
    /*** Полное наименование векторного значка */
    public name: NullOr<string> = null;
    /*** Категория векторных значков иерархического справочника */
    public vectorIconsCategory: NullOr<string> = null;
    /*** Изображение */
    public imageByteArray: null | number[] | string = null;
    /*** Наименование изображения векторного значка*/
    public imageName: NullOr<string> = null;
    /*** Наименование категории */
    public vectorIconsCategoryName: NullOr<string> = null;

    public objectType: NullOr<IconObjectTypeEnum> = null;
    /** тип объекта */
    public gisObjectType: NullOr<GisObjectType> = null;
    /** описание типа объекта */
    public get objectTypeName(): NullOr<string> {
        return this.gisObjectType ? this.gisObjectType.name : null;
    }

    public get objectTypeId(): NullOr<string> {
        return this.gisObjectType ? this.gisObjectType.id : null;
    }
    public set objectTypeId(id: NullOr<string>) {
        // не удалять, нужен для таблицы
    }

    public image: any = null;

    /*** Иконка в Base64 */
    public get imageBase64(): string | null {
        if (this.imageByteArray && this.imageName) {
            // расширение файла
            const extension = this.imageName.split('.').pop();
            const mimeType = extension === 'svg' ? 'svg+xml' : extension;
            return `data:image/${mimeType};base64,${this.imageByteArray}`;
        }
        return null;
    }
}
