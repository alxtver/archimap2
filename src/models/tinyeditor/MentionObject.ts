/**
 * дефолтные поля для плагина mention
 */
export class MentionObject {
    /** идентификато */
    public id: NullOr<string> = null;
    /** какое-то имя */
    public name: NullOr<string> = null;
    /** какое-то изображение */
    public image: NullOr<string> = null;
    /** какое-то описание */
    public description: NullOr<string> = null;
}
