/**
 * Отображаемые в координатах поля
 */
export enum CoordinatesDisplayType {
    ALL = 'ALL',
    WITHOUT_MINUTES = 'WITHOUT_MINUTES',
    WITHOUT_SECONDS = 'WITHOUT_SECONDS',
}

/**
 * Тип координат
 */
export enum CoordinatesTypeEnum {
    LATITUDE = 'LATITUDE',
    LONGITUDE = 'LONGITUDE',
}

/**
 * Система координат
 */
export enum CoordinateSystemEnum {
    SK42 = 'SK42',
    WGS84 = 'WGS84',
}
/**
 * Координаты
 */
export class Coordinates {
    public latitude!: NullOr<number>; // Широта
    public longitude!: NullOr<number>; // Долгота

    public constructor(latitude: NullOr<number>, longitude: NullOr<number>) {
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
