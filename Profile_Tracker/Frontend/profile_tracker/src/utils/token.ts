export const getToken = (): string | null => {
  const encoded = localStorage.getItem("accessToken");
  return encoded ? atob(encoded) : null;
};

export const isAuthenticated = (): boolean => !!getToken();
