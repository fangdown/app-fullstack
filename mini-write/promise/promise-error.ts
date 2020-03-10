function awaitCommon<T, U = any>(
  promise: Promise<T>
): Promise<[U | null, T | null]> {
  return promise
    .then<[null, T]>((data: T) => [null, data])
    .catch<[U, null]>(err => [err, null])
}

function awaitCommon2(promise) {
  return promise.then(data => [null, data]).catch(error => [error, null])
}
