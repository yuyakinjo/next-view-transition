interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props) => {
  return <div className="flex flex-col min-h-screen">{children}</div>;
};
