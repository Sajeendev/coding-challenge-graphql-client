/**
 * Get error message from request
 */
export const getErrorMessageFromRequest = (error: any) => {
  const errorMsg = error?.response?.data?.message
    ? error.response.data.message
    : error.message;

  return errorMsg;
};
