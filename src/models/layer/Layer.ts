/**
 * Слой карты
 *
 * Created by kalinin on 09.11.2021.
 */
import User from '../user/User';
import FeatureItem from './FeatureItem';
export interface IStyleProperties {
    [key: string]: string | number | boolean;
}

/*** Дефолтные настройки */
export const defaultStyleProperties = {
    textColor: '#000',
    strokeColor: '#fff',
    strokeWidth: 1,
    fontSize: 13,
    description: '',
};
/*** Дефолтные настройки пользовательских слоев */
export const userLayerStyleProperties = {
    textColor: '#3d3d3d',
    strokeColor: '#c9bf26',
    strokeWidth: 1,
    fontSize: 14,
    description: '',
};

export interface StyleProperties {
    [key: string]: string | number | boolean;
}

export default class Layer {
    /**
     * Идентификатор слоя
     */
    public id!: NullOr<string>;
    /**
     * Название из конфига (id)
     */
    public defineName!: NullOr<string>;
    /**
     * Наименование слоя
     */
    public name!: NullOr<string>;
    /**
     * Порядковый номер слоя в стеке слоев
     */
    public orderNumber!: NullOr<number>;
    /**
     * Подкаталог каталога map.tilesDir, в котором лежат тайлы слоя
     */
    public dir!: NullOr<string>;
    /**
     * Полный путь к каталогу с тайлами.
     */
    public fullPath!: NullOr<string>;
    /**
     * Непрозрачность слоя
     */
    public opaque!: boolean;
    /**
     * Изначальная видимость слоя
     */
    public visibled!: boolean;
    public visible!: boolean;
    /**
     * Системный слой - true, пользовательский слой- false
     */
    public isSystem!: boolean;
    /**
     * Подложка
     */
    public isBaseLayer!: boolean;
    /**
     * Вышестоящий слой
     */
    public parent!: NullOr<string>;
    /**
     * Список подчиненных
     */
    public children!: Layer[] | FeatureItem[];

    /**
     * Пользователь создавший слой
     */
    public user!: NullOr<User>;

    /**
     * Можно ли удалять слой
     */
    public removable!: boolean;

    /**
     * Нужно ли масштабировать объекты на слое
     */
    public isScalability: boolean = true;

    /**
     * Настройки стилей слоя
     */
    public styleProperties: NullOr<StyleProperties> = null;

    /**
     * Ссылка на аварию
     */
    public accident!: NullOr<string>;

    /**
     * Дата создания аварии
     */
    public dateCreateAccident!: NullOr<Date>;

    public constructor() {
        this.id = null;
        this.defineName = null;
        this.orderNumber = null;
        this.fullPath = null;
        this.opaque = false;
        this.visibled = true;
        this.isSystem = false;
        this.isBaseLayer = false;
        this.parent = null;
        this.children = [];
        // так как можем создавать только пользовательские слои,
        // то в свойства стилей сетим дефолтные настройки пользовательских слоев
        this.styleProperties = userLayerStyleProperties;
    }
}
