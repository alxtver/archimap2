/**
 * Пользователь
 *
 * Created by kalinin on 09.11.2021.
 */
export default class User {
    /** Идентификатор пользователя */
    public id: string | null = null;
    /** Логин пользователя */
    public login: string | null = null;
    /** ФИО */
    public fio: string | null = null;
    /** Является ли суперпользователем */
    public isSuperUser!: boolean;
}
