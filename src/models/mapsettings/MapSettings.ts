export default class MapSettings {
    /*** Идентификатор */
    public id: NullOr<string> = null;
    /*** Настройки (ключ/значение) */
    public properties!: {
        [key: string]: string | number | boolean;
    };
}
