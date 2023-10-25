export class CoordinatesType {
    public degrees: NullOr<number> = null; // Градусы
    public minutes: NullOr<number> = null; // Минуты
    public seconds: NullOr<number> = null; // Секунды
    public direction: number = 1; // Направление

    /**
     * Заданы ли координаты
     */
    public get isSet(): boolean {
        return !!this.degrees || !!this.minutes || !!this.seconds;
    }

    public constructor(
        degrees?: NullOr<number>,
        minutes?: NullOr<number>,
        seconds?: NullOr<number>,
        direction?: number
    ) {
        this.degrees = degrees ? degrees : null;
        this.minutes = minutes ? minutes : null;
        this.seconds = seconds ? seconds : null;
        this.direction = direction ? direction : 1;
    }
}
