export declare function safeGet<T, K1 extends keyof T>(x: T, k1: K1): T[K1];
export declare function safeGet2<T, K1 extends keyof T, K2 extends keyof (T[K1])>(x: T, k1: K1, k2: K2): T[K1][K2];
export declare function safeGet3<T, K1 extends keyof T, K2 extends keyof (T[K1]), K3 extends keyof (T[K1][K2])>(x: T, k1: K1, k2: K2, k3: K3): T[K1][K2][K3];
export declare function safeGet4<T, K1 extends keyof T, K2 extends keyof (T[K1]), K3 extends keyof (T[K1][K2]), K4 extends keyof (T[K1][K2][K3])>(x: T, k1: K1, k2: K2, k3: K3, k4: K4): T[K1][K2][K3][K4];
export declare function safeSet<T, K1 extends keyof T>(x: T, k1: K1, v: T[K1]): void;
export declare function safeSet2<T, K1 extends keyof T, K2 extends keyof (T[K1])>(x: T, k1: K1, k2: K2, v: T[K1][K2]): void;
export declare function safeSet3<T, K1 extends keyof T, K2 extends keyof (T[K1]), K3 extends keyof (T[K1][K2])>(x: T, k1: K1, k2: K2, k3: K3, v: T[K1][K2][K3]): void;
export declare function safeSet4<T, K1 extends keyof T, K2 extends keyof (T[K1]), K3 extends keyof (T[K1][K2]), K4 extends keyof (T[K1][K2][K3])>(x: T, k1: K1, k2: K2, k3: K3, k4: K4, v: T[K1][K2][K3][K4]): void;
export declare function safeProp<T, K1 extends keyof T, K2 extends keyof (T[K1]), K3 extends keyof (T[K1][K2]), K4 extends keyof (T[K1][K2][K3])>(x: T, k1: K1, k2?: K2, k3?: K3, k4?: K4): T[K1] | T[K1][K2] | T[K1][K2][K3] | T[K1][K2][K3][K4];
