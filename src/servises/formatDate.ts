
  const formatDate = (d: Date):string => {
    const months:string[] = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const days:string[] = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Satuday",
    ];
    const day:string = days[d?.getDay()];
    const date:number = d?.getDate();
    const month:string = months[d?.getMonth()];
    return `${month} ${date} , ${day}. `;
  };
export default formatDate;