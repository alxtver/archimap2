/**
 * список форматов координат
 * Created by mamaevd on 09.04.2021
 */
import { CoordinatesDisplayType } from './Coordinates';

export default class CoordinateFormatList {
    public static WITHOUT_MINUTES = {
        id: CoordinatesDisplayType.WITHOUT_MINUTES,
        name: 'Град',
    };
    public static WITHOUT_SECONDS = {
        id: CoordinatesDisplayType.WITHOUT_SECONDS,
        name: 'Град, мин',
    };
    public static ALL = {
        id: CoordinatesDisplayType.ALL,
        name: 'Град, мин, сек',
    };
}
