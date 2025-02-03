export const getUIView = () => {
  const searchParams = new URLSearchParams(location.search);
  const uiView = searchParams.get('view') ?? 'signin';
  return uiView as UIView;
};

export type UIView = 'signin' | 'signup';
