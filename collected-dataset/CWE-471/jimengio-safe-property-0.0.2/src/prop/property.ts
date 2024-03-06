// get

export function safeGet<T, K1 extends keyof T>(x: T, k1: K1): T[K1] {
  if (x != null) {
    return x[k1];
  }
  return null;
}

export function safeGet2<T, K1 extends keyof T, K2 extends keyof (T[K1])>(x: T, k1: K1, k2: K2) {
  if (x != null) {
    let target = x[k1];
    if (target != null) {
      return target[k2];
    }
  }
  return null;
}

export function safeGet3<T, K1 extends keyof T, K2 extends keyof (T[K1]), K3 extends keyof (T[K1][K2])>(x: T, k1: K1, k2: K2, k3: K3) {
  if (x != null) {
    let target = x[k1];
    if (target != null) {
      let target2 = target[k2];
      if (target2 != null) {
        return target2[k3];
      }
    }
  }
  return null;
}

export function safeGet4<T, K1 extends keyof T, K2 extends keyof (T[K1]), K3 extends keyof (T[K1][K2]), K4 extends keyof (T[K1][K2][K3])>(
  x: T,
  k1: K1,
  k2: K2,
  k3: K3,
  k4: K4
) {
  if (x != null) {
    let target = x[k1];
    if (target != null) {
      let target2 = target[k2];
      if (target2 != null) {
        let target3 = target2[k3];
        if (target3 != null) {
          return target3[k4];
        }
      }
    }
  }
  return null;
}

// set

export function safeSet<T, K1 extends keyof T>(x: T, k1: K1, v: T[K1]) {
  if (x == null) {
    throw new Error("Cannot set on null object");
  }
  x[k1] = v;
}

export function safeSet2<T, K1 extends keyof T, K2 extends keyof (T[K1])>(x: T, k1: K1, k2: K2, v: T[K1][K2]) {
  if (x == null) {
    throw new Error("Cannot set on null object");
  }
  if (x[k1] == null) {
    x[k1] = {} as any;
  }
  x[k1][k2] = v;
}

export function safeSet3<T, K1 extends keyof T, K2 extends keyof (T[K1]), K3 extends keyof (T[K1][K2])>(x: T, k1: K1, k2: K2, k3: K3, v: T[K1][K2][K3]) {
  if (x == null) {
    throw new Error("Cannot set on null object");
  }
  if (x[k1] == null) {
    x[k1] = {} as any;
  }
  if (x[k1][k2] == null) {
    x[k1][k2] = {} as any;
  }
  x[k1][k2][k3] = v;
}
export function safeSet4<T, K1 extends keyof T, K2 extends keyof (T[K1]), K3 extends keyof (T[K1][K2]), K4 extends keyof (T[K1][K2][K3])>(
  x: T,
  k1: K1,
  k2: K2,
  k3: K3,
  k4: K4,
  v: T[K1][K2][K3][K4]
) {
  if (x == null) {
    throw new Error("Cannot set on null object");
  }
  if (x[k1] == null) {
    x[k1] = {} as any;
  }
  if (x[k1][k2] == null) {
    x[k1][k2] = {} as any;
  }
  if (x[k1][k2][k3] == null) {
    x[k1][k2][k3] = {} as any;
  }
  x[k1][k2][k3][k4] = v;
}

// alias

export function safeProp<T, K1 extends keyof T, K2 extends keyof (T[K1]), K3 extends keyof (T[K1][K2]), K4 extends keyof (T[K1][K2][K3])>(
  x: T,
  k1: K1,
  k2?: K2,
  k3?: K3,
  k4?: K4
) {
  if (x != null) {
    let target = x[k1];
    if (k2 == null) {
      return target;
    }
    if (target != null) {
      let target2 = target[k2];
      if (k3 == null) {
        return target2;
      }
      if (target2 != null) {
        let target3 = target2[k3];
        if (k4 == null) {
          return target3;
        }
        if (target3 != null) {
          return target3[k4];
        }
      }
    }
  }
  return null;
}
