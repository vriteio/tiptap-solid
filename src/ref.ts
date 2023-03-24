type Ref<V> = [() => V | null, (value: V) => void];

const createRef = <V>(): Ref<V> => {
  let ref: V | null = null;

  return [
    () => ref,
    (value) => {
      ref = value;
    }
  ];
};

export { createRef };
export type { Ref };
