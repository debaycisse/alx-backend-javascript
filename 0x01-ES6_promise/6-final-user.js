import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([
      signUpUser(firstName, lastName), uploadPhoto(fileName),
    ])
    .then((allData) => allData.map((eachData) => ({
      status: eachData.status,
      value: eachData.status === 'rejected' ? eachData.reason : eachData.value,
    })))
    .catch((error) => [{ status: error.status, value: error.value }]);
}
