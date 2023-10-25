export default class FeatureItem {
    /**
     * Идентификатор
     */
    public id!: NullOr<string>;
    /**
     * Наименование слоя
     */
    public name!: NullOr<string>;

    /**
     * Видимость feature
     */
    public visibled!: boolean;

    /**
     * Список подчиненных
     */
    public children: FeatureItem[] = [];

    /**
     * Можно ли удалять фичу
     */
    public removable!: boolean;

    /**
     * Вышестоящий слой
     */
    public parent!: NullOr<string>;

    /**
     * Является ли объект маршрутом
     */
    public isShipWay: boolean = false;

    /**
     * Ссылка на аварию
     */
    public accident!: NullOr<string>;

    public constructor(id: string, name: string, visibled: boolean, removable: boolean) {
        this.id = id;
        this.name = name;
        this.visibled = visibled;
        this.removable = removable;
        this.children = [];
    }
}
