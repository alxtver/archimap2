import { CoordinateSystemEnum } from './Coordinates';

/**
 * список систем координат с названиями
 * Created by mamaevd on 09.04.2021
 */
export default class CoordinateSystemList {
    public static WGS84 = { id: CoordinateSystemEnum.WGS84, name: 'WGS-84' }; // Система координат WGS84
    public static SK42 = { id: CoordinateSystemEnum.SK42, name: 'СК-42' }; // Система координат SK42 WGS84
}
