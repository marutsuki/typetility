export type Tail<T> = List<T> | undefined;

export type List<T> = {
    head: T;
    tail?: Tail<T>;
};
