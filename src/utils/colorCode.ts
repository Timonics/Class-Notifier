const statusColorCode = (status: string) => {
  switch (status.toLowerCase()) {
    case "ongoing":
      return "#175CD3";
    case "pending":
      return "#F2C94C";
    case "reschedule":
      return "#5925DC";
    case "canceled":
      return "#F90C10";
    case "exams":
      return "#219653";
    case "postponed":
      return "#F52D56";
    default:
      return "000";
  }
};

export { statusColorCode };
