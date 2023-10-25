import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import { ColorLike } from 'ol/colorlike';
import { Image } from 'ol/style';
import Geometry from 'ol/geom/Geometry';
import { RenderFunction } from 'ol/style/Style';

/**
 * Объект параметров стиля
 */
export default class StyleObject {
    public fillColor?: string | number[] | undefined;

    // stroke
    public strokeColor?: string | number[] | undefined;
    public strokeWidth?: number | undefined;
    public strokeMiterLimit?: number | undefined;
    public strokeLineDash?: number[] | undefined;
    public strokeLineDashOffset?: number | undefined;
    public strokeLineCap?: string | undefined;
    public strokeLineJoin?: string | undefined;
    public zIndex?: number | undefined;
    public fill?: Fill | undefined;
    public stroke?: Stroke | undefined;
    public renderer?: RenderFunction | undefined;

    // Text only
    public text?: string | Text | undefined;
    public textFont?: string | undefined;
    public textFontSize?: number | string | undefined;
    public textFontWeight?: string | undefined;
    public textFillColor?: string | number[] | undefined;
    public textStrokeColor?: string | number[] | undefined;
    public textStrokeWidth?: number | undefined;
    public textStrokeMiterLimit?: number | undefined;
    public textStrokeLineDash?: number[] | undefined;
    public textStrokeLineDashOffset?: number | undefined;
    public textStrokeLineCap?: string | undefined;
    public textStrokeLineJoin?: string | undefined;
    public textScale?: number | undefined;
    public textAlign?: string | undefined;
    public textRotation?: number | undefined;
    public textOffsetX?: number | undefined;
    public textOffsetY?: number | undefined;
    public textStroke?: Stroke | undefined;
    public textFill?: Fill | undefined;
    public textRotateWithView?: boolean | undefined;
    public textPadding?: number[] | undefined;
    public textMaxAngle?: number | undefined;
    public textOverflow?: boolean | undefined;
    public textPlacement?: string | undefined;
    public textBaseline?: string | undefined;
    public textBackgroundFillColor?: Fill | undefined;
    public textBackgroundStrokeColor?: Stroke | undefined;
    public textBackgroundStrokeWidth?: Stroke | undefined;
    public textBackgroundStrokeMiterLimit?: number | undefined;
    public textBackgroundStrokeLineDash?: Stroke | undefined;
    public textBackgroundStrokeLineDashOffset?: number | undefined;
    public textBackgroundStrokeCap?: Stroke | undefined;
    public textBackgroundStrokeJoin?: Stroke | undefined;

    // Image only
    public image?: Image | undefined;
    public imageSrc?: string | undefined;
    public imageSize?: number[] | undefined;
    public imageImgSize?: number[] | undefined;
    public imageOffset?: number | undefined;
    public imageAnchor?: number[] | undefined;
    public imageAnchorXUnits?: string | undefined;
    public imageAnchorYUnits?: string | undefined;
    public imageScale?: number | undefined;
    public imageRotation?: number | undefined;
    public imageRadius?: number | undefined;
    public imageRadius1?: number | undefined;
    public imageRadius2?: number | undefined;
    public imagePoints?: number | undefined;
    public imageAngle?: number | undefined;
    public imageOpacity?: number | undefined;
    public imageFillColor?: string | number[] | undefined;
    public imageStrokeColor?: string | number[] | undefined;
    public imageStrokeWidth?: number | undefined;
    public imageStrokeMiterLimit?: number | undefined;
    public imageStrokeLineDash?: number[] | undefined;
    public imageStrokeLineDashOffset?: number | undefined;
    public imageStrokeLineCap?: string | undefined;
    public imageStrokeLineJoin?: string | undefined;
    public imageAnchorOrigin?: string | undefined;
    public imageColor?: ColorLike | undefined;
    public imageOffsetOrigin?: string | undefined;
    public imageStroke?: Stroke | undefined;
    public imageFill?: Fill | undefined;
    public imageCrossOrigin?: string | undefined;
    public imageRotateWithView?: boolean | undefined;
    public imageDisplacement?: number[] | undefined;
    // геометрия
    public geom?: Geometry | object | Function | undefined; // Coordinates should be in map projection?: coordinates:[][], type:LineString|Polygon|Point;

    public constructor(
        strokeColor?: string,
        strokeWidth?: number,
        opacity?: number,
        strokeLineDash?: number[],
        geom?: Geometry | object | Function
    ) {
        this.strokeColor = strokeColor;
        this.strokeWidth = strokeWidth;
        this.strokeLineDash = strokeLineDash;
        this.geom = geom;
    }
}
