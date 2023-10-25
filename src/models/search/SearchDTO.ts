import { fromLonLat } from 'ol/proj';
import { Polygon } from 'ol/geom';

export default class SearchDTO {
    public boundingbox!: string[];
    public category!: string;
    public display_name!: string;
    public geojson!: any;
    public importance!: number;
    public lat!: string;
    public lon!: string;
    public license!: string;
    public osm_id!: number;
    public osm_type!: string;
    public place_id!: number;
    public place_rank!: number;
    public type!: string;
    public searchType!: 'SEARCH' | 'REVERSE_SEARCH';

    public get boundingCoordinates(): {
        topLeft: number[];
        topRight: number[];
        bottomLeft: number[];
        bottomRight: number[];
    } {
        const coordinatesList = this.boundingbox.map((item: string): number => parseFloat(item));
        const topLeft = fromLonLat([coordinatesList[2], coordinatesList[1]]);
        const topRight = fromLonLat([coordinatesList[3], coordinatesList[0]]);
        const bottomLeft = fromLonLat([coordinatesList[2], coordinatesList[1]]);
        const bottomRight = fromLonLat([coordinatesList[3], coordinatesList[1]]);
        return { topLeft, topRight, bottomLeft, bottomRight };
    }

    public get extent(): number[] {
        const { topLeft, topRight, bottomLeft, bottomRight } = this.boundingCoordinates;
        const geometry = new Polygon([[topLeft, topRight, bottomLeft, bottomRight, topLeft]]);
        return geometry.getExtent();
    }
}
