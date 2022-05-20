export default function (golfName = "", action) {
  console.log("reducer", action.name);
  if (action.type === "AddGolfName") {
    return action.name;
  } else {
    return golfName;
  }
}
