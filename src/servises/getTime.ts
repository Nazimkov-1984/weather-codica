 const getTime = (t: number) =>
    new Date(t * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    export default getTime;