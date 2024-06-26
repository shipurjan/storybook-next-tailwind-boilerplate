export const getNamedObjects = <const Name extends string, A, B>(
  componentName: Name,
  objects: {
    Component: A;
    Variants: B;
  },
) => {
  const { Component, Variants } = objects;
  const variantsName = `${componentName}Variants` as const;
  return {
    [componentName]: Component,
    [variantsName]: Variants,
  } as {
    [_ in typeof componentName]: typeof Component;
  } & {
    [_ in typeof variantsName]: typeof Variants;
  };
};
