import ClassRoom from './0-classroom.js'

export default function initializeRooms() {
  let ret = [];
  ret.push(new ClassRoom(19));
  ret.push(new ClassRoom(20));
  ret.push(new ClassRoom(34));

  return ret;
}
