export default function loadBalancer(chinaDownload, USDownload) {
  return Promise
    .any([chinaDownload, USDownload])
    .then((data) => data)
    .catch((error) => error);
}
