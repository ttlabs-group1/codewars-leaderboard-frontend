export interface Response<T> {
  success: boolean;
  message?: string;
  data: {
    data: T;
  };
}
