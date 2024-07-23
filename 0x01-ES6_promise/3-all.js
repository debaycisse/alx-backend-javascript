import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise
    .all([createUser(), uploadPhoto()])
    .then((userInfo) => {
      console.log(
        `${userInfo[1].body} ${userInfo[0].firstName} ${userInfo[0].lastName}`,
      );
    })
    .catch(() => console.error('Signup system offline'));
}
