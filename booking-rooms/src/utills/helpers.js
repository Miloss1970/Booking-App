export function transformStatus(status) {
  if (!status) return status;

  return status.split(" ").join("-").toLowerCase();
}
