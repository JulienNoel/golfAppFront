export default function (golfListFiltered = [], action) {
    console.log(action)
    if (action.type === "FilterGolf") {
      var golfListFilteredCopy = [...golfListFiltered];
      golfListCopy.push(action.golf);
      return golfListFilteredCopy;
    } else {
      return golfListFiltered;
    }
  }
  