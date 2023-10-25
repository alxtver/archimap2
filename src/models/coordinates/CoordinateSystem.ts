/**
 * формат системы координат
 * Created by mamaevd on 08.04.2021
 */
import { CoordinateSystemEnum } from './Coordinates';

export default class CoordinateSystem {
    public id!: CoordinateSystemEnum; // название системы
    public name!: string; // имя для отображения
}
