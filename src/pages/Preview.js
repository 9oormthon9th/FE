import backendAPI from '../backend/backend';

export default function Preview() {
  backendAPI.ready().then((result) => {
    console.log(result);
  });
  return <>PREIVEW</>;
}
