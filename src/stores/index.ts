import type {Transform} from "ol/transform";
import type DrawHole from "ol-ext/interaction/DrawHole";
import type DrawRegular from "ol-ext/interaction/DrawRegular";
import type { Draw, Select } from 'ol/interaction';
import type { Control } from 'ol/control';
import type {CoordinateSystemEnum} from "@/models/coordinates/Coordinates";
import type { CoordinatesDisplayType } from '@/models/coordinates/Coordinates';
import type Layer from "@/models/layer/Layer";
import type Placemark from "ol-ext/overlay/Placemark";
import type MapSettings from "@/models/mapsettings/MapSettings";
import CoordinateSystemList from "@/models/coordinates/CoordinateSystemList";
import CoordinateFormatList from "@/models/coordinates/CoordinateFormatList";


const archimapStore = {
    states: {
        /** Система координат */
        coordinateSystem: CoordinateSystemList.SK42,
        /** формат системы координат (град, град.мин, град.мин.сек) */
        coordinateFormat: CoordinateFormatList.ALL,
        /** Активное взаимодействие */
        activeIa: null,
        /** Выбранный слой */
        selectedLayer: null,
        /** Капля */
        placemarkOverlay: null,
        /** Настройки карты */
        mapSettings: null,
        /** Время в пути для линейки */
        showTravelTime: true,
        /** Взаимодействие селект */
        selectInteraction: null,
    },
    /** Изменить систему координат */
    changeCoordinateSystem(system: { id: CoordinateSystemEnum; name: string }) {
        this.states.coordinateSystem = system;
    },
    /** Изменить формат системы координат */
    changeCoordinateFormat(format: { id: CoordinatesDisplayType; name: string }) {
        this.states.coordinateFormat = format;
    },
    /** Изменить текущее взаимодействие */
    changeActiveIa(activeIa: NullOr<Control | Draw | Transform | DrawHole | DrawRegular>) {
        this.states.activeIa = activeIa as any;
    },
    /** Изменить выбранный слой */
    changeSelectedLayer(layer: NullOr<Layer>) {
        this.states.selectedLayer = layer as any;
    },
    /** Изменить каплю */
    changePlacemarkOverlay(placemark: NullOr<Placemark>) {
        this.states.placemarkOverlay = placemark as any;
    },
    changeMapSettings(mapSettings: MapSettings): void {
        this.states.mapSettings = mapSettings as any;
    },
    changeTravelTime(value: boolean): void {
        this.states.showTravelTime = value;
    },
    changeSelectInteraction(value: Select): void {
        this.states.selectInteraction = value as any;
    },
};

export function createStore(initialState: any = {}) {
    const store = archimapStore as any;
    Object.keys(initialState).forEach(key => {
        store.states[key] = initialState[key];
    });
    return store;
}
