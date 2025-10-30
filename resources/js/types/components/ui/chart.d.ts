export type ChartConfig = {
  [k: string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<PropertyKey, string> }
  );
};

export type ChartContextProps = {
  config: ChartConfig;
};