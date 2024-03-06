## safe property

> a safer get/set in TypeScript(while we don't have optional chaining).

### Usage

Dev:

```bash
npm install @jimengio/safe-property
```

```ts
let a = { a1: { a2: { a3: { a4: 5 } } } };
safeGet(a, "a1"); // {a2: {a3: {a4: 5}}}
safeGet2(a, "a1", "a2"); // {a3: {a4: 5}}
safeGet3(a, "a1", "a2", "a3"); // {a4: 5}
safeGet4(a, "a1", "a2", "a3", "a4"); // 5

safeProp(a, "a1");
safeProp(a, "a1", "a2");
safeProp(a, "a1", "a2", "a3");
safeProp(a, "a1", "a2", "a3", "a4");

safeSet(a, "a1", 0);
safeSet2(a, "a1", "a2", 0);
safeSet3(a, "a1", "a2", "a3", 0);
safeSet4(a, "a1", "a2", "a3", "a4", 0);
```

### License

MIT
