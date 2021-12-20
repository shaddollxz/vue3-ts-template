declare type DeepReadonly<T extends Object> = {
    readonly [K in keyof T]: T[K] extends Object ? DeepReadonly<T[K]> : T[K];
};

declare type NumberString = `${number}`;
