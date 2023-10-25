import { ISearchCheck } from 'niicps-vue-library/types/models';
export class SearchCheck implements ISearchCheck {
    public checkRegistry: boolean = false; // Учитывать регистр
    public checkFullCoincidence: boolean = false; // Только слово целиком

    public constructor(checkRegistry?: boolean, checkFullCoincidence?: boolean) {
        this.checkRegistry = !!checkRegistry;
        this.checkFullCoincidence = !!checkFullCoincidence;
    }
}
