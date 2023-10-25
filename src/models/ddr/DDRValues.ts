/**
 * Created by mamaevd on 26.11.2021
 */

export default class DDRValues {
    public x: number = 600;
    public y: number = 400;
    public width: number = 600;
    public height: number = 340;
    public rotation: number = 0;
    public constructor(value?: DDRValues) {
        if (value) {
            this.x = value.x;
            this.y = value.y;
            this.width = value.width;
            this.height = value.height;
            this.rotation = value.rotation;
        }
    }
}
